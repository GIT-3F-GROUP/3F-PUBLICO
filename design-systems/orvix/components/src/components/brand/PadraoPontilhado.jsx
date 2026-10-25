import React from "react";

/* Padrão pontilhado ORVIX: malha em colmeia com 11 px entre centros, parada.
   modo "tom"      sem imagem: pontos um passo mais claros que a base (tom sobre tom).
   modo "luz"      sobre imagem: a imagem escurece por curva (0,8 · claridade^1,55) e,
                   nos pontos, aparece como é (FP-01; com desenho "faixas", FP-02).
   modo "perfurada" a imagem aparece inteira nos furos e fica a 28% entre eles (FP-05).
   modo "produto"  imagem escurecida por curva e pontos na cor do produto a 30% (FP-06; com "faixas", FP-07).
   A cor da imagem nunca é trocada e nenhuma camada cinza é posta por cima. */
const PP_FAIXA = 205, PP_INCLINACAO = 0.58;

function ppPontos(w, h, passo, desenho, raios) {
  const pts = [];
  const dy = passo * Math.sqrt(3) / 2;
  for (let j = 0; j * dy <= h + passo; j++) {
    const y = j * dy, x0 = (j % 2) * passo / 2;
    for (let x = x0; x <= w + passo; x += passo) {
      let r, faixa = 0;
      if (desenho === "faixas") {
        /* três faixas diagonais, como as pernas do X: topo à direita, base à esquerda */
        const u = x + y * PP_INCLINACAO, p = PP_FAIXA * 3;
        faixa = Math.floor((((u % p) + p) % p) / PP_FAIXA);
        r = raios.faixas[faixa];
      } else {
        r = raios.min + (raios.max - raios.min) * (0.5 + 0.5 * Math.sin(x / 170 + y / 260));
      }
      pts.push(x, y, r, faixa);
    }
  }
  return pts;
}

function ppDesenhar(ctx, pts, alfas) {
  for (let f = 0; f < 3; f++) {
    ctx.globalAlpha = alfas[f];
    ctx.beginPath();
    for (let i = 0; i < pts.length; i += 4) {
      if (pts[i + 3] !== f) continue;
      ctx.moveTo(pts[i] + pts[i + 2], pts[i + 1]);
      ctx.arc(pts[i], pts[i + 1], pts[i + 2], 0, Math.PI * 2);
    }
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function PadraoPontilhado({
  modo = "tom",
  desenho = "onda",
  imagem,
  alt = "",
  cor,
  opacidade,
  passo,
  className = "",
  style,
  children
}) {
  const wrapRef = React.useRef(null);
  const pontosRef = React.useRef(null);
  const luzRef = React.useRef(null);
  const fid = "ovx-pp-" + React.useId().replace(/[^A-Za-z0-9_-]/g, "");
  const comImagem = !!imagem && modo !== "tom";
  const mascara = comImagem && (modo === "luz" || modo === "perfurada");

  React.useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let espera = null;
    const desenhar = () => {
      const caixa = wrap.getBoundingClientRect();
      const w = Math.max(1, Math.round(caixa.width)), h = Math.max(1, Math.round(caixa.height));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const c = mascara ? document.createElement("canvas") : pontosRef.current;
      if (!c) return;
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
      const ctx = c.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const css = getComputedStyle(wrap);
      /* Sem imagem (tom sobre tom) a malha é fina e adensada: 5 px entre centros, pontos de 0,6 a 1,5 px.
         Sobre imagem vale a receita das referências FP: 11 px entre centros. */
      const raios = modo === "perfurada" ? { min: 3.5, max: 3.5, faixas: [3.5, 3.5, 3.5] }
        : modo === "produto" && desenho === "faixas" ? { min: 3, max: 3, faixas: [3, 3, 3] }
        : comImagem ? { min: 1.2, max: 3.4, faixas: [1.8, 2.8, 4.0] }
        : { min: 0.6, max: 1.5, faixas: [0.7, 1.1, 1.6] };
      const pts = ppPontos(w, h, passo || (comImagem ? 11 : 5), desenho, raios);
      let alfas = [1, 1, 1];
      if (mascara) ctx.fillStyle = "#fff";
      else if (modo === "produto") {
        ctx.fillStyle = cor || css.getPropertyValue("--verde-500").trim() || "#13a538";
        const a = opacidade == null ? (desenho === "faixas" ? 0.34 : 0.3) : opacidade;
        alfas = desenho === "faixas" ? [0.3 * a, 0.6 * a, a] : [a, a, a];
      } else {
        ctx.fillStyle = css.getPropertyValue("--pontilhado-ponto").trim() || "rgba(232,234,238,.08)";
        const a = opacidade == null ? 1 : opacidade;
        alfas = [a, a, a];
      }
      ppDesenhar(ctx, pts, alfas);
      if (mascara && luzRef.current) {
        const url = "url(" + c.toDataURL("image/png") + ")";
        luzRef.current.style.webkitMaskImage = url;
        luzRef.current.style.maskImage = url;
      }
    };
    desenhar();
    const ro = new ResizeObserver(() => { clearTimeout(espera); espera = setTimeout(desenhar, 150); });
    ro.observe(wrap);
    const mo = new MutationObserver(desenhar);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => { clearTimeout(espera); ro.disconnect(); mo.disconnect(); };
  }, [modo, desenho, imagem, cor, opacidade, passo, mascara, comImagem]);

  const h = React.createElement;
  const curva = modo === "perfurada" ? { type: "linear", slope: 0.28 } : { type: "gamma", amplitude: 0.8, exponent: 1.55 };
  return h("div", { ref: wrapRef, className: ["ovx-pp", "ovx-pp--" + modo, className].filter(Boolean).join(" "), style },
    comImagem ? h("svg", { className: "ovx-pp__defs", "aria-hidden": "true", focusable: "false" },
      h("filter", { id: fid, colorInterpolationFilters: "sRGB" },
        h("feComponentTransfer", null,
          h("feFuncR", curva), h("feFuncG", curva), h("feFuncB", curva)))) : null,
    comImagem ? h("img", { className: "ovx-pp__base", src: imagem, alt, style: { filter: "url(#" + fid + ")" } }) : null,
    mascara ? h("img", { ref: luzRef, className: "ovx-pp__luz", src: imagem, alt: "", "aria-hidden": "true" }) : null,
    mascara ? null : h("canvas", { ref: pontosRef, className: "ovx-pp__pontos", "aria-hidden": "true" }),
    children ? h("div", { className: "ovx-pp__conteudo" }, children) : null);
}

export { PadraoPontilhado };

import React from 'react';
import { Logo, BARYGEN_LOGO } from '../core/Logo.jsx';

// Rodapé com a logo principal: razão social e CNPJ logo abaixo dela, colunas de links, a linha do ©
// e a barra final com "Designed by XERXIZ.COM" à esquerda e "Uma empresa 3F.GROUP" à direita.
export function SiteFooter({ tone = 'dark', razaoSocial = 'BARYGEN Seeds Corporation do Brasil Ltda.', cnpj, about, columns = [], grupo = '3F.GROUP', grupoUrl = 'https://3f.group', assinatura = 'XERXIZ.COM', assinaturaUrl = 'https://xerxiz.com', ano = new Date().getFullYear(), className = '' }) {
  const claro = tone === 'light';
  // o nome BARYGEN no texto segue a regra de marca: Commissioner, BARY SemiBold e GEN ExtraBold
  const marca = t => String(t).split('BARYGEN').flatMap((p, i) => i ? [<span className="bry-wordmark" key={i}>BARY<b>GEN</b></span>, p] : [p]);
  // tom sobre tom: a silhueta da palheta, um tom acima do fundo
  const forma = BARYGEN_LOGO.svg({ type: 'palheta', color: claro ? 'rgba(246,162,0,.08)' : 'var(--tom-preto-2)', title: '' });
  return (
    <footer className={`bry-footer ${claro ? 'bry-footer--claro' : 'bry-footer--escuro'} ${className}`.trim()}>
      <span className="bry-footer__forma" aria-hidden="true" dangerouslySetInnerHTML={{ __html: forma }} />
      <div className="bry-footer__in">
        <div className="bry-footer__topo">
          <div className="bry-footer__marca">
            <Logo type="horizontal" version={claro ? 'colorida' : 'colorida-escuro'} height={52} />
            <p className="bry-footer__razao">{marca(razaoSocial)}</p>
            {cnpj && <p className="bry-footer__cnpj">CNPJ {cnpj}</p>}
            {about && <p className="bry-footer__sobre">{about}</p>}
          </div>
          {columns.length > 0 && (
            <div className="bry-footer__cols">
              {columns.map(c => (
                <nav className="bry-footer__col" key={c.title} aria-label={c.title}>
                  <h2 className="bry-footer__tit">{c.title}</h2>
                  <ul>{c.links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
                </nav>
              ))}
            </div>
          )}
        </div>
        <p className="bry-footer__copy">© {ano} {marca(razaoSocial)} Todos os direitos reservados.</p>
      </div>
      {(assinatura || grupo) && (
        <div className="bry-footer__barra"><div className="bry-footer__barra-in">
          {assinatura ? <span>Designed by<a href={assinaturaUrl} target="_blank" rel="noopener noreferrer">{assinatura}</a></span> : <span />}
          {grupo && <span>Uma empresa<a href={grupoUrl} target="_blank" rel="noopener noreferrer">{grupo}</a></span>}
        </div></div>
      )}
    </footer>
  );
}

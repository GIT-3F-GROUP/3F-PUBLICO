/* @ds-bundle: {"format":4,"namespace":"FarmSenseDesignSystem_c4c636","components":[{"name":"LogoCard","sourcePath":"components/src/brand/LogoCard.jsx"},{"name":"PatternLayer","sourcePath":"components/src/brand/PatternLayer.jsx"},{"name":"QuoteBlock","sourcePath":"components/src/brand/QuoteBlock.jsx"},{"name":"Swatch","sourcePath":"components/src/brand/Swatch.jsx"},{"name":"Button","sourcePath":"components/src/core/Button.jsx"},{"name":"Chip","sourcePath":"components/src/core/Chip.jsx"},{"name":"Divider","sourcePath":"components/src/core/Divider.jsx"},{"name":"GlassCard","sourcePath":"components/src/core/GlassCard.jsx"},{"name":"Icon","sourcePath":"components/src/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/src/core/IconButton.jsx"},{"name":"Kicker","sourcePath":"components/src/core/Kicker.jsx"},{"name":"Logo","sourcePath":"components/src/core/Logo.jsx"},{"name":"NeonDot","sourcePath":"components/src/core/NeonDot.jsx"},{"name":"SectionHeader","sourcePath":"components/src/core/SectionHeader.jsx"},{"name":"Surface","sourcePath":"components/src/core/Surface.jsx"},{"name":"Tile","sourcePath":"components/src/core/Tile.jsx"},{"name":"BarMeter","sourcePath":"components/src/data/BarMeter.jsx"},{"name":"DataTable","sourcePath":"components/src/data/DataTable.jsx"},{"name":"KpiTile","sourcePath":"components/src/data/KpiTile.jsx"},{"name":"ProgressRing","sourcePath":"components/src/data/ProgressRing.jsx"},{"name":"Sparkline","sourcePath":"components/src/data/Sparkline.jsx"},{"name":"StatRow","sourcePath":"components/src/data/StatRow.jsx"},{"name":"Alert","sourcePath":"components/src/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/src/feedback/EmptyState.jsx"},{"name":"RuleCard","sourcePath":"components/src/feedback/RuleCard.jsx"},{"name":"Skeleton","sourcePath":"components/src/feedback/Skeleton.jsx"},{"name":"StatusPill","sourcePath":"components/src/feedback/StatusPill.jsx"},{"name":"Tooltip","sourcePath":"components/src/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/src/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/src/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/src/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/src/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/src/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/src/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/src/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/src/navigation/Breadcrumb.jsx"},{"name":"DotNav","sourcePath":"components/src/navigation/DotNav.jsx"},{"name":"Pagination","sourcePath":"components/src/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/src/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/src/navigation/TopBar.jsx"}],"sourceHashes":{"components/brand/LogoCard.jsx":"4537a942f1a0","components/brand/PatternLayer.jsx":"676499cc4e86","components/brand/QuoteBlock.jsx":"a4eb59ab9e4e","components/brand/Swatch.jsx":"04f047e35598","components/core/Button.jsx":"3302a00ae91b","components/core/Chip.jsx":"e49508c35e47","components/core/Divider.jsx":"22c80c62439f","components/core/GlassCard.jsx":"54f5076aa93c","components/core/Icon.jsx":"68ed46759604","components/core/IconButton.jsx":"4ac16770eac9","components/core/Kicker.jsx":"55976063b6d7","components/core/Logo.jsx":"0610f8a8aeca","components/core/NeonDot.jsx":"5bf7ab628c0e","components/core/SectionHeader.jsx":"579bfc3f3e1f","components/core/Surface.jsx":"83fe515d4553","components/core/Tile.jsx":"eb16a7216f97","components/data/BarMeter.jsx":"d16b1f9ec6a1","components/data/DataTable.jsx":"106aedc616a7","components/data/KpiTile.jsx":"aa0964ada6fb","components/data/ProgressRing.jsx":"d00f791f6aac","components/data/Sparkline.jsx":"ad3d817dde4c","components/data/StatRow.jsx":"5cc6cad13b75","components/feedback/Alert.jsx":"b43c015d633a","components/feedback/EmptyState.jsx":"01d9f7edad46","components/feedback/RuleCard.jsx":"6e95ec3e7e07","components/feedback/Skeleton.jsx":"3522e4ba9f5e","components/feedback/StatusPill.jsx":"9f8b4d413fcb","components/feedback/Tooltip.jsx":"8305c4fb0cf4","components/forms/Checkbox.jsx":"c4d869b16295","components/forms/Input.jsx":"3e07bcbfc90c","components/forms/Radio.jsx":"b51195726c14","components/forms/SearchField.jsx":"360b7d4e78f5","components/forms/Select.jsx":"5e767300123f","components/forms/Switch.jsx":"635f95519793","components/forms/Textarea.jsx":"b385c735c3ab","components/navigation/Breadcrumb.jsx":"27b146e2da8a","components/navigation/DotNav.jsx":"7234879457e2","components/navigation/Pagination.jsx":"d09f709fe50e","components/navigation/Tabs.jsx":"198319f66141","components/navigation/TopBar.jsx":"6808404dd794","ui_kits/manual/ManualApp.jsx":"0570e39f8d5b","ui_kits/manual/ManualSections.jsx":"f3108bb1623c","ui_kits/painel/PainelApp.jsx":"136dc276c2d0","ui_kits/proposta/PropostaApp.jsx":"a9269d08aa63","ui_kits/proposta/PropostaPages.jsx":"e803f294146d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FarmSenseDesignSystem_c4c636 = window.FarmSenseDesignSystem_c4c636 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/PatternLayer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  'curvas-neon': 'fs-contour fs-contour--neon',
  'curvas-tonal': 'fs-contour fs-contour--tonal',
  'curvas-sombra': 'fs-contour fs-contour--sombra',
  'cristas-neon': 'fs-ridge fs-ridge--neon',
  'cristas-sombra': 'fs-ridge fs-ridge--sombra',
  grade: 'fs-grid',
  'grade-fina': 'fs-grid fs-grid--fine',
  'grade-larga': 'fs-grid fs-grid--wide',
  'grade-clara': 'fs-grid fs-grid--light',
  'grade-neon': 'fs-grid fs-grid--neon',
  pontos: 'fs-dots',
  'pontos-escuro': 'fs-dots fs-dots--dark',
  'pontos-neon': 'fs-dots fs-dots--neon',
  alvo: 'fs-target',
  'alvo-claro': 'fs-target fs-target--light',
  'alvo-centro': 'fs-target fs-target--center',
  varredura: 'fs-sweep',
  estratos: 'fs-strata',
  'estratos-claro': 'fs-strata--light',
  listras: 'fs-stripes',
  'listras-escuro': 'fs-stripes--dark',
  'listras-neon': 'fs-stripes--neon',
  linhas: 'fs-rows'
};
function PatternLayer({
  pattern = 'curvas-neon',
  corner = 'tr',
  animate = false,
  opacity,
  className = '',
  style,
  ...rest
}) {
  const cls = [MAP[pattern] || MAP['curvas-neon'], corner ? 'fs-corner-' + corner : '', animate ? pattern.startsWith('curvas') ? 'fs-am-contour' : pattern.startsWith('grade') ? 'fs-am-grid' : 'fs-am-drift' : '', className].filter(Boolean).join(' ');
  const needsBox = ['fs-stripes', 'fs-strata--light', 'fs-rows'].some(c => cls.includes(c));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      ...(needsBox ? {
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      } : null),
      ...(opacity != null ? {
        opacity
      } : null),
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { PatternLayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PatternLayer.jsx", error: String((e && e.message) || e) }); }

// components/brand/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteBlock({
  children,
  author,
  role,
  tone = 'light',
  mark = true,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    className: className,
    style: {
      position: 'relative',
      margin: 0,
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), mark && /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      position: 'absolute',
      top: -18,
      right: 8,
      fontSize: 120,
      lineHeight: 1,
      color: dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)',
      opacity: 0.15
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    className: "serif t-100",
    style: {
      fontStyle: 'italic',
      fontSize: 'clamp(24px,3vw,36px)',
      lineHeight: 1.18,
      margin: 0,
      maxWidth: '28ch',
      position: 'relative'
    }
  }, children), (author || role) && /*#__PURE__*/React.createElement("footer", {
    className: "row-tight",
    style: {
      gap: 8,
      marginTop: 'var(--s-4)'
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    className: "h4 t-100"
  }, author), role && /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-55"
  }, "\xB7 ", role)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/Swatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Swatch({
  name,
  hex,
  rgb,
  tag,
  dark = false,
  minHeight = 200,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['swatch', dark ? 'dark' : 'light', className].filter(Boolean).join(' '),
    style: {
      background: hex,
      minHeight,
      border: hex && hex.toUpperCase() === '#F7F3ED' ? '1px solid rgba(0,65,65,.06)' : undefined
    }
  }, rest), tag && /*#__PURE__*/React.createElement("span", {
    className: "corner-tag"
  }, tag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "hex",
    style: {
      marginTop: 'var(--s-2)'
    }
  }, hex), rgb && /*#__PURE__*/React.createElement("div", {
    className: "rgb"
  }, "RGB ", rgb)));
}
Object.assign(__ds_scope, { Swatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Swatch.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  'primary-dark': 'btn-primary-dark',
  'primary-light': 'btn-primary-light',
  'ghost-dark': 'btn-ghost-dark',
  'ghost-light': 'btn-ghost-light',
  neon: 'btn-neon'
};
function Button({
  children,
  variant = 'primary-dark',
  size = 'md',
  withArrow = false,
  disabled = false,
  href,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['btn', VARIANTS[variant] || VARIANTS['primary-dark'], size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '', 'fs-hv-lift', 'fs-pr-scale', 'fs-fx-ring', withArrow ? 'fs-hv-arrow' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, children, withArrow && /*#__PURE__*/React.createElement("svg", {
    className: "chev",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10M9 4l4 4-4 4"
  })));
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    disabled: disabled,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  light: 'chip-tone-light',
  dark: 'chip-tone-dark',
  neon: 'chip-neon',
  'neon-green': 'chip-neon-green',
  outline: 'chip-outline',
  solid: 'chip-solid'
};
function Chip({
  children,
  tone = 'light',
  dot = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['chip', TONES[tone] || TONES.light, className].filter(Boolean).join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: 'neon-dot' + (tone === 'neon-green' ? ' green' : tone === 'light' || tone === 'outline' ? ' green' : '')
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  vertical = false,
  spacing,
  className = '',
  style,
  ...rest
}) {
  if (vertical) return /*#__PURE__*/React.createElement("span", _extends({
    className: ['vrule', className].filter(Boolean).join(' '),
    style: style
  }, rest));
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['hairline', className].filter(Boolean).join(' '),
    style: {
      ...(spacing ? {
        margin: spacing + ' 0'
      } : null),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlassCard({
  children,
  tone = 'tone',
  accent,
  pattern,
  className = '',
  style,
  ...rest
}) {
  const toneCls = tone === 'dark' ? 'glass-dark' : tone === 'light' ? 'glass-light' : 'glass-tone';
  const accentCls = accent === 'ciano' ? 'with-neon' : accent === 'verde' ? 'with-neon-green' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['glass', toneCls, accentCls, className].filter(Boolean).join(' '),
    style: style
  }, rest), pattern && /*#__PURE__*/React.createElement("div", {
    className: pattern
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  stroke = 1.5,
  color = 'currentColor',
  className = '',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      try {
        window.lucide.createIcons({
          nameAttr: 'data-lucide',
          attrs: {},
          icons: window.lucide.icons
        });
      } catch (e) {/* noop */}
    }
  }, [name]);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    className: className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      strokeWidth: stroke,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  tone = 'light',
  size = 40,
  onClick,
  className = '',
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    className: ['fs-hv-tint', 'fs-pr-scale', 'fs-fx-ring', className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: size,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      background: 'transparent',
      border: light ? '1px solid rgba(0,65,65,.18)' : '1px solid rgba(255,255,255,.22)',
      color: light ? 'var(--verde-sombra)' : '#fff'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Kicker({
  children,
  tone = 'default',
  className = '',
  ...rest
}) {
  const style = tone === 'neon' ? {
    color: 'var(--ciano-neon)',
    opacity: 1
  } : tone === 'neon-green' ? {
    color: 'var(--verde-neon)',
    opacity: 1
  } : undefined;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['kicker', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'horizontal:cor': 'assets/Logos/logo-horizontal.png',
  'horizontal:branca': 'assets/Logos/logo-horizontal-mono-branca.svg',
  'horizontal:escura': 'assets/Logos/logo-horizontal-mono-escura.svg',
  'compacta:cor': 'assets/Logos/logo-compacta.png',
  'compacta:branca': 'assets/Logos/logo-compacta-mono-branca.svg',
  'compacta:escura': 'assets/Logos/logo-compacta-mono-escura.svg'
};
function Logo({
  shape = 'horizontal',
  variant = 'cor',
  width,
  height,
  base = '',
  className = '',
  style,
  ...rest
}) {
  const key = shape + ':' + variant;
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + (SRC[key] || SRC['horizontal:cor']);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "FarmSense",
    className: className,
    style: {
      width: width || (height ? 'auto' : '200px'),
      height: height || 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BG = {
  perola: 'bg-perola',
  rastro: 'bg-rastro',
  estrada: 'bg-estrada',
  escuro: 'bg-escuro',
  sombra: 'bg-sombra',
  anil: 'bg-anil',
  branco: 'bg-white'
};
const DARK_BG = ['sombra', 'anil'];
function LogoCard({
  background = 'perola',
  shape = 'horizontal',
  variant,
  tag,
  base = '',
  className = '',
  ...rest
}) {
  const auto = variant || (DARK_BG.includes(background) ? 'branca' : 'cor');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['logo-card', BG[background], shape === 'compacta' ? 'has-compact' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    base: base,
    shape: shape,
    variant: auto,
    width: "100%",
    style: {
      maxWidth: shape === 'compacta' ? 180 : 320
    }
  }), tag && /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: DARK_BG.includes(background) ? {
      color: 'rgba(255,255,255,.6)'
    } : undefined
  }, tag));
}
Object.assign(__ds_scope, { LogoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/NeonDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NeonDot({
  color = 'ciano',
  pulse = false,
  className = '',
  ...rest
}) {
  const cls = ['neon-dot', color === 'verde' ? 'green' : color === 'mudo' ? 'mute' : '', pulse ? 'fs-am-pulse' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { NeonDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NeonDot.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  num,
  children,
  tone = 'default',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['section-header', className].filter(Boolean).join(' ')
  }, rest), num && /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-num"
  }, "\xA7 ", num), /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: tone
  }, children));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Surface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  perola: 'fs-light-perola',
  rastro: 'fs-light-rastro',
  estrada: 'fs-light-estrada',
  papel: 'fs-light-papel',
  grade: 'fs-dark-grade',
  relevo: 'fs-dark-relevo',
  alvo: 'fs-dark-alvo',
  solo: 'fs-dark-solo'
};
const DARK = ['grade', 'relevo', 'alvo', 'solo'];
function Surface({
  children,
  variant = 'perola',
  wrap = true,
  className = '',
  style,
  ...rest
}) {
  const dark = DARK.includes(variant);
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ['fs-surface', SURFACES[variant] || SURFACES.perola, dark ? 'on-dark' : 'on-light', className].filter(Boolean).join(' '),
    style: style
  }, rest), wrap ? /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, children) : children);
}
Object.assign(__ds_scope, { Surface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Surface.jsx", error: String((e && e.message) || e) }); }

// components/core/Tile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tile({
  children,
  tone = 'light',
  pattern,
  padding,
  className = '',
  style,
  ...rest
}) {
  const cls = ['tile', tone === 'dark' ? 'tile-dark' : tone === 'print' ? 'tile-print' : '', className].filter(Boolean).join(' ');
  const base = tone === 'dark' ? {
    background: 'var(--verde-sombra)',
    borderColor: 'transparent',
    color: '#fff'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls.replace('tile tile-dark', 'tile'),
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...base,
      ...(padding ? {
        padding
      } : null),
      ...style
    }
  }, rest), pattern && /*#__PURE__*/React.createElement("div", {
    className: pattern
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Tile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tile.jsx", error: String((e && e.message) || e) }); }

// components/data/BarMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILLS = {
  sombra: 'var(--verde-sombra)',
  anil: 'var(--verde-anil)',
  bege: 'var(--bege-escuro)',
  neon: 'var(--ciano-neon)'
};
function BarMeter({
  label,
  value,
  max = 100,
  display,
  fill = 'sombra',
  tone = 'light',
  animate = true,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 4,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-70"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-100",
    style: {
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums'
    }
  }, display != null ? display : value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: dark ? 'rgba(255,255,255,.10)' : 'rgba(0,65,65,.08)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: animate ? 'fs-dv-bar' : '',
    style: {
      height: '100%',
      width: pct + '%',
      background: FILLS[fill] || FILLS.sombra
    }
  })));
}
Object.assign(__ds_scope, { BarMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  tone = 'light',
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  const line = dark ? 'rgba(255,255,255,.14)' : 'rgba(0,65,65,.18)';
  const soft = dark ? 'rgba(255,255,255,.08)' : 'rgba(0,65,65,.08)';
  return /*#__PURE__*/React.createElement("table", _extends({
    className: className,
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontVariantNumeric: 'tabular-nums',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 500,
      opacity: 0.55,
      padding: '6px 0',
      borderBottom: '1px solid ' + line
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: "fs-hv-tint fs-t-fast"
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '10px 0',
      borderBottom: i === rows.length - 1 ? 0 : '1px solid ' + soft,
      color: r[c.key + '_tone'] === 'positivo' ? 'var(--verde-anil)' : 'inherit',
      fontWeight: c.strong ? 700 : 400
    }
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function KpiTile({
  label,
  value,
  unit,
  delta,
  deltaTone = 'neutro',
  tone = 'light',
  className = '',
  ...rest
}) {
  const deltaColor = deltaTone === 'positivo' ? 'var(--verde-anil)' : deltaTone === 'neon' ? 'var(--ciano-neon)' : 'inherit';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['kpi', className].filter(Boolean).join(' '),
    style: {
      color: tone === 'dark' ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "v t-100"
  }, value, unit && /*#__PURE__*/React.createElement("sup", null, unit)), delta && /*#__PURE__*/React.createElement("div", {
    className: "delta",
    style: {
      color: deltaColor,
      opacity: deltaTone === 'neutro' ? 0.7 : 1
    }
  }, delta));
}
Object.assign(__ds_scope, { KpiTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiTile.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressRing({
  value = 0,
  size = 96,
  stroke = 6,
  color = 'var(--verde-sombra)',
  track = 'rgba(0,65,65,.10)',
  label,
  className = '',
  ...rest
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - Math.max(0, Math.min(100, value)) / 100 * c;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: track,
    strokeWidth: stroke,
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    stroke: color,
    strokeWidth: stroke,
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: off,
    style: {
      transition: 'stroke-dashoffset var(--d-slower) var(--e-entrance)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 800,
      fontSize: size * 0.24,
      letterSpacing: '-.02em'
    }
  }, label != null ? label : Math.round(value) + '%'));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sparkline({
  points = [],
  color = 'var(--ciano-neon)',
  height = 140,
  fillOpacity = 0.35,
  showHead = true,
  animate = true,
  className = '',
  ...rest
}) {
  const w = 400,
    h = 140;
  const max = Math.max(...points, 1),
    min = Math.min(...points, 0);
  const span = max - min || 1;
  const step = points.length > 1 ? w / (points.length - 1) : w;
  const coords = points.map((p, i) => [i * step, h - (p - min) / span * (h - 20) - 10]);
  const d = coords.map(([x, y], i) => (i ? 'L ' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)).join(' ');
  const area = d + ' L ' + w + ' ' + h + ' L 0 ' + h + ' Z';
  const id = React.useId ? React.useId().replace(/:/g, '') : 'spk';
  const head = coords[coords.length - 1] || [0, 0];
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: '0 0 ' + w + ' ' + h,
    className: className,
    style: {
      width: '100%',
      height
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: 'g' + id,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: color,
    stopOpacity: fillOpacity
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: 'url(#g' + id + ')'
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: color,
    strokeWidth: "1.5",
    fill: "none",
    className: animate ? 'fs-dv-draw' : ''
  }), showHead && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: head[0],
    cy: head[1],
    r: "10",
    fill: color,
    opacity: ".25"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: head[0],
    cy: head[1],
    r: "4",
    fill: color
  })));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/StatRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatRow({
  items = [],
  tone = 'light',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['row', className].filter(Boolean).join(' '),
    style: {
      gap: 'var(--s-7)',
      color: tone === 'dark' ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "vrule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v t-100"
  }, it.value, it.unit && /*#__PURE__*/React.createElement("sup", null, it.unit)), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, it.label)))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Alert({
  title,
  children,
  tone = 'info',
  surface = 'light',
  className = '',
  ...rest
}) {
  const dark = surface === 'dark';
  const accent = tone === 'ok' ? 'var(--verde-anil)' : tone === 'live' ? 'var(--ciano-neon)' : 'var(--verde-sombra)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fs-in-up', className].filter(Boolean).join(' '),
    style: {
      display: 'flex',
      gap: 'var(--s-3)',
      alignItems: 'flex-start',
      padding: 'var(--s-4)',
      borderRadius: 'var(--r-sm)',
      borderLeft: '3px solid ' + accent,
      background: dark ? 'rgba(255,255,255,.05)' : 'rgba(0,65,65,.05)',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13,
      fontWeight: 700,
      background: tone === 'ok' ? 'var(--verde-sombra)' : dark ? 'rgba(255,255,255,.12)' : 'rgba(0,65,65,.1)',
      color: tone === 'ok' ? 'var(--ciano-neon)' : 'inherit'
    }
  }, tone === 'ok' ? '✓' : tone === 'atencao' ? '!' : '·'), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "h4 t-100"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: title ? '6px 0 0' : 0
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  title,
  children,
  action,
  surface = 'light',
  className = '',
  ...rest
}) {
  const dark = surface === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['fs-in-fade', className].filter(Boolean).join(' '),
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      padding: 'var(--s-8) var(--s-6)',
      borderRadius: 'var(--r-md)',
      border: dark ? '1px dashed rgba(255,255,255,.2)' : '1px dashed rgba(0,65,65,.22)',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: dark ? 'fs-dots fs-dots--dark' : 'fs-dots'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h3 t-100"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: '10px auto 0',
      maxWidth: '46ch'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-5)'
    }
  }, action)));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/RuleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RuleCard({
  ok = true,
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['rule', ok ? 'ok' : 'no', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, ok ? '✓' : '✕'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h4 t-100"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: '6px 0 0'
    }
  }, children)));
}
Object.assign(__ds_scope, { RuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/RuleCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Skeleton({
  width = '100%',
  height = 12,
  radius = 'var(--r-xs)',
  surface = 'light',
  lines = 1,
  className = '',
  style,
  ...rest
}) {
  const cls = surface === 'dark' ? 'fs-ld-skeleton-dark' : 'fs-ld-skeleton';
  if (lines > 1) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: className,
      style: {
        display: 'grid',
        gap: 8,
        ...style
      }
    }, rest), Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      style: {
        width: i === lines - 1 ? '62%' : width,
        height,
        borderRadius: radius
      }
    })));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: [cls, className].filter(Boolean).join(' '),
    style: {
      width,
      height,
      borderRadius: radius,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatusPill({
  children,
  status = 'ativo',
  surface = 'light',
  className = '',
  ...rest
}) {
  const map = {
    ativo: {
      dot: 'green',
      tone: surface === 'dark' ? 'chip-neon-green' : 'chip-tone-light'
    },
    live: {
      dot: '',
      tone: 'chip-neon'
    },
    inativo: {
      dot: 'mute',
      tone: surface === 'dark' ? 'chip-tone-dark' : 'chip-tone-light'
    }
  };
  const cfg = map[status] || map.ativo;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['chip', cfg.tone, status === 'live' ? 'fs-am-pulse' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: 'neon-dot ' + cfg.dot
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  side = 'top',
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "fs-in-fade",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      zIndex: 30,
      background: 'var(--verde-sombra)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 'var(--r-xs)',
      fontSize: 12,
      letterSpacing: '.01em',
      boxShadow: 'var(--sh-3)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  tone = 'light',
  onChange,
  disabled,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    className: ['row-tight fs-t-base', className].filter(Boolean).join(' '),
    style: {
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fs-t-fast",
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--r-xs)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto',
      border: checked ? '1px solid var(--verde-sombra)' : dark ? '1px solid rgba(255,255,255,.3)' : '1px solid rgba(0,65,65,.28)',
      background: checked ? dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)' : 'transparent'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "11",
    height: "11",
    fill: "none",
    stroke: dark ? 'var(--verde-sombra)' : 'var(--ciano-neon)',
    strokeWidth: "2.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.4 3.4L13 5"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "body-sm"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  value,
  placeholder,
  tone = 'light',
  icon,
  trailing,
  onChange,
  disabled,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: ['stack', className].filter(Boolean).join(' '),
    style: {
      gap: 'var(--s-2)',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    style: {
      opacity: 0.55
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "fs-fx-border-neon fs-t-base",
    style: {
      background: dark ? 'rgba(255,255,255,.06)' : '#fff',
      border: dark ? '1px solid rgba(51,255,194,.3)' : '1px solid rgba(0,65,65,.18)',
      borderRadius: 'var(--r-sm)',
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      opacity: disabled ? 0.45 : 1
    }
  }, icon, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 16,
      color: 'inherit'
    }
  }, rest)), trailing), hint && /*#__PURE__*/React.createElement("span", {
    className: "body-sm",
    style: {
      opacity: 0.55
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  name,
  tone = 'light',
  onChange,
  disabled,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    className: ['row-tight fs-t-base', className].filter(Boolean).join(' '),
    style: {
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fs-t-fast",
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto',
      border: checked ? '1px solid var(--verde-sombra)' : dark ? '1px solid rgba(255,255,255,.3)' : '1px solid rgba(0,65,65,.28)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "body-sm"
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  value,
  placeholder = 'Buscar…',
  tone = 'light',
  trailing,
  onChange,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: ['fs-fx-border-neon fs-t-base', className].filter(Boolean).join(' '),
    style: {
      background: dark ? 'rgba(255,255,255,.06)' : '#fff',
      border: dark ? '1px solid rgba(51,255,194,.3)' : '1px solid rgba(0,65,65,.18)',
      borderRadius: 'var(--r-pill)',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      opacity: 0.6,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      fontSize: 15,
      color: 'inherit'
    }
  }, rest)), trailing);
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  tone = 'light',
  onChange,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: ['stack', className].filter(Boolean).join(' '),
    style: {
      gap: 'var(--s-2)',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    style: {
      opacity: 0.55
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    className: "fs-fx-border fs-hv-border",
    style: {
      width: '100%',
      appearance: 'none',
      background: dark ? 'rgba(255,255,255,.06)' : '#fff',
      border: dark ? '1px solid rgba(255,255,255,.18)' : '1px solid rgba(0,65,65,.18)',
      borderRadius: 'var(--r-sm)',
      padding: '12px 38px 12px 14px',
      font: 'inherit',
      fontSize: 16,
      color: 'inherit',
      outline: 'none',
      cursor: 'pointer'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  tone = 'light',
  onChange,
  disabled,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    className: ['row-tight fs-t-base', className].filter(Boolean).join(' '),
    style: {
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fs-t-base",
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--r-pill)',
      flex: '0 0 auto',
      position: 'relative',
      background: checked ? dark ? 'rgba(51,255,194,.9)' : 'var(--verde-sombra)' : dark ? 'rgba(255,255,255,.14)' : 'rgba(0,65,65,.15)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-t-base",
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: checked && dark ? 'var(--verde-sombra)' : '#fff',
      boxShadow: '0 1px 2px rgba(0,65,65,.25)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "body-sm"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  value,
  placeholder,
  rows = 4,
  tone = 'light',
  onChange,
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: ['stack', className].filter(Boolean).join(' '),
    style: {
      gap: 'var(--s-2)',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    style: {
      opacity: 0.55
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    className: "fs-fx-border",
    style: {
      background: dark ? 'rgba(255,255,255,.06)' : '#fff',
      border: dark ? '1px solid rgba(255,255,255,.18)' : '1px solid rgba(0,65,65,.18)',
      borderRadius: 'var(--r-sm)',
      padding: '12px 14px',
      font: 'inherit',
      fontSize: 16,
      color: 'inherit',
      outline: 'none',
      resize: 'vertical',
      lineHeight: 1.55
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "body-sm",
    style: {
      opacity: 0.55
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  tone = 'light',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['row-tight', className].filter(Boolean).join(' '),
    "aria-label": "Trilha",
    style: {
      gap: 8,
      color: tone === 'dark' ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), items.map((it, i) => {
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? undefined : it.href;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      className: "serif",
      style: {
        opacity: 0.4,
        fontSize: 13
      }
    }, "\xB7"), last || !href ? /*#__PURE__*/React.createElement("span", {
      className: "label",
      style: {
        opacity: last ? 1 : 0.55
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href,
      className: "label fs-hv-underline",
      style: {
        opacity: 0.55,
        textDecoration: 'none',
        color: 'inherit',
        border: 0
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DotNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DotNav({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: className,
    "aria-label": "Sum\xE1rio",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 14,
      mixBlendMode: 'difference',
      color: '#fff'
    }
  }, rest), items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: '#' + id,
      title: label,
      "aria-label": label,
      onClick: onChange ? e => {
        e.preventDefault();
        onChange(id);
      } : undefined,
      className: "fs-t-base",
      style: {
        display: 'block',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'currentColor',
        color: 'inherit',
        opacity: on ? 1 : 0.4,
        transform: on ? 'scale(1.5)' : 'none',
        fontSize: 0,
        border: 0
      }
    });
  }));
}
Object.assign(__ds_scope, { DotNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DotNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  total = 1,
  onChange,
  tone = 'light',
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  const btn = (label, target, disabled) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => onChange && onChange(target),
    className: "fs-hv-tint fs-pr-scale fs-fx-ring fs-t-base",
    style: {
      border: dark ? '1px solid rgba(255,255,255,.2)' : '1px solid rgba(0,65,65,.18)',
      background: 'transparent',
      color: 'inherit',
      font: 'inherit',
      fontSize: 13,
      fontWeight: 500,
      borderRadius: 'var(--r-pill)',
      padding: '8px 16px',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.35 : 1
    }
  }, label);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['row-tight', className].filter(Boolean).join(' '),
    style: {
      gap: 10,
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), btn('Anterior', page - 1, page <= 1), /*#__PURE__*/React.createElement("span", {
    className: "label t-55 mono-num"
  }, page, " / ", total), btn('Próxima', page + 1, page >= total));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  const active = value != null ? value : items[0];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['row-tight', className].filter(Boolean).join(' '),
    style: {
      gap: 0,
      borderBottom: dark ? '1px solid rgba(255,255,255,.14)' : '1px solid rgba(0,65,65,.12)'
    }
  }, rest), items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => onChange && onChange(it),
      className: "fs-t-base fs-fx-ring",
      style: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        font: 'inherit',
        fontWeight: 500,
        fontSize: 14,
        padding: '10px 18px',
        color: dark ? '#fff' : 'var(--verde-sombra)',
        opacity: on ? 1 : 0.5,
        boxShadow: on ? 'inset 0 -2px 0 ' + (dark ? 'var(--ciano-neon)' : 'var(--verde-sombra)') : 'none'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  items = [],
  active,
  onSelect,
  actions,
  tone = 'dark',
  base = '',
  className = '',
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ['row', className].filter(Boolean).join(' '),
    style: {
      justifyContent: 'space-between',
      padding: '18px var(--s-6)',
      gap: 'var(--s-6)',
      borderBottom: dark ? '1px solid rgba(255,255,255,.12)' : '1px solid rgba(0,65,65,.10)',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    base: base,
    variant: dark ? 'branca' : 'cor',
    width: 168
  }), /*#__PURE__*/React.createElement("nav", {
    className: "row-tight",
    style: {
      gap: 'var(--s-5)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    type: "button",
    onClick: () => onSelect && onSelect(it),
    className: "fs-hv-underline fs-fx-ring fs-t-base",
    style: {
      border: 0,
      background: 'transparent',
      font: 'inherit',
      fontSize: 14,
      fontWeight: 500,
      color: 'inherit',
      cursor: 'pointer',
      opacity: it === active ? 1 : 0.6,
      padding: '4px 0'
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    className: "row-tight",
    style: {
      gap: 'var(--s-3)'
    }
  }, actions));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/manual/ManualApp.jsx
try { (() => {
const {
  DotNav
} = window.FarmSenseDesignSystem_c4c636;
function ManualApp() {
  const secoes = [{
    id: 'identidade',
    label: 'Identidade'
  }, {
    id: 'cores',
    label: 'Cores'
  }, {
    id: 'tipografia',
    label: 'Tipografia'
  }, {
    id: 'logo',
    label: 'Logo'
  }, {
    id: 'superficies',
    label: 'Superfícies'
  }, {
    id: 'dados',
    label: 'Dados'
  }, {
    id: 'componentes',
    label: 'Componentes'
  }, {
    id: 'voz',
    label: 'Tom de voz'
  }];
  const [ativa, setAtiva] = React.useState('identidade');
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setAtiva(e.target.id);
      });
    }, {
      rootMargin: '-40% 0px -55% 0px'
    });
    secoes.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  const irPara = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    });
    setAtiva(id);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      right: 24,
      transform: 'translateY(-50%)',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(DotNav, {
    items: secoes,
    value: ativa,
    onChange: irPara
  })), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Principios, null), /*#__PURE__*/React.createElement(Cores, null), /*#__PURE__*/React.createElement(Tipografia, null), /*#__PURE__*/React.createElement(LogoSection, null), /*#__PURE__*/React.createElement(Superficies, null), /*#__PURE__*/React.createElement(Dados, null), /*#__PURE__*/React.createElement(Componentes, null), /*#__PURE__*/React.createElement(Voz, null), /*#__PURE__*/React.createElement(Rodape, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ManualApp, null));
if (window.lucide) window.lucide.createIcons();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/manual/ManualApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/manual/ManualSections.jsx
try { (() => {
const {
  Surface,
  SectionHeader,
  Kicker,
  Chip,
  Button,
  Logo,
  Swatch,
  LogoCard,
  RuleCard,
  GlassCard,
  KpiTile,
  Sparkline,
  NeonDot,
  PatternLayer,
  QuoteBlock,
  Divider,
  StatRow,
  DataTable,
  BarMeter,
  StatusPill,
  Tile
} = window.FarmSenseDesignSystem_c4c636;
const B = '../..';
function Hero() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "grade",
    wrap: false,
    id: "identidade",
    "data-screen-label": "01 Identidade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingTop: 'var(--s-10)',
      paddingBottom: 'var(--s-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginBottom: 'var(--s-9)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    base: B,
    variant: "branca",
    width: 280
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "dark"
  }, "v 1.0 \xB7 2026"), /*#__PURE__*/React.createElement(Chip, {
    tone: "neon",
    dot: true
  }, "Brand System"))), /*#__PURE__*/React.createElement(Kicker, null, "Manual de Marca \xB7 FarmSense Agro"), /*#__PURE__*/React.createElement("h1", {
    className: "display fs-in-up",
    style: {
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-100"
  }, "Agronomia de"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: '.95em'
    }
  }, "precis\xE3o,"), " ", /*#__PURE__*/React.createElement("span", {
    className: "t-100"
  }, "sistema"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "t-100"
  }, "de marca em "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ciano-neon)'
    }
  }, "tom sobre tom.")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3 fs-stagger",
    style: {
      marginTop: 'var(--s-9)',
      gap: 'var(--s-6)'
    }
  }, [['Base', 'Um sistema visual restrito a oito cores e duas famílias tipográficas. Bege para a leitura do dia. Verde Sombra para a noite digital. Neons só para o detalhe.'], ['Origem', 'Construído a partir do epicentro agrícola do Brasil, em Sorriso (MT). Consultoria agronômica e agricultura de precisão.'], ['Princípio', 'Tom sobre tom. Sempre. Contraste pelo peso, pela escala e pela opacidade — não pela invenção de cores.']].map(([k, p]) => /*#__PURE__*/React.createElement("div", {
    className: "stack",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, k), /*#__PURE__*/React.createElement("p", {
    className: "body t-85",
    style: {
      margin: 0
    }
  }, p)))), /*#__PURE__*/React.createElement("hr", {
    className: "hairline",
    style: {
      marginTop: 'var(--s-9)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif t-70",
    style: {
      fontSize: 14
    }
  }, "01 \xB7 Vis\xE3o geral"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-70",
    style: {
      fontSize: 14
    }
  }, "FarmSense Agro \xB7 Sorriso, MT"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-70",
    style: {
      fontSize: 14
    }
  }, "12.05.2026"))));
}
function Principios() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "perola",
    id: "principios"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "01"
  }, "Princ\xEDpios"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4"
  }, [['Tom sobre tom.', 'Camadas próximas em valor criam profundidade sem ruído. Use no máximo três níveis de bege ou três níveis de verde por composição.'], ['Contraste pelo peso.', 'Hierarquia vem da escala tipográfica e da opacidade — 100 %, 85 %, 70 %, 55 %, 40 %. Não introduzimos cores novas para destacar.'], ['Neon raro.', 'Verde Neon e Ciano Neon são tinta de assinatura tecnológica. Pontos, linhas, indicadores. Nunca como cor de fundo ou bloco amplo.'], ['Vidro fosco.', 'Cards em camadas usam backdrop-filter. Vidro sobre vidro, sempre com leve borda interna para o destaque.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    className: "stack",
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "h3 t-100"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body t-70",
    style: {
      margin: 0
    }
  }, d)))));
}
function Cores() {
  const beges = [['Bege Pérola', '#F7F3ED', '247, 243, 237', 'Surface · default'], ['Bege Rastro', '#F3EAD9', '243, 234, 217', 'Surface · 2'], ['Bege Estrada', '#E7D7BC', '231, 215, 188', 'Accent'], ['Bege Escuro', '#D8BE98', '216, 190, 152', 'Accent · strong']];
  const verdes = [['Verde Sombra', '#004141', '0, 65, 65', 'Ink · primary', 1], ['Verde Anil', '#00655C', '0, 101, 92', 'Ink · secondary', 1], ['Verde Neon Farm', '#0ADC14', '10, 220, 20', 'Neon · detalhe'], ['Ciano Neon Farm', '#33FFC2', '51, 255, 194', 'Neon · detalhe']];
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "perola",
    id: "cores"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "02"
  }, "Cores \xB7 8 tokens, nada mais"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      maxWidth: '22ch'
    }
  }, "A paleta inteira ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "cabe em uma m\xE3o.")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      maxWidth: '60ch',
      marginTop: 'var(--s-4)'
    }
  }, "Quatro beges em escala t\xE9rmica do norte do Mato Grosso. Dois verdes do dossel agr\xEDcola depois das 17h. Dois neons que existem apenas para sinalizar tecnologia. Nenhuma cor fora desta lista pode aparecer em qualquer pe\xE7a FarmSense."), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4",
    style: {
      marginTop: 'var(--s-7)'
    }
  }, beges.concat(verdes).map(([n, h, r, t, d]) => /*#__PURE__*/React.createElement(Swatch, {
    key: n,
    name: n,
    hex: h,
    rgb: r,
    tag: t,
    dark: !!d
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "02.2"
  }, "Regras de pareamento"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3"
  }, /*#__PURE__*/React.createElement(RuleCard, {
    ok: true,
    title: "Bege como fundo"
  }, "Tinta sempre em ", /*#__PURE__*/React.createElement("strong", null, "Verde Sombra"), ". Variar pela opacidade."), /*#__PURE__*/React.createElement(RuleCard, {
    ok: true,
    title: "Verde Sombra como fundo"
  }, "Tinta sempre em ", /*#__PURE__*/React.createElement("strong", null, "branco"), ". Variar pela opacidade."), /*#__PURE__*/React.createElement(RuleCard, {
    ok: true,
    title: "Neons como detalhe"
  }, "Pontos, linhas, badges, contornos. Nunca grandes blocos de fundo."), /*#__PURE__*/React.createElement(RuleCard, {
    ok: false,
    title: "N\xE3o pinte texto em neon"
  }, "Verde/Ciano Neon n\xE3o substituem a tinta. S\xE3o indicadores."), /*#__PURE__*/React.createElement(RuleCard, {
    ok: false,
    title: "N\xE3o invente cores"
  }, "Nenhum laranja, vermelho, azul ou cinza. Use opacidade do verde."), /*#__PURE__*/React.createElement(RuleCard, {
    ok: false,
    title: "N\xE3o misture Bege e Sombra crus"
  }, "Use camada de vidro intermedi\xE1ria para a transi\xE7\xE3o."))));
}
function Tipografia() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "rastro",
    id: "tipografia"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "03"
  }, "Tipografia"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      alignItems: 'end',
      gap: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      maxWidth: '16ch'
    }
  }, "Be Vietnam Pro ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "para tudo,"), " Georgia para o sussurro."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      margin: 0
    }
  }, "Be Vietnam Pro 800 carrega os t\xEDtulos. 500 estrutura subt\xEDtulos e UI. 400 sustenta o corpo. Georgia ", /*#__PURE__*/React.createElement("em", {
    className: "serif"
  }, "it\xE1lico"), " aparece em pinceladas \u2014 n\xFAmeros de se\xE7\xE3o, cita\xE7\xF5es, palavras de inflex\xE3o. Nunca em par\xE1grafos inteiros. Os arquivos oficiais acompanham este sistema em ", /*#__PURE__*/React.createElement("code", null, "assets/fonts/"), " e a fam\xEDlia est\xE1 dispon\xEDvel no ", /*#__PURE__*/React.createElement("strong", null, "Google Fonts"), ".")), /*#__PURE__*/React.createElement(Tile, {
    style: {
      marginTop: 'var(--s-8)',
      background: 'rgba(255,255,255,.4)',
      padding: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Be Vietnam Pro \xB7 ExtraBold 800"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-55"
  }, "Aa Bb Cc \xB7 0\u20139")), /*#__PURE__*/React.createElement("div", {
    className: "display t-100",
    style: {
      marginTop: 'var(--s-3)',
      fontSize: 'clamp(64px,9vw,144px)'
    }
  }, "Produtividade")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'rgba(255,255,255,.4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Medium 500"), /*#__PURE__*/React.createElement("div", {
    className: "h2 t-100",
    style: {
      marginTop: 'var(--s-3)'
    }
  }, "Manejo de solo na entressafra")), /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'rgba(255,255,255,.4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Regular 400"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-85",
    style: {
      margin: 'var(--s-3) 0 0'
    }
  }, "A consultoria agron\xF4mica \xE9, antes de tudo, leitura de campo. Mapas, amostras, conversa direta com o produtor.")), /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'rgba(255,255,255,.4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Georgia \xB7 Italic"), /*#__PURE__*/React.createElement("p", {
    className: "serif t-85",
    style: {
      fontSize: 24,
      lineHeight: 1.3,
      margin: 'var(--s-3) 0 0'
    }
  }, "\u2014 a precis\xE3o come\xE7a antes do plantio."))));
}
function LogoSection() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "perola",
    id: "logo"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "04"
  }, "Sistema de logo \xB7 cor, monocrom\xE1tica, compacta"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      alignItems: 'end',
      gap: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      maxWidth: '20ch'
    }
  }, "Duas marcas, ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "uma fam\xEDlia."), " A horizontal primeiro, a compacta no aperto."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      margin: 0
    }
  }, "A FarmSense tem uma marca ", /*#__PURE__*/React.createElement("strong", null, "principal"), " (horizontal) e uma ", /*#__PURE__*/React.createElement("strong", null, "compacta"), " (empilhada). Cada uma com tr\xEAs variantes: ", /*#__PURE__*/React.createElement("strong", null, "colorida"), ", ", /*#__PURE__*/React.createElement("strong", null, "monocrom\xE1tica branca"), " e ", /*#__PURE__*/React.createElement("strong", null, "monocrom\xE1tica escura"), ". Use SVG sempre que poss\xEDvel.")), /*#__PURE__*/React.createElement("div", {
    className: "label t-55",
    style: {
      margin: 'var(--s-7) 0 var(--s-4)'
    }
  }, "Marca principal"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4",
    style: {
      gap: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "perola",
    tag: "P\xE9rola \xB7 cor"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "rastro",
    tag: "Rastro \xB7 cor"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "estrada",
    tag: "Estrada \xB7 cor"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "escuro",
    tag: "Escuro \xB7 cor"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "sombra",
    tag: "Sombra \xB7 mono branca"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "anil",
    tag: "Anil \xB7 mono branca"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "branco",
    variant: "escura",
    tag: "Branco \xB7 mono escura"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    background: "branco",
    tag: "Branco \xB7 cor (impresso)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "label t-55",
    style: {
      margin: 'var(--s-7) 0 var(--s-4)'
    }
  }, "Marca compacta"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4",
    style: {
      gap: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    shape: "compacta",
    background: "perola",
    tag: "P\xE9rola \xB7 cor"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    shape: "compacta",
    background: "estrada",
    tag: "Estrada \xB7 cor"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    shape: "compacta",
    background: "sombra",
    tag: "Sombra \xB7 mono branca"
  }), /*#__PURE__*/React.createElement(LogoCard, {
    base: B,
    shape: "compacta",
    background: "branco",
    variant: "escura",
    tag: "Branco \xB7 mono escura"
  })));
}
function Superficies() {
  const claras = [['perola', '01 · Pérola limpa', 'Leitura longa, editorial. O default do sistema.'], ['rastro', '02 · Rastro topográfico', 'Curvas de nível tom-sobre-tom, em multiply, no canto.'], ['estrada', '03 · Estrada em vidro', 'Bege quente sob lâmina de vidro branco. Peças comerciais.'], ['papel', '04 · Papel impresso', 'Branco com listras de talhão. Relatório, ficha, contrato.']];
  const escuras = [['grade', '05 · Sombra em grade', 'Mapeamento aéreo. Hero institucional.'], ['relevo', '06 · Sombra topográfica', 'Curvas neon no canto superior direito.'], ['alvo', '07 · Anil alvo', 'Anéis concêntricos de precisão. Tecnologia e sensoriamento.'], ['solo', '08 · Perfil de solo', 'Camadas estratigráficas. Seções de dado.']];
  const Card = ({
    v,
    t,
    d,
    dark
  }) => /*#__PURE__*/React.createElement("div", {
    className: 'fs-surface fs-' + (dark ? 'dark-' : 'light-') + v + ' fs-hv-lift-card',
    style: {
      borderRadius: 'var(--r-md)',
      minHeight: 190,
      padding: 'var(--s-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: dark ? '#fff' : 'var(--verde-sombra)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      opacity: .55
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      margin: 0,
      opacity: .8,
      maxWidth: '32ch'
    }
  }, d));
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "estrada",
    id: "superficies"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "05"
  }, "Superf\xEDcies \xB7 quatro claras, quatro escuras"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      maxWidth: '20ch'
    }
  }, "Oito fundos, ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "um s\xF3 ritmo.")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      maxWidth: '62ch',
      marginTop: 'var(--s-4)'
    }
  }, "Cada p\xE1gina alterna clara \u2192 escura \u2192 clara. M\xE1ximo de duas superf\xEDcies escuras por pe\xE7a, nunca duas iguais em sequ\xEAncia."), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4",
    style: {
      marginTop: 'var(--s-7)',
      gap: 'var(--s-3)'
    }
  }, claras.map(([v, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: v,
    v: v,
    t: t,
    d: d
  })), escuras.map(([v, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: v,
    v: v,
    t: t,
    d: d,
    dark: true
  }))));
}
function Dados() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "relevo",
    id: "dados"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "06",
    tone: "neon"
  }, "Superf\xEDcie \xB7 Verde Sombra + neon"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      alignItems: 'end',
      gap: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2 t-100",
    style: {
      maxWidth: '18ch'
    }
  }, "O modo noturno ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "da opera\xE7\xE3o"), " \u2014 onde a tecnologia respira."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-85",
    style: {
      margin: 0
    }
  }, "Fundos em Verde Sombra recebem cards de ", /*#__PURE__*/React.createElement("strong", null, "vidro fosco"), ", com borda interna em Ciano Neon ou Verde Neon a 22 %. Neon \xE9 fino, raro, e sempre sinaliza dado em tempo real.")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      marginTop: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    accent: "ciano",
    style: {
      gridColumn: 'span 2',
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    surface: "dark"
  }, "Ao vivo \xB7 NDVI"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-55",
    style: {
      fontSize: 12
    }
  }, "Talh\xE3o Aurora \xB7 12.05 \xB7 14:22")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-5)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Vigor m\xE9dio"), /*#__PURE__*/React.createElement(KpiTile, {
    tone: "dark",
    value: "0,78",
    unit: "ndvi",
    delta: "\u25B2 + 0,06 nas \xFAltimas 24 h",
    deltaTone: "neon"
  })), /*#__PURE__*/React.createElement(Sparkline, {
    points: [.60, .62, .61, .64, .66, .65, .69, .71, .70, .74, .76, .78],
    height: 140
  }))), /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    accent: "verde",
    style: {
      minHeight: 280,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusPill, {
    status: "ativo",
    surface: "dark"
  }, "Esta\xE7\xE3o ON"), /*#__PURE__*/React.createElement("h4", {
    className: "h3 t-100",
    style: {
      marginTop: 'var(--s-4)'
    }
  }, "3 esta\xE7\xF5es", /*#__PURE__*/React.createElement("br", null), "clim\xE1ticas ativas")), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 6
    }
  }, [['Sorriso · MT', '26,4° · 62%'], ['Sinop · MT', '25,1° · 68%'], ['Vera · MT', '27,0° · 58%']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: a,
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-70"
  }, a), /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-100"
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4",
    style: {
      marginTop: 'var(--s-5)'
    }
  }, [['01 · Diagnóstico', 'Amostragem em grade', 'Solo coletado em malha de 2 ha, integrado a histórico de produtividade do talhão.', ''], ['02 · Sensoriamento', 'NDVI multi-temporal', 'Janelas semanais comparadas com a curva ideal para a cultura e o estádio fenológico.', 'ciano'], ['03 · Recomendação', 'Aplicação por taxa variável', 'Mapas de prescrição entregues no formato do controlador da máquina do produtor.', ''], ['04 · Acompanhamento', '12 visitas por safra', 'Inspeção em campo presencial — a tecnologia confirma o que o engenheiro vê.', 'verde']].map(([k, t, d, a]) => /*#__PURE__*/React.createElement(GlassCard, {
    key: t,
    tone: "dark",
    accent: a || undefined,
    className: "fs-hv-lift-card"
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: a === 'ciano' ? 'neon' : a === 'verde' ? 'neon-green' : 'default'
  }, k), /*#__PURE__*/React.createElement("h4", {
    className: "h3 t-100",
    style: {
      marginTop: 'var(--s-3)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: 'var(--s-3) 0 0'
    }
  }, d)))));
}
function Componentes() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "perola",
    id: "componentes"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "09"
  }, "Componentes \xB7 biblioteca-base"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(Tile, null, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Bot\xF5es \xB7 superf\xEDcie clara"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 'var(--s-3)',
      marginTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    withArrow: true
  }, "Prim\xE1rio"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light"
  }, "Secund\xE1rio"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light",
    size: "sm"
  }, "Terci\xE1rio"))), /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'var(--verde-sombra)',
      borderColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label",
    style: {
      color: 'rgba(255,255,255,.55)'
    }
  }, "Bot\xF5es \xB7 superf\xEDcie escura"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 'var(--s-3)',
      marginTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary-light",
    withArrow: true
  }, "Prim\xE1rio"), /*#__PURE__*/React.createElement(Button, {
    variant: "neon"
  }, "A\xE7\xE3o ao vivo"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-dark"
  }, "Secund\xE1rio")))), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      gap: 'var(--s-5)',
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Tabela \xB7 relat\xF3rio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 't',
      label: 'Talhão'
    }, {
      key: 'ha',
      label: 'Ha',
      align: 'right'
    }, {
      key: 'sc',
      label: 'sc/ha',
      align: 'right',
      strong: true
    }, {
      key: 'd',
      label: 'Δ',
      align: 'right'
    }],
    rows: [{
      t: 'Aurora',
      ha: 412,
      sc: '82,4',
      d: '+18,1',
      d_tone: 'positivo'
    }, {
      t: 'Chapada',
      ha: 228,
      sc: '74,9',
      d: '+9,4',
      d_tone: 'positivo'
    }, {
      t: 'Cerrado-Norte',
      ha: 580,
      sc: '69,2',
      d: '+2,1'
    }, {
      t: 'Pampulha',
      ha: 250,
      sc: '66,8',
      d: '−0,6'
    }]
  }))), /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'rgba(255,255,255,.5)',
      display: 'grid',
      gap: 10,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Gr\xE1fico \xB7 barras"), /*#__PURE__*/React.createElement(BarMeter, {
    label: "Aurora",
    value: 82.4,
    max: 90,
    display: "82,4",
    fill: "sombra"
  }), /*#__PURE__*/React.createElement(BarMeter, {
    label: "Chapada",
    value: 74.9,
    max: 90,
    display: "74,9",
    fill: "anil"
  }), /*#__PURE__*/React.createElement(BarMeter, {
    label: "Cerrado-N.",
    value: 69.2,
    max: 90,
    display: "69,2",
    fill: "bege"
  }), /*#__PURE__*/React.createElement(BarMeter, {
    label: "Pampulha",
    value: 66.8,
    max: 90,
    display: "66,8",
    fill: "bege"
  }), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-55 serif",
    style: {
      margin: 0
    }
  }, "Tom-sobre-tom em escala bege/verde para diferenciar categorias."))));
}
function Voz() {
  return /*#__PURE__*/React.createElement(Surface, {
    variant: "rastro",
    id: "voz"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "10"
  }, "Tom de comunica\xE7\xE3o \xB7 a marca falando"), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      alignItems: 'end',
      gap: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      maxWidth: '20ch'
    }
  }, "Positiva, profissional, ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "agron\xF4mica.")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      margin: 0
    }
  }, "A FarmSense fala como um engenheiro agr\xF4nomo experiente conversando com o produtor: com seriedade no que afirma, verdade no que verifica, e otimismo realista sobre o que vem pela frente. Nada de exagero, nada de promessa vazia, nada de jarg\xE3o de marketing.")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      gap: 'var(--s-5)',
      marginTop: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    style: {
      background: 'rgba(255,255,255,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Diga"), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      marginTop: 'var(--s-3)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body t-100",
    style: {
      margin: 0
    }
  }, "\u201CFertilidade do talh\xE3o Aurora corrigida em 22 unidades de K antes do plantio.\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "body t-100",
    style: {
      margin: 0
    }
  }, "\u201CProdutividade 18 % acima da m\xE9dia regional na safra 24/25, verificada em campo.\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "body t-100",
    style: {
      margin: 0
    }
  }, "\u201CRecomenda\xE7\xE3o entregue no formato do controlador da m\xE1quina do produtor.\u201D"))), /*#__PURE__*/React.createElement(Tile, null, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "N\xE3o diga"), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      marginTop: 'var(--s-3)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body t-55",
    style: {
      margin: 0,
      textDecoration: 'line-through'
    }
  }, "\u201CSafra explosiva, resultado impressionante.\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "body t-55",
    style: {
      margin: 0,
      textDecoration: 'line-through'
    }
  }, "\u201CRevolucionamos a agricultura do MT.\u201D"), /*#__PURE__*/React.createElement("p", {
    className: "body t-55",
    style: {
      margin: 0,
      textDecoration: 'line-through'
    }
  }, "\u201CDashboard inteligente com IA de \xFAltima gera\xE7\xE3o.\u201D")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-7)',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      background: 'var(--bege-estrada)',
      padding: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement(PatternLayer, {
    pattern: "curvas-tonal",
    corner: "tr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    author: "Nome Sobrenome",
    role: "Eng. Agr., CEO"
  }, "A precis\xE3o come\xE7a antes do plantio \u2014 come\xE7a na conversa com o produtor."))));
}
function Rodape() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot on-dark",
    "data-screen-label": "11 Footer",
    id: "rodape"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      gap: 'var(--s-7)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    base: B,
    variant: "branca",
    width: 220
  }), /*#__PURE__*/React.createElement("p", {
    className: "body t-70",
    style: {
      margin: 'var(--s-5) 0 0',
      maxWidth: '32ch'
    }
  }, "Consultoria agron\xF4mica e agricultura de precis\xE3o. Sorriso \xB7 MT \u2014 atendendo MT, MS e PA.")), /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement(Kicker, null, "Sum\xE1rio"), [['cores', '02 · Cores'], ['tipografia', '03 · Tipografia'], ['logo', '04 · Logo'], ['superficies', '05 · Superfícies'], ['dados', '06 · Dados'], ['componentes', '09 · Componentes']].map(([h, l]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: '#' + h,
    className: "body-sm t-85",
    style: {
      textDecoration: 'none',
      color: 'inherit',
      border: 0
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "stack right",
    style: {
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "neon",
    dot: true
  }, "Design System \xB7 v 1.0"), /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-70"
  }, "Emiss\xE3o \xB7 12 / 05 / 2026"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-55",
    style: {
      fontSize: 13
    }
  }, "\u2014 \u201Ca precis\xE3o come\xE7a antes do plantio.\u201D"))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--s-7)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "legal"
  }, "\xA9 FarmSense Agro \xB7 Sorriso, MT \xB7 2026"), /*#__PURE__*/React.createElement("span", {
    className: "legal"
  }, "Be Vietnam Pro \xB7 Georgia"), /*#__PURE__*/React.createElement("span", {
    className: "legal"
  }, "8 cores \xB7 nenhuma a mais"))));
}
Object.assign(window, {
  Hero,
  Principios,
  Cores,
  Tipografia,
  LogoSection,
  Superficies,
  Dados,
  Componentes,
  Voz,
  Rodape
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/manual/ManualSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/painel/PainelApp.jsx
try { (() => {
const {
  TopBar,
  Tabs,
  SearchField,
  Chip,
  StatusPill,
  NeonDot,
  GlassCard,
  KpiTile,
  Sparkline,
  DataTable,
  BarMeter,
  ProgressRing,
  Button,
  Kicker,
  Divider,
  PatternLayer,
  Switch,
  EmptyState,
  Skeleton,
  Breadcrumb,
  Icon,
  Alert
} = window.FarmSenseDesignSystem_c4c636;
const {
  useState
} = React;
const TALHOES = [{
  t: 'Aurora',
  ha: 412,
  ndvi: '0,78',
  sc: '82,4',
  d: '+18,1',
  ok: true
}, {
  t: 'Chapada',
  ha: 228,
  ndvi: '0,71',
  sc: '74,9',
  d: '+9,4',
  ok: true
}, {
  t: 'Cerrado-Norte',
  ha: 580,
  ndvi: '0,66',
  sc: '69,2',
  d: '+2,1',
  ok: true
}, {
  t: 'Pampulha',
  ha: 250,
  ndvi: '0,58',
  sc: '66,8',
  d: '−0,6',
  ok: false
}];
function Painel() {
  const [aba, setAba] = useState('Sensoriamento');
  const [talhao, setTalhao] = useState('Aurora');
  const [busca, setBusca] = useState('');
  const [camadas, setCamadas] = useState({
    ndvi: true,
    zonas: true,
    estacoes: false
  });
  const sel = TALHOES.find(x => x.t === talhao) || TALHOES[0];
  const lista = TALHOES.filter(x => x.t.toLowerCase().includes(busca.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    base: "../..",
    items: ['Talhões', 'Mapas', 'Relatórios', 'Equipe'],
    active: "Mapas",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusPill, {
      status: "live",
      surface: "dark"
    }, "Ao vivo"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost-dark",
      size: "sm"
    }, "Fazenda S\xE3o Bento"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 'var(--s-5)',
      padding: 'var(--s-5) var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "stack",
    style: {
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    tone: "dark",
    value: busca,
    placeholder: "Buscar talh\xE3o\u2026",
    onChange: e => setBusca(e.target.value),
    trailing: /*#__PURE__*/React.createElement(Chip, {
      tone: "neon"
    }, lista.length, " talh\xF5es")
  }), lista.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    surface: "dark",
    title: "Nenhum talh\xE3o encontrado",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost-dark",
      size: "sm",
      onClick: () => setBusca('')
    }, "Limpar busca")
  }, "Ajuste o termo da busca ou cadastre um novo talh\xE3o na malha de amostragem.") : lista.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.t,
    type: "button",
    onClick: () => setTalhao(x.t),
    className: "fs-hv-tint-dark fs-t-base fs-fx-ring-neon",
    style: {
      textAlign: 'left',
      font: 'inherit',
      color: '#fff',
      cursor: 'pointer',
      padding: 'var(--s-4)',
      borderRadius: 'var(--r-md)',
      background: x.t === talhao ? 'rgba(51,255,194,.08)' : 'rgba(255,255,255,.04)',
      border: x.t === talhao ? '1px solid rgba(51,255,194,.35)' : '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h4 t-100"
  }, x.t), /*#__PURE__*/React.createElement(NeonDot, {
    color: x.ok ? 'verde' : 'mudo'
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-55"
  }, x.ha, " ha"), /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-70 mono-num"
  }, "NDVI ", x.ndvi)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--s-2)"
  }), /*#__PURE__*/React.createElement(Kicker, null, "Camadas do mapa"), /*#__PURE__*/React.createElement(Switch, {
    tone: "dark",
    label: "NDVI multitemporal",
    checked: camadas.ndvi,
    onChange: () => setCamadas({
      ...camadas,
      ndvi: !camadas.ndvi
    })
  }), /*#__PURE__*/React.createElement(Switch, {
    tone: "dark",
    label: "Zonas de manejo",
    checked: camadas.zonas,
    onChange: () => setCamadas({
      ...camadas,
      zonas: !camadas.zonas
    })
  }), /*#__PURE__*/React.createElement(Switch, {
    tone: "dark",
    label: "Esta\xE7\xF5es clim\xE1ticas",
    checked: camadas.estacoes,
    onChange: () => setCamadas({
      ...camadas,
      estacoes: !camadas.estacoes
    })
  })), /*#__PURE__*/React.createElement("main", {
    className: "stack",
    style: {
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    tone: "dark",
    items: [{
      label: 'Fazendas',
      href: '#'
    }, {
      label: 'São Bento',
      href: '#'
    }, 'Talhão ' + sel.t]
  }), /*#__PURE__*/React.createElement("span", {
    className: "serif t-55",
    style: {
      fontSize: 13
    }
  }, "atualizado \xE0s 14:22 \xB7 12.05.2026")), /*#__PURE__*/React.createElement(Tabs, {
    tone: "dark",
    items: ['Diagnóstico', 'Sensoriamento', 'Recomendação', 'Acompanhamento'],
    value: aba,
    onChange: setAba
  }), aba === 'Sensoriamento' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    accent: "ciano",
    style: {
      gridColumn: 'span 2',
      minHeight: 300
    },
    pattern: camadas.ndvi ? 'fs-grid fs-grid--neon' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "live",
    surface: "dark"
  }, "Ao vivo \xB7 NDVI"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-55",
    style: {
      fontSize: 12
    }
  }, "Talh\xE3o ", sel.t, " \xB7 ", sel.ha, " ha")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-5)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'var(--s-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Vigor m\xE9dio"), /*#__PURE__*/React.createElement(KpiTile, {
    tone: "dark",
    value: sel.ndvi,
    unit: "ndvi",
    delta: "\u25B2 + 0,06 nas \xFAltimas 24 h",
    deltaTone: "neon"
  })), /*#__PURE__*/React.createElement(Sparkline, {
    points: [.60, .62, .61, .64, .66, .65, .69, .71, .70, .74, .76, Number(sel.ndvi.replace(',', '.'))],
    height: 150
  }))), /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    accent: "verde",
    style: {
      minHeight: 300,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusPill, {
    status: camadas.estacoes ? 'ativo' : 'inativo',
    surface: "dark"
  }, camadas.estacoes ? 'Estação ON' : 'Camada desligada'), /*#__PURE__*/React.createElement("h4", {
    className: "h3 t-100",
    style: {
      marginTop: 'var(--s-4)'
    }
  }, "3 esta\xE7\xF5es", /*#__PURE__*/React.createElement("br", null), "clim\xE1ticas ativas")), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 6
    }
  }, [['Sorriso · MT', '26,4° · 62%'], ['Sinop · MT', '25,1° · 68%'], ['Vera · MT', '27,0° · 58%']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: a,
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-70"
  }, a), /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-100 mono-num"
  }, b)))))), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Comparativo de talh\xF5es \xB7 sc/ha"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    tone: "dark",
    columns: [{
      key: 't',
      label: 'Talhão'
    }, {
      key: 'ha',
      label: 'Ha',
      align: 'right'
    }, {
      key: 'ndvi',
      label: 'NDVI',
      align: 'right'
    }, {
      key: 'sc',
      label: 'sc/ha',
      align: 'right',
      strong: true
    }, {
      key: 'd',
      label: 'Δ',
      align: 'right'
    }],
    rows: TALHOES
  }))), /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    style: {
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Cobertura de amostragem"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 86,
    size: 120,
    color: "var(--ciano-neon)",
    track: "rgba(255,255,255,.12)"
  })), TALHOES.map(x => /*#__PURE__*/React.createElement(BarMeter, {
    key: x.t,
    tone: "dark",
    label: x.t,
    value: Number(x.sc.replace(',', '.')),
    max: 90,
    display: x.sc,
    fill: x.ok ? 'neon' : 'bege'
  }))))), aba === 'Diagnóstico' && /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark",
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Fertilidade \xB7 talh\xE3o ", sel.t), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      marginTop: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    tone: "dark",
    label: "pH",
    value: "5,8"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    tone: "dark",
    label: "P (mg/dm\xB3)",
    value: "22"
  }), /*#__PURE__*/React.createElement(KpiTile, {
    tone: "dark",
    label: "K (cmol)",
    value: "0,18"
  })), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--s-5)"
  }), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: 0
    }
  }, "Recomenda\xE7\xE3o: corre\xE7\xE3o de pot\xE1ssio em pr\xE9-plantio, KCl 60 % a 90 kg/ha aplicado em taxa vari\xE1vel conforme zoneamento.")), /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Kicker, null, "Amostragem"), /*#__PURE__*/React.createElement(KpiTile, {
    tone: "dark",
    label: "Pontos coletados",
    value: "1 725",
    delta: "grade de 2 ha"
  }), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--s-4)"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    surface: "dark",
    lines: 3
  }))), aba === 'Recomendação' && /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    surface: "dark",
    tone: "ok",
    title: "Prescri\xE7\xE3o gerada"
  }, "Mapa de taxa vari\xE1vel para ", sel.t, " exportado no formato do controlador da m\xE1quina."), /*#__PURE__*/React.createElement(Alert, {
    surface: "dark",
    tone: "atencao",
    title: "Janela de corre\xE7\xE3o fechando"
  }, "Restam 12 dias para a aplica\xE7\xE3o de pot\xE1ssio em pr\xE9-plantio."), /*#__PURE__*/React.createElement(GlassCard, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Kicker, null, "Escopo aplicado"), /*#__PURE__*/React.createElement("div", {
    className: "row-tight",
    style: {
      gap: 8,
      marginTop: 'var(--s-4)'
    }
  }, ['Adubação variável', 'Manejo por zona', 'Defensivo por zona', 'KCl 60 %', '90 kg/ha'].map(x => /*#__PURE__*/React.createElement(Chip, {
    key: x,
    tone: "dark"
  }, x))))), aba === 'Acompanhamento' && /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      gap: 'var(--s-5)'
    }
  }, [['01 · Ago — Set / 26', 'Linha de base', 'Coleta georreferenciada, topografia fina e instalação das estações.', 100], ['02 · Set — Dez / 26', 'Plantio e estabelecimento', 'Mapas de população real vs. planejada e ajuste de adubação por zona.', 74], ['03 · Jan — Mai / 27', 'Ciclo principal', 'NDVI/NDRE multitemporal, alertas de praga e manejo por zona.', 28], ['04 · Jun — Jul / 27', 'Colheita e fechamento', 'Mapa de colheita, relatório de safra e plano para 27/28.', 0]].map(([k, t, d, v]) => /*#__PURE__*/React.createElement(GlassCard, {
    key: t,
    tone: "dark",
    accent: v > 0 && v < 100 ? 'ciano' : undefined,
    className: "fs-hv-lift-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, k), /*#__PURE__*/React.createElement("h4", {
    className: "h3 t-100",
    style: {
      marginTop: 'var(--s-3)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: 'var(--s-3) 0 0',
      maxWidth: '38ch'
    }
  }, d)), /*#__PURE__*/React.createElement(ProgressRing, {
    value: v,
    size: 72,
    stroke: 5,
    color: "var(--ciano-neon)",
    track: "rgba(255,255,255,.12)"
  }))))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Painel, null));
if (window.lucide) window.lucide.createIcons();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/painel/PainelApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposta/PropostaApp.jsx
try { (() => {
const {
  Pagination,
  Logo,
  Chip,
  Button
} = window.FarmSenseDesignSystem_c4c636;
function PropostaApp() {
  const paginas = [/*#__PURE__*/React.createElement(Capa, null), /*#__PURE__*/React.createElement(Carta, null), null, /*#__PURE__*/React.createElement(Propriedade, null), /*#__PURE__*/React.createElement(Fases, null), /*#__PURE__*/React.createElement(Investimento, null), /*#__PURE__*/React.createElement(Aceite, null)];
  const [i, setI] = React.useState(1);
  const total = 7;
  const conteudo = i === 3 ? /*#__PURE__*/React.createElement(Sumario, {
    onIr: n => setI(n === 1 ? 2 : n === 2 ? 4 : n === 3 ? 5 : n === 4 ? 6 : 7)
  }) : paginas[i - 1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "row",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      justifyContent: 'space-between',
      padding: '14px 32px',
      background: 'var(--verde-sombra)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-tight",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    base: "../..",
    variant: "branca",
    width: 140
  }), /*#__PURE__*/React.createElement(Chip, {
    tone: "dark"
  }, "Proposta \xB7 FAZ-000-0000")), /*#__PURE__*/React.createElement("div", {
    className: "row-tight",
    style: {
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    tone: "dark",
    page: i,
    total: total,
    onChange: p => setI(Math.min(total, Math.max(1, p)))
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "neon",
    size: "sm"
  }, "Aceitar proposta"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0'
    },
    key: i,
    className: "fs-in-up"
  }, conteudo));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PropostaApp, null));
if (window.lucide) window.lucide.createIcons();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposta/PropostaApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposta/PropostaPages.jsx
try { (() => {
const {
  Logo,
  Kicker,
  SectionHeader,
  Chip,
  Divider,
  KpiTile,
  DataTable,
  PatternLayer,
  QuoteBlock,
  Tile,
  StatusPill,
  Button,
  ProgressRing
} = window.FarmSenseDesignSystem_c4c636;
const B = '../..';
const N = 'FAZ-000-0000';
function Pe({
  secao,
  pagina
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Proposta \xB7 ", N), /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, secao), /*#__PURE__*/React.createElement("span", {
    className: "serif t-70",
    style: {
      fontSize: 14
    }
  }, pagina));
}
function Capa() {
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "01 Capa",
    style: {
      background: 'var(--verde-sombra)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(PatternLayer, {
    pattern: "curvas-neon",
    corner: "tr"
  }), /*#__PURE__*/React.createElement(PatternLayer, {
    pattern: "grade",
    corner: null
  }), /*#__PURE__*/React.createElement("div", {
    className: "miolo",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    base: B,
    variant: "branca",
    width: 240
  }), /*#__PURE__*/React.createElement(Chip, {
    tone: "neon",
    dot: true
  }, "Proposta n\xBA ", N.replace('FAZ-', 'FAZ · ').replace('-', ' / '))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    tone: "neon"
  }, "Programa integrado de agricultura de precis\xE3o \xB7 Safra 0000/00"), /*#__PURE__*/React.createElement("h1", {
    className: "display fs-in-up",
    style: {
      marginTop: 'var(--s-5)',
      fontSize: 96
    }
  }, "Exemplo", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ciano-neon)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      maxWidth: '46ch',
      marginTop: 'var(--s-5)'
    }
  }, "Diagn\xF3stico de solo georreferenciado, sensoriamento ao longo do ciclo, consultoria agron\xF4mica embarcada e planejamento de manejo por zona.")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4",
    style: {
      gap: 'var(--s-5)'
    }
  }, [['Cliente', 'Fazenda Exemplo'], ['Área', '0.000 ha'], ['Culturas', 'Soja · Algodão'], ['Investimento', 'R$ 00.000,00']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "h4 t-100",
    style: {
      marginTop: 6
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "pe",
    style: {
      borderColor: 'rgba(255,255,255,.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "FarmSense Agro \xB7 Cuiab\xE1, MT"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-55",
    style: {
      fontSize: 13
    }
  }, "v\xE1lida por 30 dias")));
}
function Carta() {
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "02 Carta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "miolo"
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Carta de apresenta\xE7\xE3o \xB7 Cuiab\xE1, MT"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '20ch'
    }
  }, "A precis\xE3o come\xE7a antes da m\xE1quina entrar no talh\xE3o ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "\u2014 ela come\xE7a em conhecer"), " profundamente o solo, o ciclo e a opera\xE7\xE3o que sustenta a safra."), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--s-7)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      gap: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body t-70",
    style: {
      margin: 0
    }
  }, "Esta proposta apresenta o programa que a FarmSense recomenda para a Fazenda Exemplo na safra 0000/00. O escopo combina diagn\xF3stico de solo georreferenciado, sensoriamento ao longo do ciclo, consultoria agron\xF4mica embarcada e planejamento de manejo por zona. Trabalhamos lado a lado com a equipe da fazenda \u2014 n\xE3o como fornecedor, mas como time de campo."), /*#__PURE__*/React.createElement("p", {
    className: "body t-70",
    style: {
      margin: 0
    }
  }, "O objetivo \xE9 entregar uma safra mais previs\xEDvel, com decis\xF5es tomadas a partir de dado real. O programa foi dimensionado a partir dos 0.000 hectares produtivos, do hist\xF3rico de manejo das \xFAltimas tr\xEAs safras e das particularidades da transi\xE7\xE3o soja\u2013algod\xE3o no calend\xE1rio do Mato Grosso. Estamos \xE0 disposi\xE7\xE3o para ajustar escopo, cronograma e investimento ao que melhor servir \xE0 fazenda.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 1,
      background: 'rgba(0,65,65,.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "h4 t-100",
    style: {
      marginTop: 10
    }
  }, "Nome Sobrenome"), /*#__PURE__*/React.createElement("span", {
    className: "serif t-70",
    style: {
      fontSize: 14
    }
  }, "Diretor \xB7 FarmSense Agro"))), /*#__PURE__*/React.createElement(Pe, {
    secao: "Apresenta\xE7\xE3o",
    pagina: "ii"
  }));
}
function Sumario({
  onIr
}) {
  const linhas = [['i', 'Apresentação', 'Carta da diretoria e contexto da safra', '02', 1], ['01', 'A propriedade', 'Perfil da Fazenda Exemplo e premissas', '04', 2], ['02', 'Diagnóstico', 'Solo, talhão e leitura do território', '05', 2], ['03', 'Programa em fases', 'Quatro etapas do trabalho de campo', '06', 3], ['04', 'Cronograma', 'Linha do tempo · agosto a julho', '07', 3], ['05', 'Investimento', 'Desdobramento dos serviços contratados', '08', 4], ['06', 'Condições comerciais', 'Pagamento, vigência e propriedade intelectual', '09', 4], ['07', 'Equipe', 'Quem está dedicado a essa safra', '10', 5], ['08', 'Próximos passos', 'Etapas até a primeira ida a campo', '11', 5], ['09', 'Aceite', 'Assinatura e formalização', '12', 6]];
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "03 Sum\xE1rio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "miolo"
  }, /*#__PURE__*/React.createElement(SectionHeader, null, "Sum\xE1rio"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '16ch'
    }
  }, "Sum\xE1rio. ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "Nove cap\xEDtulos"), " \xB7 Safra 0000/00"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-8)'
    }
  }, linhas.map(([n, t, d, p, ir]) => /*#__PURE__*/React.createElement("button", {
    key: n + t,
    type: "button",
    onClick: () => onIr && onIr(ir),
    className: "fs-hv-tint fs-t-base fs-fx-ring",
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      gap: 18,
      alignItems: 'baseline',
      padding: '16px 8px',
      border: 0,
      borderBottom: '1px solid rgba(0,65,65,.08)',
      background: 'transparent',
      font: 'inherit',
      textAlign: 'left',
      cursor: 'pointer',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif t-55",
    style: {
      fontSize: 16
    }
  }, n), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "h4 t-100"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "body-sm t-55",
    style: {
      marginLeft: 12
    }
  }, d)), /*#__PURE__*/React.createElement("span", {
    className: "mono-num t-55 body-sm"
  }, p))))), /*#__PURE__*/React.createElement(Pe, {
    secao: "Sum\xE1rio",
    pagina: "iii"
  }));
}
function Propriedade() {
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "04 A propriedade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "miolo"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "01"
  }, "A propriedade \xB7 Premissas do programa"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '18ch'
    }
  }, "A propriedade, ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "antes do trator.")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      maxWidth: '62ch',
      marginTop: 'var(--s-4)'
    }
  }, "Conhecer o terreno em detalhe \xE9 o que separa um programa que reage de um programa que antecipa. A Fazenda Exemplo opera 0.000 ha produtivos em rota\xE7\xE3o soja\u2013algod\xE3o, com janela de plantio iniciada em setembro e fechamento em fevereiro."), /*#__PURE__*/React.createElement("div", {
    className: "grid g-3",
    style: {
      marginTop: 'var(--s-7)',
      gap: 'var(--s-5)'
    }
  }, [['Variabilidade reconhecida.', 'Os mapas de produtividade das três últimas safras mostram diferenças superiores a 18 % entre zonas dentro do mesmo talhão. Esse delta justifica investimento em manejo por zona.'], ['Decisão por dado.', 'Toda recomendação é entregue com a evidência de campo que a sustenta — não há receita pronta sem leitura prévia.'], ['Time único.', 'Agrônomo da fazenda e agrônomo FarmSense atuam como um único time, com reuniões semanais e visita técnica quinzenal no pico.']].map(([t, d], i) => /*#__PURE__*/React.createElement(Tile, {
    key: t,
    className: "fs-hv-lift-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif t-55"
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "h4 t-100",
    style: {
      marginTop: 8
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: '10px 0 0'
    }
  }, d)))), /*#__PURE__*/React.createElement(Divider, {
    spacing: "var(--s-7)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid g-4"
  }, [['0.000', 'ha', 'Área produtiva', 'Distribuída em 00 talhões mapeados.'], ['Soja', '· Algodão', 'Ciclo principal', 'Soja precoce + algodão de segunda.'], ['00', '', 'Talhões', 'Variando de 00 a 000 ha.'], ['3', 'safras', 'Histórico', 'Base de dados anterior carregada.']].map(([v, u, l, d]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: l,
    value: v,
    unit: u || undefined
  }), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-55",
    style: {
      margin: '8px 0 0'
    }
  }, d))))), /*#__PURE__*/React.createElement(Pe, {
    secao: "A propriedade",
    pagina: "04"
  }));
}
function Fases() {
  const fases = [['01', 'Ago — Set', 'Linha de base.', 'Coleta georreferenciada de solo, levantamento topográfico fino e instalação das estações climáticas. Definição da grade de zonas de manejo para o ciclo.', ['Amostragem · 2 ha', 'Topografia 1:5.000', '6 estações ativas', 'Mapa de zonas v1']], ['02', 'Set — Dez', 'Plantio e estabelecimento.', 'Acompanhamento semanal das primeiras semanas, mapas de população real vs. planejada e ajuste fino de adubação por zona durante a janela de plantio da soja.', ['Mapa de população', 'Adubação variável', 'Visita semanal', 'Boletim quinzenal']], ['03', 'Jan — Mai', 'Ciclo principal.', 'Sensoriamento NDVI/NDRE multitemporal, alertas de pragas com base nas estações, manejo de defensivos por zona e gestão da janela soja/algodão.', ['NDVI · 3 em 3 dias', 'Alerta de praga', 'Manejo por zona', 'Curva de produtividade']], ['04', 'Jun — Jul', 'Colheita e fechamento.', 'Mapa de colheita por talhão, fechamento técnico da safra, leitura comparativa com o histórico e recomendações para o próximo ciclo de manejo.', ['Mapa de colheita', 'Relatório de safra', 'Reunião de fechamento', 'Plano para a próxima safra']]];
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "05 Programa em fases"
  }, /*#__PURE__*/React.createElement("div", {
    className: "miolo"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "03"
  }, "Programa em fases \xB7 Estrutura do trabalho"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '18ch'
    }
  }, "Quatro fases, ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "uma safra.")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      maxWidth: '60ch',
      marginTop: 'var(--s-4)'
    }
  }, "O programa avan\xE7a em fases sobrepostas. A entrega de cada uma alimenta a decis\xE3o da seguinte."), /*#__PURE__*/React.createElement("div", {
    className: "stack",
    style: {
      marginTop: 'var(--s-7)',
      gap: 'var(--s-4)'
    }
  }, fases.map(([n, per, t, d, tags]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "fs-hv-lift-card fs-t-base",
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr',
      gap: 'var(--s-6)',
      padding: 'var(--s-5)',
      borderRadius: 'var(--r-md)',
      background: 'var(--bege-perola)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "serif t-40",
    style: {
      fontSize: 44,
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "label t-55",
    style: {
      marginTop: 8
    }
  }, per)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h3 t-100"
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: '8px 0 12px'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    className: "row-tight",
    style: {
      gap: 6
    }
  }, tags.map(x => /*#__PURE__*/React.createElement(Chip, {
    key: x
  }, x)))))))), /*#__PURE__*/React.createElement(Pe, {
    secao: "Programa em fases",
    pagina: "06"
  }));
}
function Investimento() {
  const itens = [['01', 'Amostragem georreferenciada de solo', 'Grade de 2 ha · 0.000 pontos', '0.000', 'R$ 00,00', 'R$ 00.000,00'], ['02', 'Estações climáticas + monitoramento', '6 unidades, 11 meses ativas', '6', 'R$ 0.000,00', 'R$ 00.000,00'], ['03', 'Sensoriamento espectral multitemporal', 'NDVI/NDRE · revisita 3 dias', '0.000 ha', 'R$ 00,00', 'R$ 00.000,00'], ['04', 'Consultoria agronômica integral', 'Visita quinzenal + reuniões semanais', '11 meses', 'R$ 0.000,00', 'R$ 00.000,00'], ['05', 'Plataforma de campo + relatórios', 'Acesso · 4 usuários · 12 meses', '12 meses', 'R$ 0.000,00', 'R$ 00.000,00']];
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "06 Investimento"
  }, /*#__PURE__*/React.createElement("div", {
    className: "miolo"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "05"
  }, "Investimento \xB7 Programa Safra 0000/00 \xB7 0.000 ha"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '18ch'
    }
  }, "O n\xFAmero, ", /*#__PURE__*/React.createElement("span", {
    className: "serif"
  }, "e o que cabe nele.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-6)',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-lg)',
      background: 'var(--verde-sombra)',
      color: '#fff',
      padding: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement(PatternLayer, {
    pattern: "alvo",
    corner: "tr"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      position: 'relative',
      justifyContent: 'space-between',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Total \xB7 programa completo"), /*#__PURE__*/React.createElement("div", {
    className: "display t-100",
    style: {
      marginTop: 10,
      fontSize: 68
    }
  }, "R$ 000.000", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.5em',
      opacity: .6
    }
  }, ",00")), /*#__PURE__*/React.createElement("p", {
    className: "body-sm t-70",
    style: {
      margin: '14px 0 0',
      maxWidth: '46ch'
    }
  }, "Equivalente a ", /*#__PURE__*/React.createElement("strong", null, "R$ 00,00 / hectare"), " sobre os 0.000 ha mapeados, considerando contrato anual integrado. Pagamento conforme negocia\xE7\xE3o (\xA706).")), /*#__PURE__*/React.createElement(ProgressRing, {
    value: 100,
    size: 120,
    color: "var(--ciano-neon)",
    track: "rgba(255,255,255,.12)",
    label: "0.000 ha"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'n',
      label: '#'
    }, {
      key: 's',
      label: 'Serviço contratado'
    }, {
      key: 'q',
      label: 'Qtd',
      align: 'right'
    }, {
      key: 'u',
      label: 'Unitário',
      align: 'right'
    }, {
      key: 't',
      label: 'Total',
      align: 'right',
      strong: true
    }],
    rows: itens.map(([n, s, sub, q, u, t]) => ({
      n: /*#__PURE__*/React.createElement("span", {
        className: "serif t-55"
      }, n),
      s: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        className: "body-sm t-100",
        style: {
          fontWeight: 500
        }
      }, s), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
        className: "body-sm t-55"
      }, sub)),
      q,
      u,
      t
    }))
  }))), /*#__PURE__*/React.createElement(Pe, {
    secao: "Investimento",
    pagina: "08"
  }));
}
function Aceite() {
  return /*#__PURE__*/React.createElement("div", {
    className: "folha",
    "data-screen-label": "07 Aceite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "miolo"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    num: "09"
  }, "Aceite \xB7 Formaliza\xE7\xE3o da proposta"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '16ch'
    }
  }, "Aceite."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg t-70",
    style: {
      maxWidth: '62ch',
      marginTop: 'var(--s-4)'
    }
  }, "A assinatura abaixo formaliza a contrata\xE7\xE3o do programa descrito nesta proposta, conforme escopo (\xA703), cronograma (\xA704), investimento (\xA705) e condi\xE7\xF5es comerciais (\xA706)."), /*#__PURE__*/React.createElement(Tile, {
    style: {
      marginTop: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body t-85",
    style: {
      margin: 0
    }
  }, "Declaramos ter lido e aceito integralmente os termos desta proposta, identificada sob o n\xFAmero ", /*#__PURE__*/React.createElement("strong", null, N), ", emitida pela FarmSense Agro em favor da Fazenda Exemplo para a safra 0000/00. Esta proposta, uma vez assinada, passa a operar como instrumento contratual entre as partes e suplanta qualquer entendimento pr\xE9vio sobre o escopo aqui descrito.")), /*#__PURE__*/React.createElement("div", {
    className: "grid g-2",
    style: {
      marginTop: 'var(--s-8)',
      gap: 'var(--s-8)'
    }
  }, [['Pela Fazenda Exemplo', 'Nome do responsável', 'Cargo · CPF / CNPJ'], ['Pela FarmSense Agro', 'Nome Sobrenome', 'Diretor · CREA 000000/MT']].map(([t, n, c]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(0,65,65,.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "h4 t-100",
    style: {
      marginTop: 10
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "serif t-70",
    style: {
      fontSize: 13
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 'var(--s-8)',
      gap: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Local"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(0,65,65,.25)',
      marginTop: 30
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label t-55"
  }, "Data"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(0,65,65,.25)',
      marginTop: 30
    }
  })))), /*#__PURE__*/React.createElement(Pe, {
    secao: "Aceite",
    pagina: "12"
  }));
}
Object.assign(window, {
  Capa,
  Carta,
  Sumario,
  Propriedade,
  Fases,
  Investimento,
  Aceite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposta/PropostaPages.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LogoCard = __ds_scope.LogoCard;

__ds_ns.PatternLayer = __ds_scope.PatternLayer;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.Swatch = __ds_scope.Swatch;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NeonDot = __ds_scope.NeonDot;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Surface = __ds_scope.Surface;

__ds_ns.Tile = __ds_scope.Tile;

__ds_ns.BarMeter = __ds_scope.BarMeter;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KpiTile = __ds_scope.KpiTile;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.RuleCard = __ds_scope.RuleCard;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.DotNav = __ds_scope.DotNav;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();

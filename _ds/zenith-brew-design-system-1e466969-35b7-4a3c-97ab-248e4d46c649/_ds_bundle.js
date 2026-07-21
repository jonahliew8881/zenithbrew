/* @ds-bundle: {"format":4,"namespace":"ZenithBrewDesignSystem_1e4669","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Card","sourcePath":"components/feedback/Card.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"ad83de5d9271","components/core/Button.jsx":"706687c1a67b","components/core/IconButton.jsx":"776a340c535f","components/core/Tag.jsx":"8e30828d6fea","components/feedback/Alert.jsx":"3a30ffdc2042","components/feedback/Card.jsx":"724cb28bc816","components/feedback/Tooltip.jsx":"2bd53873ce13","components/forms/Checkbox.jsx":"4e9eff02fd8e","components/forms/Input.jsx":"9eb92ab583d4","components/forms/Select.jsx":"4172c65af65f","components/forms/Switch.jsx":"e2b2a054fabe","components/navigation/NavBar.jsx":"48c632ee555b","components/navigation/Tabs.jsx":"32a95418a3ae","ui_kits/marketing-site/Cart.jsx":"fa1bd9218a5e","ui_kits/marketing-site/Footer.jsx":"c2a8e13aed3c","ui_kits/marketing-site/Home.jsx":"a0d575e70216","ui_kits/marketing-site/ProductData.jsx":"9e2868783766","ui_kits/marketing-site/ProductDetail.jsx":"0ad572ffe51b","ui_kits/marketing-site/Shop.jsx":"9ff5d882fc26"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZenithBrewDesignSystem_1e4669 = window.ZenithBrewDesignSystem_1e4669 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      background: 'var(--accent-tint)',
      color: 'var(--accent-shade)'
    },
    neutral: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-secondary)'
    },
    success: {
      background: '#DFEDE5',
      color: 'var(--state-success)'
    },
    warning: {
      background: '#F3E6D3',
      color: 'var(--state-warning)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-label)',
      fontSize: '12px',
      letterSpacing: '0.02em',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeMap = {
  sm: {
    padY: '6px',
    padX: '14px',
    font: 'var(--text-body-sm)'
  },
  md: {
    padY: '10px',
    padX: '20px',
    font: 'var(--text-body-md)'
  },
  lg: {
    padY: '14px',
    padX: '28px',
    font: 'var(--text-heading-sm)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon,
  onClick
}) {
  const s = sizeMap[size] || sizeMap.md;
  const base = {
    fontFamily: 'var(--font-body)',
    font: s.font,
    fontWeight: 500,
    padding: `${s.padY} ${s.padX}`,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: `background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)`,
    width: fullWidth ? '100%' : 'auto',
    justifyContent: fullWidth ? 'center' : 'flex-start'
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: 'var(--color-primary-shade)',
      borderColor: 'var(--color-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--border-hairline-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'transparent'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-hover)';
      if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sunken)';
    },
    onMouseOut: e => {
      if (disabled) return;
      e.currentTarget.style.background = variants[variant].background;
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 40
};
function IconButton({
  icon,
  ariaLabel,
  variant = 'outline',
  size = 'md',
  onClick
}) {
  const dim = sizes[size] || 40;
  const variants = {
    solid: {
      background: 'var(--color-accent)',
      border: '1px solid var(--color-accent)',
      color: 'var(--color-primary-shade)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-hairline-strong)',
      color: 'var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--color-primary)'
    }
  };
  return React.createElement('button', {
    'aria-label': ariaLabel,
    onClick,
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...variants[variant]
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = variant === 'solid' ? 'var(--accent-hover)' : 'var(--surface-sunken)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return React.createElement('button', {
    onClick,
    style: {
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--color-accent)' : 'var(--border-hairline)'}`,
      background: selected ? 'var(--accent-tint)' : 'transparent',
      color: selected ? 'var(--accent-shade)' : 'var(--text-secondary)',
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  children,
  tone = 'info'
}) {
  const tones = {
    info: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-primary)',
      border: 'var(--border-hairline-strong)'
    },
    success: {
      background: '#DFEDE5',
      color: 'var(--state-success)',
      border: '#B9D9C7'
    },
    warning: {
      background: '#F3E6D3',
      color: 'var(--state-warning)',
      border: '#E3CBA0'
    },
    danger: {
      background: '#F3DEDA',
      color: 'var(--state-danger)',
      border: '#E0B7AD'
    }
  };
  const t = tones[tone];
  return React.createElement('div', {
    style: {
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-sm)',
      padding: '12px 16px',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'var(--space-5)'
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '125%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--color-primary-shade)',
      color: 'var(--color-base)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      borderRadius: '4px',
      border: `1px solid ${checked ? 'var(--color-accent)' : 'var(--border-hairline-strong)'}`,
      background: checked ? 'var(--color-accent)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--color-primary-shade)',
    strokeWidth: 3
  }, React.createElement('path', {
    d: 'M20 6L9 17l-5-5'
  }))), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  disabled
}) {
  const [focused, setFocused] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      font: 'var(--text-body-md)',
      fontFamily: 'var(--font-body)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--state-danger)' : focused ? 'var(--color-accent)' : 'var(--border-hairline-strong)'}`,
      outline: 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--state-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      font: 'var(--text-body-md)',
      fontFamily: 'var(--font-body)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-hairline-strong)',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  ariaLabel
}) {
  return React.createElement('button', {
    role: 'switch',
    'aria-checked': checked,
    'aria-label': ariaLabel,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-accent)' : 'var(--border-hairline-strong)',
      border: 'none',
      position: 'relative',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--duration-standard) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--color-neutral)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-standard) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function CartGlyph() {
  return React.createElement('svg', {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2
  }, React.createElement('circle', {
    cx: 9,
    cy: 21,
    r: 1
  }), React.createElement('circle', {
    cx: 20,
    cy: 21,
    r: 1
  }), React.createElement('path', {
    d: 'M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
  }));
}
function NavBar({
  logo,
  links = [],
  cartCount = 0
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, logo), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '32px'
    }
  }, links.map(l => React.createElement('a', {
    key: l.label,
    href: l.href || '#',
    onClick: l.onClick ? e => {
      e.preventDefault();
      l.onClick();
    } : undefined,
    style: {
      textDecoration: 'none',
      color: 'var(--text-primary)',
      font: 'var(--text-body-md)',
      fontSize: '14px',
      cursor: l.onClick ? 'pointer' : 'default'
    }
  }, l.label))), React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--text-primary)'
    }
  }, React.createElement(CartGlyph), cartCount > 0 && React.createElement('span', {
    style: {
      position: 'absolute',
      top: -8,
      right: -10,
      background: 'var(--color-accent)',
      color: 'var(--color-primary-shade)',
      borderRadius: '50%',
      width: 16,
      height: 16,
      fontSize: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600
    }
  }, cartCount)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '28px',
      borderBottom: '1px solid var(--border-hairline)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map(item => {
    const active = item.value === value;
    return React.createElement('button', {
      key: item.value,
      onClick: () => onChange && onChange(item.value),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 2px',
        font: 'var(--text-heading-sm)',
        fontSize: '15px',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderBottom: `2px solid ${active ? 'var(--color-accent)' : 'transparent'}`,
        marginBottom: '-1px',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Cart.jsx
try { (() => {
function Cart({
  items,
  onRemove,
  navigate
}) {
  const {
    Button,
    IconButton,
    Checkbox
  } = window.ZenithBrewDesignSystem_1e4669;
  const [subscribe, setSubscribe] = React.useState(true);
  function CloseIcon() {
    return React.createElement('svg', {
      width: 14,
      height: 14,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2
    }, React.createElement('path', {
      d: 'M18 6L6 18M6 6l12 12'
    }));
  }
  const subtotal = items.reduce((sum, i) => sum + parseFloat(i.price.replace('$', '')), 0);
  return React.createElement('div', {
    style: {
      padding: '48px',
      background: 'var(--surface-page)',
      minHeight: 500
    }
  }, React.createElement('h1', {
    style: {
      font: 'var(--text-display-md)',
      color: 'var(--text-primary)',
      margin: '0 0 28px'
    }
  }, 'Your cart'), items.length === 0 ? React.createElement('div', null, React.createElement('p', {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)',
      marginBottom: 20
    }
  }, 'Your cart is empty.'), React.createElement(Button, {
    variant: 'primary',
    onClick: () => navigate('shop')
  }, 'Browse the shop')) : React.createElement('div', {
    style: {
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: {
      flex: '2 1 420px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.map((item, idx) => React.createElement('div', {
    key: idx,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-sm)',
      background: item.img,
      flexShrink: 0
    }
  }), React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-heading-sm)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, item.name), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, item.roast + ' roast')), React.createElement('div', {
    style: {
      font: '600 15px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, item.price), React.createElement(IconButton, {
    icon: React.createElement(CloseIcon),
    ariaLabel: 'Remove',
    variant: 'ghost',
    size: 'sm',
    onClick: () => onRemove(idx)
  })))), React.createElement('div', {
    style: {
      flex: '1 1 280px',
      maxWidth: 320
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12,
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', null, 'Subtotal'), React.createElement('span', null, '$' + subtotal.toFixed(2))), React.createElement(Checkbox, {
    label: 'Subscribe & save 10%',
    checked: subscribe,
    onChange: setSubscribe
  }), React.createElement('div', {
    style: {
      marginTop: 20
    }
  }, React.createElement(Button, {
    variant: 'primary',
    size: 'lg',
    fullWidth: true
  }, 'Checkout'))))));
}
window.__zbCart = Cart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
function Footer() {
  return React.createElement('footer', {
    style: {
      background: 'var(--color-primary-shade)',
      color: 'var(--color-base)',
      padding: '56px 32px 32px',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 320
    }
  }, React.createElement('div', {
    style: {
      font: '600 22px var(--font-display)',
      letterSpacing: '0.04em',
      color: 'var(--color-accent-tint)',
      marginBottom: 10
    }
  }, 'ZENITH BREW'), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--color-primary-tint)'
    }
  }, 'where focus meets flavour')), ['Shop', 'About', 'Journal', 'Support'].map(col => React.createElement('div', {
    key: col,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--color-accent-tint)'
    }
  }, col), ['Single origin', 'Blends', 'Subscriptions'].map(item => React.createElement('div', {
    key: item,
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--color-primary-tint)'
    }
  }, item))))), React.createElement('div', {
    style: {
      borderTop: '1px solid rgba(244,246,252,0.12)',
      paddingTop: 20,
      font: 'var(--text-body-sm)',
      color: 'var(--color-primary-tint)'
    }
  }, '© 2026 Zenith Brew. All rights reserved.'));
}
window.__zbFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Home.jsx
try { (() => {
function Home({
  navigate,
  onAddToCart
}) {
  const {
    Button,
    Badge,
    Tag
  } = window.ZenithBrewDesignSystem_1e4669;
  const {
    PRODUCTS,
    ProductThumb
  } = window.__zbShop;
  const featured = PRODUCTS.slice(0, 3);
  return React.createElement('div', null,
  // Hero
  React.createElement('section', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      padding: '80px 48px',
      background: 'var(--surface-page)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      flex: '1 1 480px',
      maxWidth: 560,
      zIndex: 1
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent-shade)',
      marginBottom: 16
    }
  }, 'Single origin · small batch'), React.createElement('h1', {
    style: {
      font: 'var(--text-display-lg)',
      color: 'var(--text-primary)',
      margin: '0 0 20px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, 'Coffee, clarified.'), React.createElement('p', {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-secondary)',
      margin: '0 0 32px',
      maxWidth: 460
    }
  }, 'Roasted for clarity, not just caffeine. Every bag is cupped and dated so your morning ritual actually tastes like one.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14
    }
  }, React.createElement(Button, {
    variant: 'primary',
    size: 'lg',
    onClick: () => navigate('shop')
  }, 'Shop the roast'), React.createElement(Button, {
    variant: 'ghost',
    size: 'lg',
    onClick: () => navigate('shop')
  }, 'Our story'))), React.createElement('div', {
    style: {
      flex: '1 1 380px',
      position: 'relative'
    }
  }, React.createElement(ProductThumb, {
    color: '#B98E5E'
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: -24,
      right: -24,
      width: 90,
      height: 90,
      border: '1px solid var(--color-accent)',
      borderRadius: 'var(--radius-lg)',
      transform: 'rotate(var(--angle-accent))',
      opacity: 0.6
    }
  }))),
  // Featured
  React.createElement('section', {
    style: {
      padding: '64px 48px',
      background: 'var(--surface-card)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 28
    }
  }, React.createElement('h2', {
    style: {
      font: 'var(--text-heading-lg)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, 'This week\u2019s roast'), React.createElement('a', {
    onClick: () => navigate('shop'),
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }, 'View all →')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, featured.map(p => React.createElement('div', {
    key: p.id,
    style: {
      cursor: 'pointer'
    },
    onClick: () => navigate('product', p)
  }, React.createElement(ProductThumb, {
    color: p.img
  }), React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      font: 'var(--text-heading-sm)',
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, p.name), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, p.notes)), React.createElement('div', {
    style: {
      font: '600 15px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, p.price)))))),
  // Tagline band
  React.createElement('section', {
    style: {
      padding: '72px 48px',
      background: 'var(--color-primary-shade)',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-script-accent)',
      fontSize: 28,
      color: 'var(--color-accent-tint)'
    }
  }, 'where focus meets flavour')));
}
window.__zbHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductData.jsx
try { (() => {
const PRODUCTS = [{
  id: 'p1',
  name: 'Ethiopia Yirgacheffe',
  tag: 'Single origin',
  notes: 'Bright, floral, tea-like',
  price: '$22',
  roast: 'Light',
  img: '#E9DDC4'
}, {
  id: 'p2',
  name: 'Sumatra Mandheling',
  tag: 'Single origin',
  notes: 'Earthy, syrupy body',
  price: '$21',
  roast: 'Dark',
  img: '#8A6A4A'
}, {
  id: 'p3',
  name: 'Focus Blend',
  tag: 'House blend',
  notes: 'Cocoa, orange peel, clean finish',
  price: '$19',
  roast: 'Medium',
  img: '#B98E5E'
}, {
  id: 'p4',
  name: 'Colombia Huila',
  tag: 'Single origin',
  notes: 'Caramel, red apple',
  price: '$20',
  roast: 'Medium',
  img: '#C7A46B'
}, {
  id: 'p5',
  name: 'Midnight Roast',
  tag: 'House blend',
  notes: 'Dark chocolate, smoke',
  price: '$19',
  roast: 'Dark',
  img: '#5C4534'
}, {
  id: 'p6',
  name: 'Kenya AA',
  tag: 'Single origin',
  notes: 'Blackcurrant, wine-like acidity',
  price: '$23',
  roast: 'Light',
  img: '#D9C08A'
}];
function ProductThumb({
  color
}) {
  return React.createElement('div', {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-md)',
      background: `linear-gradient(160deg, ${color}, ${color}CC)`,
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      right: -10,
      bottom: -10,
      width: 70,
      height: 70,
      background: 'var(--color-primary-shade)',
      opacity: 0.15,
      clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
    }
  }));
}
window.__zbShop = {
  PRODUCTS,
  ProductThumb
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductDetail.jsx
try { (() => {
function ProductDetail({
  product,
  onAddToCart,
  navigate
}) {
  const {
    Button,
    Badge,
    Tabs,
    Select
  } = window.ZenithBrewDesignSystem_1e4669;
  const {
    ProductThumb
  } = window.__zbShop;
  const [tab, setTab] = React.useState('desc');
  const [grind, setGrind] = React.useState('whole');
  const tabContent = {
    desc: `${product.notes}. Grown at high altitude and processed with care, this lot was selected for a cup that's clean from first sip to last.`,
    brew: 'Recommended: 1:16 ratio, water at 200°F, 3:30 total brew time for pour-over. Adjust grind coarser for immersion methods.',
    rev: '“Exactly what the name promises — I actually focus better with this in hand.” — verified buyer'
  };
  return React.createElement('div', {
    style: {
      padding: '48px',
      background: 'var(--surface-page)',
      minHeight: 500
    }
  }, React.createElement('a', {
    onClick: () => navigate('shop'),
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, '← Back to shop'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 48,
      marginTop: 20,
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: {
      flex: '1 1 380px',
      maxWidth: 440
    }
  }, React.createElement(ProductThumb, {
    color: product.img
  })), React.createElement('div', {
    style: {
      flex: '1 1 380px',
      maxWidth: 460
    }
  }, React.createElement(Badge, {
    tone: 'accent'
  }, product.tag), React.createElement('h1', {
    style: {
      font: 'var(--text-display-md)',
      color: 'var(--text-primary)',
      margin: '12px 0 6px'
    }
  }, product.name), React.createElement('div', {
    style: {
      font: '600 20px var(--font-body)',
      color: 'var(--text-primary)',
      marginBottom: 20
    }
  }, product.price), React.createElement(Tabs, {
    items: [{
      label: 'Description',
      value: 'desc'
    }, {
      label: 'Brewing',
      value: 'brew'
    }, {
      label: 'Reviews',
      value: 'rev'
    }],
    value: tab,
    onChange: setTab
  }), React.createElement('p', {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)',
      margin: '18px 0 24px',
      maxWidth: 420
    }
  }, tabContent[tab]), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-end',
      marginBottom: 24
    }
  }, React.createElement(Select, {
    label: 'Grind',
    value: grind,
    onChange: setGrind,
    options: [{
      label: 'Whole bean',
      value: 'whole'
    }, {
      label: 'Drip',
      value: 'drip'
    }, {
      label: 'Espresso',
      value: 'espresso'
    }]
  })), React.createElement(Button, {
    variant: 'primary',
    size: 'lg',
    fullWidth: true,
    onClick: () => onAddToCart(product)
  }, 'Add to cart'))));
}
window.__zbProduct = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Shop.jsx
try { (() => {
function Shop({
  navigate
}) {
  const {
    Tag,
    Badge
  } = window.ZenithBrewDesignSystem_1e4669;
  const {
    PRODUCTS,
    ProductThumb
  } = window.__zbShop;
  const [roast, setRoast] = React.useState('All');
  const roasts = ['All', 'Light', 'Medium', 'Dark'];
  const filtered = roast === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.roast === roast);
  return React.createElement('div', {
    style: {
      padding: '48px',
      background: 'var(--surface-page)',
      minHeight: 500
    }
  }, React.createElement('h1', {
    style: {
      font: 'var(--text-display-md)',
      color: 'var(--text-primary)',
      margin: '0 0 8px'
    }
  }, 'Shop'), React.createElement('p', {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)',
      margin: '0 0 28px'
    }
  }, 'Every bag roasted to order, shipped within 48 hours.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 32
    }
  }, roasts.map(r => React.createElement(Tag, {
    key: r,
    selected: roast === r,
    onClick: () => setRoast(r)
  }, r))), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, filtered.map(p => React.createElement('div', {
    key: p.id,
    style: {
      cursor: 'pointer'
    },
    onClick: () => navigate('product', p)
  }, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement(ProductThumb, {
    color: p.img
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, React.createElement(Badge, {
    tone: 'neutral'
  }, p.tag))), React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      font: 'var(--text-heading-sm)',
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, p.name), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, p.roast + ' roast')), React.createElement('div', {
    style: {
      font: '600 15px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, p.price))))));
}
window.__zbShop2 = Shop;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Shop.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

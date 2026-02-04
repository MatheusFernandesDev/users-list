/**
 * Tema da aplicação - Inspirado na identidade visual da Sensedia
 * Cores principais: Roxo (#6B2D9E) e Laranja (#FF6B35)
 */
export const theme = {
  colors: {
    // Cores primárias da Sensedia
    primary: '#6B2D9E',           // Roxo Sensedia
    primaryDark: '#531F7A',       // Roxo mais escuro
    primaryLight: '#8B4BC2',      // Roxo mais claro
    
    // Cor de destaque
    accent: '#FF6B35',            // Laranja vibrante
    accentDark: '#E5562A',        // Laranja escuro
    accentLight: '#FF8559',       // Laranja claro
    
    // Cores secundárias
    secondary: '#7B3FF2',         // Roxo alternativo
    secondaryLight: '#9D68F5',
    
    // Backgrounds
    background: '#FFFFFF',
    backgroundAlt: '#F8F9FC',     // Cinza muito claro
    backgroundDark: '#1A1A2E',    // Roxo muito escuro
    
    // Surfaces
    surface: '#FFFFFF',
    surfaceHover: '#F5F3FF',      // Lilás muito claro
    surfaceElevated: '#FFFFFF',
    
    // Gradientes
    gradient: {
      primary: 'linear-gradient(135deg, #6B2D9E 0%, #8B4BC2 100%)',
      accent: 'linear-gradient(135deg, #FF6B35 0%, #FF8559 100%)',
      mixed: 'linear-gradient(135deg, #6B2D9E 0%, #7B3FF2 50%, #FF6B35 100%)',
      subtle: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FC 100%)',
    },
    
    // Texto
    text: {
      primary: '#1A1A2E',         // Quase preto
      secondary: '#64748B',       // Cinza médio
      tertiary: '#94A3B8',        // Cinza claro
      disabled: '#CBD5E1',        // Cinza muito claro
      inverse: '#FFFFFF',         // Branco para fundos escuros
    },
    
    // Bordas
    border: '#E2E8F0',            // Cinza claro
    borderLight: '#F1F5F9',       // Cinza muito claro
    borderDark: '#CBD5E1',        // Cinza médio
    
    // Estados
    success: '#10B981',           // Verde
    error: '#EF4444',             // Vermelho
    warning: '#F59E0B',           // Amarelo
    info: '#3B82F6',              // Azul
    
    // Sombras
    shadow: 'rgba(107, 45, 158, 0.1)',  // Sombra roxa
    shadowDark: 'rgba(107, 45, 158, 0.2)',
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
  },
  
  typography: {
    fontFamily: {
      primary: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      secondary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
    },
    
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  
  borderRadius: {
    none: '0',
    sm: '0.375rem',    // 6px
    md: '0.5rem',      // 8px
    lg: '0.75rem',     // 12px
    xl: '1rem',        // 16px
    '2xl': '1.5rem',   // 24px
    full: '9999px',
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
    ultrawide: '1536px',
  },
  
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(107, 45, 158, 0.05)',
    md: '0 4px 6px -1px rgba(107, 45, 158, 0.1), 0 2px 4px -1px rgba(107, 45, 158, 0.06)',
    lg: '0 10px 15px -3px rgba(107, 45, 158, 0.1), 0 4px 6px -2px rgba(107, 45, 158, 0.05)',
    xl: '0 20px 25px -5px rgba(107, 45, 158, 0.1), 0 10px 10px -5px rgba(107, 45, 158, 0.04)',
    '2xl': '0 25px 50px -12px rgba(107, 45, 158, 0.25)',
    glow: '0 0 20px rgba(107, 45, 158, 0.3)',
    glowAccent: '0 0 20px rgba(255, 107, 53, 0.3)',
  },
  
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;
export const size = {
    xs: '320px',
    sm: '375px',
    base: '425px',
    md: '968px',
    lg: '1024px',
    xl: '1440px',
    xxl: '2560px',
  };
  
  export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    base: `(max-width: ${size.base})`,
    md: `(max-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
  };
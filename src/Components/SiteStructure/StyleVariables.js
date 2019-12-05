const breakpoints = {
  small: 0,
  medium: 641,
  large: 1025,
  xlarge: 1200,
};

const mq = (screenSize) => {
  const size = breakpoints[screenSize];
  return `@media (min-width: ${size}px)`
}

// Color Declarations
const siteColors = {
  white: '#fff',
  black: '#202e39',
  gray: '#7d8086',
}

module.exports = { siteColors, mq };
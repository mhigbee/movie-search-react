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
  black: '000',
  gray: '#7d8086',
  blue1: '#1d3eb3',
  blue2: '#5c80ff',
  blue3:'#2980b3',
  yellow1: '#ffd35c',
  yellow2: '#ffda75',
  yellow3: '#b38e29'
}

module.exports = { siteColors, mq };
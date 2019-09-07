import { themeColor } from '../site-config';

const purples = ['#7b79b0', '#6f6da5', '#eeeefc', '#1c2070'];
const greens = ['#d2eced', '#132c2d'];
const fontSizes = [12, 14, 16, 18, 20, 24, 30, 38, 62];
const space = [0, '2rem', '3rem', '4rem', '5rem', '7rem', '32rem', '40rem', '48rem', '56rem', '64rem'];
space.default = '1rem';

export const breakpoints = ['30em', '46em', '61.25em', '80em', '105em'];
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop = breakpoints[2];
breakpoints.wide = breakpoints[3];
breakpoints.extrawide = breakpoints[4];

export default {
  space,
  fontSizes,
  breakpoints,
  sizes: ['48em', '60em', '80em'],
  colors: {
    theme: themeColor,
    purples,
    greens,
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: themeColor,
      fontSize: fontSizes[4],
      borderColor: '#fff',
      paddingRight: space[4],
      paddingLeft: space[4],
      '&:hover': {
        backgroundColor: '#000',
      },
    },
    outline: {
      color: themeColor,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
  },
};

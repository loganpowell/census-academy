import { modularScale, tint } from 'polished'
import { css } from 'styled-components'

// self hosted fonts see docs for acceptable
// weights and styles: https://github.com/KyleAMathews/typefaces
import 'typeface-roboto'
import 'typeface-roboto-slab'
import 'typeface-roboto-condensed'
import 'typeface-lora'

// from reactjs.org: https://github.com/reactjs/reactjs.org/blob/1349493721cd03d7185248d37937608f15a446aa/src/css/reset.css
// html {
//   box-sizing: border-box;
//   font-family: -apple-system, BlinkMacSystemFont,
//     "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
//     "Fira Sans", "Droid Sans", "Helvetica Neue",
//     sans-serif;
//   font-weight: 400;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
// }


// FONT MAKER
const makeFont = (font, weight, style, display) => {
  return `
    font-family: ${font};
    font-weight: ${weight};
    font-style: ${style};
    font-display: ${display};
  `
}
// FONT VARIABLES
const sans = 'Roboto'
const slab = 'Roboto Slab'
const serif = 'Lora'
const condensed = 'Roboto Condensed'

// COLOR VARIABLES
const inactive = '#78909C'
const active = '#4B636E'
const highlight= '#112E51'
const bold = '#205493'
const accent = '#0095A8'
const action = '#FF7043'


// from reactjs.org: https://github.com/reactjs/reactjs.org/blob/master/src/theme.js

// const colors = {
//   lighter: '#373940', // light blue
//   dark: '#282c34', // dark blue
//   darker: '#20232a', // really dark blue
//   brand: '#61dafb', // electric blue
//   brandLight: '#bbeffd',
//   text: '#1a1a1a', // very dark grey / black substitute
//   subtle: '#6d6d6d', // light grey for text
//   subtleOnDark: '#999',
//   divider: '#ececec', // very light grey
//   note: '#ffe564', // yellow
//   error: '#ff6464', // yellow
//   white: '#ffffff',
//   black: '#000000',
// };

// SCALAR VARIABLES
const modScalar = 1.25 // from: http://www.modularscale.com/?1&em&1.25
const baseScale = '1rem'

export default {
  font: {
    serif: {
      regular:      makeFont(serif, 400, 'normal', 'swap'),
      italic:       makeFont(serif, 400, 'italic', 'swap'),
      bold:         makeFont(serif, 700, 'normal', 'swap'),
      boldItalic:   makeFont(serif, 700, 'italic', 'swap'),
    },
    condensed: {
      light:        makeFont(condensed, 300, 'normal', 'swap'),
      lightItalic:  makeFont(condensed, 300, 'italic', 'swap'),
      regular:      makeFont(condensed, 400, 'normal', 'swap'),
      italic:       makeFont(condensed, 400, 'italic', 'swap'),
      bold:         makeFont(condensed, 700, 'normal', 'swap'),
      boldItalic:   makeFont(condensed, 700, 'italic', 'swap'),
    },
    slab: {
      thin:         makeFont(slab, 100, 'normal', 'swap'),
      light:        makeFont(slab, 300, 'normal', 'swap'),
      regular:      makeFont(slab, 400, 'normal', 'swap'),
      bold:         makeFont(slab, 700, 'normal', 'swap'),
    },
    sans: {
      thin:         makeFont(sans, 100, 'normal', 'swap'),
      thinItalic:   makeFont(sans, 100, 'italic', 'swap'),
      light:        makeFont(sans, 300, 'normal', 'swap'),
      lightItalic:  makeFont(sans, 300, 'italic', 'swap'),
      regular:      makeFont(sans, 400, 'normal', 'swap'),
      italic:       makeFont(sans, 400, 'italic', 'swap'),
      medium:       makeFont(sans, 500, 'normal', 'swap'),
      mediumItalic: makeFont(sans, 500, 'italic', 'swap'),
      bold:         makeFont(sans, 700, 'normal', 'swap'),
      boldItalic:   makeFont(sans, 700, 'italic', 'swap'),
      black:        makeFont(sans, 900, 'normal', 'swap'),
      blackItalic:  makeFont(sans, 900, 'italic', 'swap'),
    }
  },
  color: {
    inactive: (level) => tint(level/10, inactive),
    active: (level) => tint(level/10, active),
    highlight: (level) => tint(level/10, highlight),
    bold: (level) => tint(level/10, bold),
    accent: (level) => tint(level/10, accent),
    action: (level) => tint(level/10, action),
  },
  size: (scale) => modularScale(scale, baseScale, modScalar)
}

import { css } from "styled-components"
import { theme } from 'styles'

/*
  em and rem units should not be affected by changes in font-size in the HTML
  since they’re based on the browser’s internal font-size property.

  400px ÷ 16px = 25rem

  em vs root-em(rem)

  Pixels are ignorant, don’t use them.
  Use REMs for sizes and spacing.
  Use EMs for media queries.
*/
// can use this like ${media.phone`width: 100%`}
const { screenSizes } = theme

export default {
  flexBox: (props) => {
    return`
    display: flex;
    justify-content: ${props.center && 'center'};
    align-items: ${props.center && 'center'};
    flex: ${props.flex};
    flex-direction: ${props.row ? 'row' : 'column'};
    margin: ${props.margin || 0};
    padding: ${props.padded && props.theme.space.padded};
  `},
  transitMap: (arr) => {
    const lastIdx = arr.length - 1
    return arr.map((target, i) => {
      return `${target} ${theme.transition}${lastIdx === i ? '' : ', '}`
    }).join('')
  },
  media: Object.keys(screenSizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (${screenSizes[label].type}: ${screenSizes[label].size}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {})
}

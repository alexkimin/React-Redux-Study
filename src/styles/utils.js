// import styled, { css } from "styled-components"
import { theme } from 'styles'

export default {
  flexBox: (props) => {
    // console.log(props)
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
}

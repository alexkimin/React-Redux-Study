import styled, { css } from "styled-components"

export default {
  flexBox: (props) => {
    // console.log(props)
    return`
    display: flex;
    justify-content: ${props.center && 'center'};
    align-items: ${props.center && 'center'};
    flex: ${props.col};
    flex-direction: ${props.row ? 'row' : 'column'};
    margin: ${props.margin || 0};
    padding: ${props.padded && props.theme.space.padded};
  `},

}

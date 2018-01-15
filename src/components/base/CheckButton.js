import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { loaderSpin, checkmark } from 'styles/keyframes'
// .load-complete {
// }
const Circle = styled.div`
  ${props => `border: 1px solid ${ props.theme.color.border };
      position: relative;
      display: inline-block;
      vertical-align: top;
      border-radius: 50%;
      width: ${ props.size }em;
      height: ${ props.size }em;

      &:hover {
        border: 1px solid ${ props.theme.color.secondary };
      }
    `
  }
  ${props => props.toggle && `animation: none;
    border-color: ${ props.theme.color.secondary };
    transition: border 500ms ease-out;
    `
  }
`

const CheckMark = styled.div`
  ${props =>`
      opacity: 1;
      height: ${ `${props.size / 2}em` };
      width: ${ `${props.size / 4}em` };
      transform-origin: left top;
      border-right: 1px solid ${ props.theme.color.secondary };
      border-top: 1px solid ${ props.theme.color.secondary };
      content: '';
      left: ${ `${props.size / 6 + props.size / 12}em` };
      top: ${ `${props.size / 2}em` };
      position: absolute;
      transform: scaleX(-1) rotate(135deg);
      animation-duration: 500ms;
      animation-timing-function: ease;
      animation-name: ${ checkmark };
    `
  }
`


const CheckButton = ({
  size,
  onClick,
  toggle,
}) => {
  return (
    <Circle
      size={ size }
      onClick={ onClick }
      toggle={ toggle }
    >
      { toggle && <CheckMark size={ size } toggle={ toggle } /> }
    </Circle>
  )
}

CheckButton.defaultProps = {
  size: 2,
}

CheckButton.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  toggle: PropTypes.bool,
}

export default CheckButton


// Define vars we'll be using
// const success = theme.secondary
// const size = 3
// const checkHeight = `${size/2}em`
// const checkWidth = `${checkHeight/2}em`
// const checkLeft = `${size/6 + size/12}em`
// const checkThickness = '2px'
// const checkColor = success
// `
//

//
// .checkmark {
//   display: none;
//
//   &.draw:after {
//     animation-duration: 800ms;
//     animation-timing-function: ease;
//     animation-name: checkmark;
//     transform: scaleX(-1) rotate(135deg);
//   }
//
//   &:after {
//     opacity: 1;
//     height: $check-height;
//     width: $check-width;
//     transform-origin: left top;
//     border-right: $check-thickness solid $check-color;
//     border-top: $check-thickness solid $check-color;
//     content: '';
//     left: $check-left;
//     top: $check-height;
//     position: absolute;
//   }
// }

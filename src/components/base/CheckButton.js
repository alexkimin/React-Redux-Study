import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// keyframes
import { loaderSpin, checkmark } from 'styles/keyframes'

const CircleBorder = styled.div`
  ${props => `
      border: 1px solid ${ props.theme.color.border };
      display: inline-block;
      position: relative;
      vertical-align: top;
      border-radius: 50%;
      width: ${ props.size }em;
      height: ${ props.size }em;

      &:hover {
        border: 1px solid ${ props.theme.color.secondary };
      }

      ${props.spin && `
        border-left-color: ${ props.theme.color.secondary };
        animation-name: ${ loaderSpin };
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      `}
      ${props.toggle && `
          border-color: ${ props.theme.color.secondary };
          animation: none;
          transition: border 500ms ease-out;
      `}
  `}
`

const CheckMark = styled.div`
  ${props =>`
      opacity: 1;
      height: ${ `${props.size / 2}em` };
      width: ${ `${props.size / 4}em` };
      border-right: 3px solid ${ props.theme.color.secondary };
      border-top: 3px solid ${ props.theme.color.secondary };
      content: '';
      position: absolute;
      left: ${ `${props.size / 6 + props.size / 12}em` };
      top: ${ `${props.size / 2}em` };
      transform-origin: left top;
      transform: scaleX(-1) rotate(135deg);
      animation: ${ checkmark } 300ms ease;
    `
  }
`


const CheckButton = ({
  size,
  onClick,
  toggle,
  ...rest
}) => {
  return (
    <CircleBorder
      size={ size }
      onClick={ onClick }
      toggle={ toggle }
      { ...rest }
    >
      { toggle && <CheckMark size={ size } toggle={ toggle } /> }
    </CircleBorder>
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
  spin: PropTypes.bool,
}

export default CheckButton

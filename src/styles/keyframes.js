import { keyframes } from 'styled-components'

export const loading = keyframes`
  0% {
    transform: rotate(-20deg);
    height: 10px;
    width: 73px;
  }
  5% {
    height: 10px;
    width: 73px;
  }
  30% {
    transform: rotate(380deg);
    height: 10px;
    width: 73px;
  }
  40% {
    transform: rotate(360deg);
    height: 10px;
    width: 73px;
  }
  55% {
    transform: rotate(0deg);
    height: 10px;
    width: 10px;
  }
  65% {
    transform: rotate(0deg);
    height: 10px;
    width: 83px;
  }
  68% {
    transform: rotate(0deg);
    height: 10px;
  }
  75% {
    transform: rotate(0deg);
    height: 10px;
    width: 1px;
  }
  78% {
    height: 10px;
    width: 10px;
  }
  90% {
    height: 10px;
    width: 73px;
    transform: rotate(0deg);
  }
  99%, 100% {
    height: 10px;
    width: 73px;
    transform: rotate(-20deg);
  }
`

export const checkmark = keyframes`
  {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: $check-width;
      opacity: 1;
    }
    40% {
      height: $check-height;
      width: $check-width;
      opacity: 1;
    }
    100% {
      height: $check-height;
      width: $check-width;
      opacity: 1;
    }
  }
`

export const loaderSpin = keyframes`
  {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const fadein = keyframes`
  from {
    opacity: 0.01;
  }
  to {
    opacity: 1.0;
  }
`
export const fadeout = keyframes`
  from {
    opacity: 1.0;
  }

  to {
    opacity: 0.01;
    width: 0px;
    color: white;
  }
`

export const blink = keyframes`
{
  0% {opacity: 1}
	49%{opacity: 1}
	50% {opacity: 0}
}
`

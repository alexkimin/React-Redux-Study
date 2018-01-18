import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SpaceCenter, SpaceSide } from 'components'
import { utils } from 'styles'

const FlexBox = styled.div`
  ${props => utils.flexBox(props)}
  ${props => `
    background: ${ props.theme.color.background };
    font-family: ${ props.theme.font.main };
  `}
  height: 100vh;
`

const AppTemplate = ({ children }) => {

  return (
    <FlexBox>
      {/*top space*/}
      <SpaceSide flex={ 1 } />
      {/*center space of App*/}
      <SpaceCenter row flex={ 10 }>
        {/*left space of center*/}
        <SpaceSide horizon flex={ 1 } />
        {/*Actual contents space*/}
        <SpaceCenter flex={ 10 }>
          { children }
        </SpaceCenter>
        {/*right space of center*/}
        <SpaceSide horizon flex={ 1 } />
      </SpaceCenter>
      {/*bottom space*/}
      <SpaceSide vertical flex={ 1 } />
    </FlexBox>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
}

export default AppTemplate

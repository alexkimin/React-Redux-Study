import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SpaceCenter, SpaceSide } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`

const AppTemplate = ({ children }) => {
  return (
    <Wrapper>
      {/*side-left space for responsive*/}
      <SpaceSide col={ 1 } />
      {/*contents container*/}
      <SpaceCenter col={ 10 }>
        { children }
      </SpaceCenter>
      {/*side-right space for responsive*/}
      <SpaceSide col={ 1 } />
    </Wrapper>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default AppTemplate

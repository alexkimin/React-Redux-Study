import React from 'react'
import PropTypes, { arrayOf } from 'prop-types'
import styled from 'styled-components'

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom'

import {
  FlexBox,
  TitleHeader,
  NavFilterBar,
  Footer,
} from 'components'

import {
  TodoAdd,
} from 'containers'

const CenterSpace = props => (<FlexBox
                              column
                              margin={ '100px 0 0 0' }
                              { ...props } />)

const SideSpace = props => (<FlexBox { ...props } />)


const AppLayout = ({ children }) => {
  return (
    <FlexBox>
      {/*side-left space for responsive*/}
      <SideSpace col={ 1 } />
      {/*contents container*/}
      <CenterSpace col={ 10 }>
        <TitleHeader />
        <TodoAdd />
        <NavFilterBar />
        {/*todo rendering*/}
        { children }
        <Footer/>
      </CenterSpace>
      {/*side-right space for responsive*/}
      <SideSpace col={ 1 } />
    </FlexBox>
  )
}

AppLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default AppLayout

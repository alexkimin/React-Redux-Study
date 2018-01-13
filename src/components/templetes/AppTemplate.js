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
  Title,
  Footer,
  NavHeader,
} from 'components'

import {
  TodoAdd,
} from 'containers'

const Contents = props => (<FlexBox
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
      <Contents col={ 10 }>
        <Title>Todos</Title>
        <TodoAdd />
        <NavHeader />
        {/*todo rendering*/}
        { children }
        <Footer/>
      </Contents>
      {/*side-right space for responsive*/}
      <SideSpace col={ 1 } />
    </FlexBox>
  )
}

AppLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default AppLayout

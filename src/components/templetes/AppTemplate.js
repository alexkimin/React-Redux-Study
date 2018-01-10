import React from 'react'
import PropTypes from 'prop-types'
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
                              { ...props }
                             />)

const Space = props => (<FlexBox { ...props } />)


const AppLayout = props => {
  return (
    <FlexBox>
      {/*side-left space for responsive*/}
      <Space col={ 1 } />
      {/*contents container*/}
      <Contents col={ 10 }>
        <Title>Today's Todo List</Title>
        <TodoAdd />
        <NavHeader />
        {/*todo rendering*/}
        { props.children }
        <Footer/>
      </Contents>
      {/*side-right space for responsive*/}
      <Space col={ 1 } />
    </FlexBox>
  )
}

export default AppLayout

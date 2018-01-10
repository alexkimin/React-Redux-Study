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
      <Space col={ 1 } />
      <Contents col={ 10 }>
        <Title>Today's Todo List</Title>
        <TodoAdd />
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/filter/completed">Completed</Link></li>
          <li><Link to="/filter/actived">Actived</Link></li>
        </ul>
        { props.children }
      </Contents>
      <Space col={ 1 } />
    </FlexBox>
  )
}

export default AppLayout

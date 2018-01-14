import React from 'react'
import PropTypes from 'prop-types'

import { FlexBox } from 'components'

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
        { children }
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

import React, { Component } from 'react'

const EnsureHome = ChildComponent => {

  class EnsureHome extends Component {

    componentWillMount() {
      this.props.history.push('/')
    }
    render() {
      return <ChildComponent {...this.props} />
    }
  }
  
  return EnsureHome
}

export default EnsureHome


import React, { Component } from 'react'
import PropTypes from 'prop-types'

// currently not using...
const asyncComponent = getComponent => {

  return class AsyncComponent extends Component {
    static Component = null
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent()
          .then(({default: Component}) => {
            AsyncComponent.Component = Component
            this.setState({ Component })
          })
      }
    }
    render() {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : null
    }
  }
}

export default asyncComponent

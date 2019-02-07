import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { addSmurf } from '../actions/index'

class SmurfForm extends Component {

    state = {
        name: '',
        age: 0,
        height: '',
        isSmurfUpdating: false
    }
    handleChange = e => {
      const {name, value} = e.target
      this.setState({
        [name]: value
      })
    }
    addSmurf = e => {
      e.preventDefault()
      this.props.addSmurf(this.state)
    }
  render() {
    return (
      <form>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/>
        <input type="text" name="height" value={this.state.height} onChange={this.handleChange}/>
        <button onClick={this.addSmurf}>Add New Smurf</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(null, { addSmurf })(SmurfForm)
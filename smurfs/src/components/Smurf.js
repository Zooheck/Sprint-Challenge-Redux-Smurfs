import React, { Component } from 'react'

import { connect } from 'react-redux'

import { deleteSmurf } from '../actions/index'
class Smurf extends Component {
    deleteSmurf = () => {
        this.props.deleteSmurf(this.props.smurf.id)
    }
  render() {
    return (
      <div>
        <h2>{this.props.smurf.name}</h2>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
        <div onClick={this.deleteSmurf}>Delete Smurf</div>
      </div>
    )
  }
}

export default connect(null, { deleteSmurf })(Smurf)
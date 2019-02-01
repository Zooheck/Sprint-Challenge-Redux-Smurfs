import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { getSmurfs } from '../actions/index'

class SmurfList extends Component {
    componentDidMount() {
        this.props.getSmurfs()
    }

  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => {
            return <p key={this.props.smurfs.indexOf(smurf)}>{smurf.name}</p>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
})

export default connect(mapStateToProps, { getSmurfs })(SmurfList)
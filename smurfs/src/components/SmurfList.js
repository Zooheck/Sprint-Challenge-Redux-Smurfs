import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Smurf from './Smurf'

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
            return <Smurf smurf={smurf} key={smurf.id} />
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
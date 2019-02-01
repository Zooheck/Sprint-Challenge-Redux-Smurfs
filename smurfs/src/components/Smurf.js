import React, { Component } from 'react'

import { connect } from 'react-redux'

import { deleteSmurf, toggleUpdate, updateSmurf } from '../actions/index'
class Smurf extends Component {
    state = {
        name: '',
        age: 0,
        height: '',
        isUpdating: false
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
      }
    deleteSmurf = () => {
        this.props.deleteSmurf(this.props.smurf.id)
    }
    toggleUpdate = () => {
        this.props.toggleUpdate()
    }
    updateSmurf = (e) => {
        e.preventDefault()
        this.props.updateSmurf(this.props.smurf.id, this.state)
    }
  render() {
      console.log(this.props)
    return (
      <div>
        <h2>{this.props.smurf.name}</h2>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
        <div onClick={this.deleteSmurf}>Delete Smurf</div>
        <div onClick={this.toggleUpdate}>Update Smurf</div>
        {this.props.isUpdating && 
            <form>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
              <input type="number" name="age" value={this.state.age} onChange={this.handleChange}/>
              <input type="text" name="height" value={this.state.height} onChange={this.handleChange}/>
              <button onClick={this.updateSmurf}>Update Smurf</button>
            </form>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    isUpdating: state.isUpdating
})


export default connect(mapStateToProps, { deleteSmurf, toggleUpdate, updateSmurf })(Smurf)
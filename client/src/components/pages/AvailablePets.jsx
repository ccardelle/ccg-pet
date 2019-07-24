import React, { Component } from 'react'
import api from '../../api'

export default class AvailablePets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      availablePets: [],
    }
  }
  render() {
    return (
      <div className="available-pets pet-container">
        <h2>List of Available Pets</h2>
        {this.state.availablePets.map(p => (
          <div key={p._id} className="w3-card pet-card">
            <img className="pet-img" src={p.imgUrl} alt="" />
            {p.name}, {p.type}, {p.gender}, {p.breed}
          </div>
        ))}
      </div>
    )
  }

  componentDidMount() {
    api
      .getAvailablePets()
      .then(pets => {
        console.log(pets)
        this.setState({
          availablePets: pets,
        })
      })
      .catch(err => console.log(err))
  }
}

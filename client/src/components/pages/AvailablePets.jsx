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
      <div className="pet-page">
        <h2>List of Available Pets</h2>
        <div className="pet-filters">
          <span className="filter-label">Pet Type: </span>
          <select className="filter" name="select-type">
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          <span className="filter-label">Pet Breed: </span>
          <select className="filter" name="select-breed">
            <option value="Huskie">Huskie</option>
            <option value="Poodle">Poodle</option>
            <option value="German Shephard">German Shephard</option>
            <option value="Saint Bernard">Saint Bernard</option>
            <option value="Corgi">Corgi</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Italian Greyhound">Italian Greyhound</option>
            <option value="Jack Russell">Jack Russell</option>
            <option value="Maltesse">Maltesse</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Mix">Mix</option>
          </select>
          <span className="filter-label">Pet Gender: </span>
          <select className="filter" name="select-gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="pet-container">
          {this.state.availablePets.map(p => (
            <div key={p._id} className="pet-card">
              <img className="pet-img" src={p.imgUrl} alt="" />
              <h1>{p.name}</h1>
              Type: {p.type} Gender: {p.gender} Breed: {p.breed}
            </div>
          ))}
        </div>
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

import React, { Component } from 'react'
import api from '../../api'

export default class AvailablePets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      availablePets: [],
      filteredPets: [],
      petType: 'All',
      petBreed: 'All',
      petGender: 'All',
    }

    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleBreedChange = this.handleBreedChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
  }

  handleTypeChange(event) {
    this.setState({ petType: event.target.value })
  }

  handleBreedChange(event) {
    this.setState({ petBreed: event.target.value })
  }

  handleGenderChange(event) {
    this.setState({ petGender: event.target.value })
  }

  showPets() {
    let filteredArray = []
    this.state.availablePets.forEach(p => {
      if (
        p.gender.includes(this.state.petGender) ||
        this.state.petGender === 'All'
      ) {
        if (
          p.breed.includes(this.state.petBreed) ||
          this.state.petBreed === 'All'
        ) {
          if (
            p.type.includes(this.state.petType) ||
            this.state.petType === 'All'
          ) {
            filteredArray.push(p)
          }
        }
      }
    })
    console.log(`FILTERED ${filteredArray} ${filteredArray.length}`)
    // this.setState({ filteredPets: filteredArray })
    return (
      <div className="pet-container">
        {filteredArray.map(p => (
          <div key={p._id} className="pet-card">
            <img className="pet-img" src={p.imgUrl} alt="" />
            <h1>{p.name}</h1>
            <hr />
            <ul>
              <li>Type: {p.type}</li> <li>Gender: {p.gender}</li>{' '}
              <li>Breed: {p.breed}</li>
            </ul>
          </div>
        ))}
      </div>
    )
    // if (
    //   this.state.petType === 'All' &&
    //   this.state.petBreed === 'All' &&
    //   this.state.petGender === 'All'
    // ) {
    //   return (
    //     <div className="pet-container">
    //       {this.state.availablePets.map(p => (
    //         <div key={p._id} className="pet-card">
    //           <img className="pet-img" src={p.imgUrl} alt="" />
    //           <h1>{p.name}</h1>
    //           <hr />
    //           <ul>
    //             <li>Type: {p.type}</li> <li>Gender: {p.gender}</li>{' '}
    //             <li>Breed: {p.breed}</li>
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="pet-container">
    //       {this.state.filteredPets.map(p => (
    //         <div key={p._id} className="pet-card">
    //           <img className="pet-img" src={p.imgUrl} alt="" />
    //           <h1>{p.name}</h1>
    //           <hr />
    //           <ul>
    //             <li>Type: {p.type}</li> <li>Gender: {p.gender}</li>{' '}
    //             <li>Breed: {p.breed}</li>
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   )
    // }
  }
  render() {
    return (
      <div className="pet-page">
        <h2>List of Available Pets</h2>

        {/* Filter options */}

        <div className="pet-filters">
          <span className="filter-label">Pet Type: </span>
          <select
            className="filter"
            name="select-type"
            onChange={this.handleTypeChange}
            value={this.state.petType}
          >
            <option value="All">All</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>

          <span className="filter-label">Pet Breed: </span>

          <select
            className="filter"
            name="select-breed"
            onChange={this.handleBreedChange}
            value={this.state.petBreed}
          >
            <option value="All">All</option>
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
          <select
            className="filter"
            name="select-gender"
            onChange={this.handleGenderChange}
            value={this.state.petGender}
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* Displays available pets (based on filters) */}
        {/* <div className="pet-container">
          {this.state.availablePets.map(p => (
            <div key={p._id} className="pet-card">
              <img className="pet-img" src={p.imgUrl} alt="" />
              <h1>{p.name}</h1>
              <hr />
              <ul>
                <li>Type: {p.type}</li> <li>Gender: {p.gender}</li>{' '}
                <li>Breed: {p.breed}</li>
              </ul>
            </div>
          ))}
        </div> */}
        {this.showPets()}
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

import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class ViewAllFlowers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flowers : []
    }
  }

  componentDidMount() {

    const API = 'https://flowers.vapor.cloud/flowers'

    fetch(API)
    .then(
      response =>  response.json()
    ).then(
      json => this.setState({
        flowers : json
      })
    )
  }

  render(){
    let flowersList =
      this.state.flowers.map(function(flower){
      return(
      <div>
        <li> {flower.name} </li>
        <li>{flower.description}</li>
        <li><img className="flowerImage" src={flower.imageURL}></img></li>
      </div>)
    })
    return(
      <div>
      <h1>View All Flowers</h1>
      <ul>{flowersList}
      </ul>
      </div>
    )
  }
}

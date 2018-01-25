import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Baselayout extends Component {
  render() {
    return(
      <div>
      <NavBar />
        {this.props.children}
      <Footer />
      </div>
    )
  }
}

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/viewAll'>Flowers</Link></div>
        <div><Link to='/addFlower'>Add Flower</Link></div>
        <div><Link to='/aboutUs'>About Us</Link></div>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>Flowers Webpage made by Michael</div>
      </div>
    )
  }

}

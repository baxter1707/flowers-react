import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class AddFlower extends Component{

  constructor(props){
    super(props)

    this.state ={
      name : '',
      description: '',
      imageURL: ''
    }
    this.recordChange = this.recordChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

submitForm(event){
  fetch('https://flowers.vapor.cloud/flower', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }

    })
  event.preventDefault()
}

recordChange(event) {
  let userInput = event.target.value
  let name = event.target.name

  this.setState({
      [name] : userInput
    })
    console.log(this.state)
}


  render(){
    return(
    <div className = 'addflowercontainer'>
      <div>
      <h1>Add a Flower</h1>
      </div>

      <div>
        <form onSubmit = {this.submitForm}>
          <input onChange = {this.recordChange} type='text' name='name' placeholder='Name of Flower' />
          <input onChange = {this.recordChange} type='text' name='description' placeholder='Flower Description' />
          <input onChange = {this.recordChange} type='text' name='imageURL' placeholder='URL of Image' />
          <input className = 'submitButton' type = 'submit'/>

        </form>
      </div>
    </div>
    )
  }
}

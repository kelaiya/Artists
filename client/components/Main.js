import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Main extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  handleChange(event){
   
  }
  
  
  handleSubmit(event){
    event.preventDefault()
    
    axios.get(``)
      
     
  }

  render(){
    return (
            <div>
              <div className="screen first">
                <h1 className="h1"> Search Your Favorite Artist </h1>
                <form onSubmit={this.handleSubmit}>     
                  <input id="inputBox" type="text" onChange={this.handleChange} placeholder="Ohhh"/>
                  <button type="submit" className="button"> Search </button>
                </form>
              </div>
            </div>
          )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Show from './Show'

//artist state will have name of the artist that user wants to search
//data state is all the data of that particular artist
export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      artist: "",
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  //This will change the state according to user's input
  handleChange(event){
    this.setState({
      artist: event.target.value
    })
  }
  
  //This function will fetch data from iTunes using axios on iTunes API 
  handleSubmit(event){
    event.preventDefault()
    axios.get(`https://itunes.apple.com/search?term=${this.state.artist}`)
    .then(res =>{
      this.setState({data: res.data.results})
    })
  }
  
  render(){
    //information is an array with all the data of that particular artist
    var information = this.state.data;
    
    return (
        <div className="container">
          <div className="title"> 
            <img className="loogo1" src="/button2.png" />
            <h1 className="h1"> Artistry </h1>
            <img className="loogo1" src="/button2.png" />
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="labelinput">
              <label className="label"> Artist's Name </label>     
              <input className="input" type="text" onChange={this.handleChange} placeholder="Name"/>
            </div>
            <button type="submit" className="button"> Search </button>
          </form>
          <div className="imagesMain">
            {
              (information.length > 0) ? <Show data={this.state.data} artist={this.state.artist} /> : <h1 />
            }
          </div>
        </div>
    )
  }
}
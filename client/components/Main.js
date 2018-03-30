import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      artist: "",
      data: [],
      subInfo:{},
      show: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  handleChange(event){
    this.setState({
      artist: event.target.value
    })
  }
  
  
  handleSubmit(event){
    event.preventDefault()
    
    axios.get(`https://itunes.apple.com/search?term=${this.state.artist}`)
    .then(res =>{
      console.log("data", res.data)
      this.setState({data: res.data.results})
    })
      
     
  }


  render(){
    var information = this.state.data;
    var details = this.state,subInfo
    console.log("info", information)
    console.log("detail", details)

    return (
            <div className="container">
              <div className="title"> 
                <h1 className="h1"> Search Your Favorite Artist </h1>
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
                  (information.length > 0) ? <div className="result1"> {
                    information.map((info, index) => {
                      return(
                        <div key={index} className="result2">
                          <a href={info.trackViewUrl} target="_blank"><img className="image" src = {info.artworkUrl100} /></a>
                          <h3 className="name"> Album : {info.collectionName}</h3>
                          <div className="cover">
                            <div class="dropdown">
                              <button class="dropbtn">Dropdown</button>
                              <div class="dropdown-content">
                                <h3 className="drop">Release date: {(info["releaseDate"]).slice(0, 10)}</h3>
                                <h3 className="drop">Track count: {info.trackCount}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  </div> : <h1 />
                }
              </div>
              
            </div>
          )
    }
}
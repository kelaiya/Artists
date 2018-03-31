import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Show extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 1,
      dataPerPage: 12
    }
    this.handleClick = this.handleClick.bind(this) 
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render(){
    var information = this.props.data;
    var currentPage = this.state.currentPage;
    var dataPerPage = this.state.dataPerPage;
    console.log("info", information)
    // console.log("detail", details)

      const indexOfLastTodo = currentPage * dataPerPage;
      const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
      const currentTodos = information.slice(indexOfFirstTodo, indexOfLastTodo);
      
      const renderTodos = currentTodos.map((info, index) => {
        return (<div key={index} className="result2">
                          <a href={info.trackViewUrl} target="_blank"><img className="image" src = {info.artworkUrl100} /></a>
                          <h3 className="name"> Album : {info.collectionName}</h3>
                          <div className="cover">
                            <div class="dropdown">
                              <button class="dropbtn">More Info</button>
                              <div class="dropdown-content">
                                <h3 className="drop">Release date: {(info["releaseDate"]).slice(0, 10)}</h3>
                                <h3 className="drop">Track count: {info.trackCount}</h3>
                              </div>
                            </div>
                          </div>
                        </div>)
      });
      console.log("look", renderTodos)
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(information.length / dataPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
      return (
              
              <button
              className="page-button"
                key={number}
                id={number}
                onClick={this.handleClick}
              >
          {number}
        </button>
      );
    });

    return (
            <div className="container">
              <div className="imagesMain">
              {
                (information.length > 0) ? <div className="result3">
              <h1 className="singer">{this.props.artist}</h1>
              <div className="result1">
                {renderTodos}
              </div>
              <div className="page-numbers">
                {renderPageNumbers}
              </div>
            </div> : <h1/>
          }
          </div>
          </div>
          )
    }
}
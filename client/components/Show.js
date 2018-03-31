import React, { Component } from 'react';

//Show component is for pagnation and displaying data
//There are two states, current page and data we want on one page
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
    
    //indexOfFirstTodo is index of first album
    //indexOfLastTodo is index of last album
    const indexOfLastTodo = currentPage * dataPerPage;
    const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
    const currentTodos = information.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    
    //pageNumbers is an array of all the pages
    for (let i = 1; i <= Math.ceil(information.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <div className="container">
          <div className="imagesMain">
            {
              (information.length > 0) ? <div className="result3">
                <h1 className="singer">{this.props.artist}</h1>
                <div className="result1">
                  {
                    currentTodos.map((info, index) => {
                      return (
                          <div key={index} className="result2">
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
                          </div>
                      )
                    })
                  }
                </div>
                <div className="page-numbers">
                  {
                    pageNumbers.map(number => {
                      return (
                          <button className="page-button" key={number} id={number} onClick={this.handleClick}>{number}</button>
                      )
                    })
                  }
                </div>
              </div> : <h1/>
            }
          </div>
      </div>
    )
  }
}
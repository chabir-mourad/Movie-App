import React from "react";

import "./App.css";
import { cardmovies } from "./Component/data";
import Cardmovie from "./Component/Cardmovie";

import Search from "./Component/Search";
import Add from "./Component/Add";
import Rate from "./Component/Rate"
class App extends React.Component {
  state = {
    cardmovies: cardmovies,
    nameFilter: "",
    rateFilter :1
  };

  addMovie = newMovie => {
    this.setState({
      cardmovies: [...this.state.cardmovies, newMovie]
    });
  };

  filterdMovie = x => {
    this.setState({
      nameFilter: x
    });
  };

  // serchedCard: [...this.state.cardemovies.filter(nameFilter=>this.title.toLowerCase().includes(nameFilter.toLowerCase()))

  //     ]
  // }
  filtredRating = x =>{
    this.setState({
     rateFilter:x
  })}
  
  render() {
    return (
      <div className="App">
        <Search filterdMovie={this.filterdMovie} 
           filtredRating={this.filtredRating} />
        <Cardmovie cards={this.state.cardmovies.filter((el)=>(el.title.toLowerCase().includes(this.state.nameFilter.toLowerCase().trim()) && el.rating>= this.state.rateFilter))} />
        <Add addMovie={this.addMovie} />
{/* <Rate filterdRating={this.filtredRating} /> */}
      </div>
    );
  }
}

export default App;

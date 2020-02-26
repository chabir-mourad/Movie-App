import React from "react";

import "./App.css";
import { cardmovies } from "./Component/data";
import Cardmovie from "./Component/Cardmovie";

import Search from "./Component/Search";
import Add from "./Component/Add";
class App extends React.Component {
  state = {
    cardmovies: cardmovies,
    nameFilter: "",
    rateFilter: 1,
    loading: false
  };

  addMovie = newMovie => {
    this.setState({
      cardmovies: [...this.state.cardmovies, newMovie]
    });
  };

  filterdMovie = x => {
    setTimeout(() => this.setState({ loading: false }), 1000);
    this.setState({
      nameFilter: x,
      loading:true
    });
  };

  // serchedCard: [...this.state.cardemovies.filter(nameFilter=>this.title.toLowerCase().includes(nameFilter.toLowerCase()))

  //     ]
  // }
  filtredRating = x => {
    setTimeout(() => this.setState({ loading: false }), 1000);
    this.setState({
      rateFilter: x,
      loading:true

    });
  };

  render() {
    return (
      <div className="App">
        <Search
          filterdMovie={this.filterdMovie}
          filtredRating={this.filtredRating}
        />
        <Cardmovie
          cards={this.state.cardmovies.filter(
            el =>
              el.title
                .toLowerCase()
                .includes(this.state.nameFilter.toLowerCase().trim()) &&
              el.rating >= this.state.rateFilter
          )}
          loading={this.state.loading
          }
        />
        <Add addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Rate from './Rate'
export default class Search extends Component {
  state = {
    Search: "",
    Minrating: 1
  };
  // updateSearch = e => {
  //   this.setState({
  //     Search: e.target.value
  //   });
  // };

  // onStarClick=(nextValue, prevValue, name)=> {
  //     this.setState({rating: nextValue});
  //   }

  render() {
    const { rating } = this.state;
    return (
      <div className="search">
        <div className="input_search">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="type movie name to search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.state.Search}
              onChange={(e) => this.setState({
                Search: e.target.value
              },
              () => this.props.filterdMovie(this.state.Search)
              )
        //  (       this.updateSearch.bind(this),
              }
            />
            <InputGroup.Append>
              <Button variant="dark">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div className="rating">
        <Rate  
        starIndex={x =>
            this.setState({ Minrating: x }, () =>
              this.props.filtredRating(this.state.Minrating)
            )
          }
          rating={this.state.Minrating}
          />
      </div>
        
      </div>
    );
  }
}

import React from "react";
import { Button, Form } from "react-bootstrap";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: "",
      image: "",
      rating: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value,

    });
  };


  render() {
    return (
      <div>
        <Button variant="outline-success" onClick={this.openModal}>
          Add A Movies
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h2>Add Movie</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter Name of Movie" onChange={this.handelChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Poster of Movie</Form.Label>
            <Form.Control name="image" type="text" placeholder="Enter The Image Movie"  onChange={this.handelChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Rating Of Movies</Form.Label>
            <Form.Control
              type="Numbers"
              name="rating"
              placeholder="Enter The Rate of Movie"
              onChange={this.handelChange}
            />
          </Form.Group>
          <Button variant="outline-primary" 
          onClick={()=> this.props.addMovie({
            id: Math.random(),
            ...this.state,
            ...this.setState({ modalIsOpen: false })
          })
          }
          >Submit</Button>
          <Button variant="outline-danger" 
          onClick={this.closeModal}>
            close
          </Button>
        </Modal>
      </div>
    );
  }
}
export default Add;

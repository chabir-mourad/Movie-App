import React from "react";
import { Card } from "react-bootstrap";
import Rate from "./Rate";
import WithLoader from './withLoader'

 function Cardmovie(props) {
  return (
      <div className="cards">
        {props.cards
        .map((el, key) => (
          // <div className="cards">
            <Card style={{ width: "18rem" }} key={key}>
              <Card.Img
                variant="top"
                src={el.image}
                className={el.isLarge ? "large" : ""}
              />
              <Card.Body>
                <hr />
                <Card.Title>{el.title}</Card.Title>
        <Rate rating={el.rating}/>
              </Card.Body>
            </Card>
          // </div>
        ))}
      </div>
  
  );
}
export default WithLoader(Cardmovie);
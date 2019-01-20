import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck, Col } from 'reactstrap';
// import Data from '../data/index.json';

const ItemCard = (props) => {
  return (
    <div>
        {/* <div>
        {Data.map((items, index) => {
            return <div>
                {items.name}
                {items.brand}
                {items.description}
                {items.shortDescription}
                {items.imageURL}
            </div>
        })}
        </div> */}
    <CardDeck className="deck flip-box">
      <Card className="cards flip-box-inner">
      <Col className="flip-box-front">
      <CardTitle className="title">  props.items.name  </CardTitle><br/>
        <CardImg top width="100%" src="https://placebeard.it/400x400" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Brand: Mertz - Welch</CardSubtitle>
          <CardText>Occaecati laborum voluptates. Voluptatem natus sun...</CardText>
          <CardText className="desc">Click to see full description</CardText>
          <div className="flip-box-back">
          Occaecati laborum voluptates. Voluptatem natus sun…tis reprehenderit exercitationem explicabo magni.
          </div>
        </CardBody>
        </Col>
      </Card>
    </CardDeck>
    </div>
  );
};

export default ItemCard;
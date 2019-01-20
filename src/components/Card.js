import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardDeck, Button, Col } from 'reactstrap';
// import data from '../index';

const ItemCard = (props) => {

    fetch('./items/index.json')
//   .then((res) => res.json())
    .then((data) => {
    console.log('data:', data);
  })

  return (
    <div>
    <CardDeck className="deck">
      <Card className="cards">
      <Col>
      <CardTitle className="title">{ props.items.name }</CardTitle><br/>
        <CardImg top width="100%" src="https://placebeard.it/400x400" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Brand: Mertz - Welch</CardSubtitle>
          <CardText>Occaecati laborum voluptates. Voluptatem natus sun...</CardText>
          <Button>See Full Description</Button>
        </CardBody>
        </Col>
      </Card>
    </CardDeck>
    </div>
  );
};

export default ItemCard;
import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./CardEx.module.css";
export default function CardEx({ image, name, carrer }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} className={styles.img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{carrer}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

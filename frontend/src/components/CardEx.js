import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./css/CardEx.module.css";
export default function CardEx({ image, name, carrer }) {
  return (
    <Card className="d-flex flex-row">
      <Card.Img
        variant="top"
        src={image}
        style={{ width: 200 }}
        className={styles.img}
      />
      <div className="w-100">
        <Card.Body className="p-0">
          <div className={styles.content}>{name}</div>
          <div className={styles.content}>{carrer}</div>
        </Card.Body>
      </div>
    </Card>
  );
}

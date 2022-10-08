import React from "react";
import { ProfileList } from "../helper/ProfileData";
import CardEx from "../components/CardEx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Cardgrouping() {
  return (
    <Row xs={2} md={4} className="g-4">
      {ProfileList.map((cardEx, key) => {
        return (
          <Col key={key}>
            <CardEx
              key={key}
              image={cardEx.image}
              name={cardEx.name}
              carrer={cardEx.carrer}
            />
          </Col>
        );
      })}
    </Row>
  );
}

import Carousel from "react-bootstrap/Carousel";
import styles from "./css/CarouselEx.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function CarouselEx() {
  return (
    <Carousel className="bg-warning">
      <Carousel.Item>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
          </Row>
        </Container>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row className="justify-content-md-center bg-warning h-20">
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
            <Col>
              <img
                className={`${styles.img} w-100`}
                src="/images/KakaoTalk_20220802_130234828_11.jpg"
                alt="First slide"
              />
              <h1>모승환</h1>
              <p>프론트엔드</p>
            </Col>
          </Row>
        </Container>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

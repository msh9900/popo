import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselEx.module.css";
export default function CarouselEx() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={`${styles.img} d-inline w-25`}
          src="/images/KakaoTalk_20220802_130234828_11.jpg"
          alt="First slide"
        />
        <img
          className={`${styles.img} d-inline w-25`}
          src="/images/KakaoTalk_20220802_130234828_12.jpg"
          alt="First slide"
        />
        <img
          className={`${styles.img} d-inline w-25`}
          src="/images/KakaoTalk_20220802_130234828_13.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className={`${styles.img} d-inline w-75`}
          src="/images/KakaoTalk_20220802_130234828_12.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.img} d-inline w-75`}
          src="/images/KakaoTalk_20220802_130234828_13.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${styles.img} d-inline w-75`}
          src="/images/KakaoTalk_20220802_130234828_13.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

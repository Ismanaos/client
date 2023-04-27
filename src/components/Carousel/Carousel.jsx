import Carousel from 'react-bootstrap/Carousel';

function CarouselSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-110"
          src="https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"
          alt="Card image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-110"
          src="https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"
          alt="Card image"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"
          alt="Card image"
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

export default CarouselSlide;
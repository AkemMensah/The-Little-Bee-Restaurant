import Carousel from 'react-bootstrap/Carousel';
import lovely_breakfast from "../images/lovely_breakfast.jpg";
import * as images from '../images/index.js';


function CarouselComp()
{
  return (
    <div className="carousel">
      {/* <img src={images.brunch} /> */}

      <Carousel className="body">
        <Carousel.Item className="item">
          {/* <img src={lovely_breakfast} text="First slide" /> */}
          <img src={images.breakfast} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.lunch} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.diner} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
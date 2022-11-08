import React from 'react';
import { Carousel } from 'react-bootstrap';


function ImageDocumentasi() {
    return (
        <div className='img-documentasi'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/asset/hero4.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Kampung Belang</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/asset/hero4.png"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Resepsi Pernikahan/Tunangan</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/asset/hero4.png"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Aula Serbaguna</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
       
      );
}

export default ImageDocumentasi;
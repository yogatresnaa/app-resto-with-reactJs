import React from 'react';
import { Carousel } from 'react-bootstrap';


function ImageDoc() {
    return (
        <div className='img-doc'>
        <Carousel>
          <Carousel.Item>
            <div className='eaa'>
                <div className='u'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                
                <div className="h">
                    <img src="/asset/hero2.jpg" alt="First slide"/>
                </div>
            </div>
        </Carousel.Item>


          <Carousel.Item>
            <div className='eaa'>
                <div className='u'>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
                </div>
            
            <div className="h">
            <img src="/asset/hero2.jpg" alt="First slide"/>
            </div>

          
            </div>
            
          </Carousel.Item>
          <Carousel.Item>
            <div className='eaa'>
                <div className='u'>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
                </div>
            
            <div className="h">
            <img src="/asset/hero2.jpg" alt="First slide"/>
            </div>

          
            </div>
            
          </Carousel.Item>
        </Carousel>
        </div>
       
      );
}

export default ImageDoc;
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Myslider.css'
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide1.jpg'

export default function Myslider() {
  return (
    <Carousel className="premium-carousel" controls indicators
      prevLabel={<span className="carousel-arrow-icon">❮</span>}
      nextLabel={<span className="carousel-arrow-icon">❯</span>}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="carousel-caption-custom">
          <div className="caption-content">
            <h1 className="slide-title">Premium Dark Bars</h1>
            <p className="slide-desc">Experience the richness of 90% cocoa.</p>
            <button className="btn-carousel">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="carousel-caption-custom">
          <div className="caption-content">
            <h1 className="slide-title">Creamy Milk Truffles</h1>
            <p className="slide-desc">Melts in your mouth instantly.</p>
            <button className="btn-carousel">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="carousel-caption-custom">
          <div className="caption-content">
            <h1 className="slide-title">Handcrafted Sweets</h1>
            <p className="slide-desc">Made with love and the finest ingredients.</p>
            <button className="btn-carousel">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
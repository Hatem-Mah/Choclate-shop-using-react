import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

export default function Products() {
  const products = [
    { id: 1, title: "Hazelnut Delight", price: 12.99, desc: "Crunchy hazelnuts coated in milk chocolate.", img: img1 },
    { id: 2, title: "Dark Cherry", price: 15.50, desc: "Intense dark chocolate with a cherry center.", img: img3 },
    { id: 3, title: "White Vanilla", price: 11.00, desc: "Smooth white chocolate with vanilla bean.", img: img2 },
    { id: 4, title: "Caramel Sea Salt", price: 13.99, desc: "Perfect balance of sweet and salty.", img: img4 },
    { id: 5, title: "Almond Cluster", price: 14.50, desc: "Roasted almonds in rich cocoa.", img: img5 },
    { id: 6, title: "Mint Truffle", price: 10.99, desc: "Refreshing mint filling inside.", img: img6 }
  ]

  return (
    <Container id="products" className="py-5">
      <h2 className="section-title">Our Collection</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6}>
            <ProductCard 
              title={product.title} 
              price={product.price} 
              desc={product.desc} 
              img={product.img} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './ProductCard.css'

export default function ProductCard(props) {
  return (
    <Card className="h-100 shadow-sm border-0 product-card">
      <div className="img-wrapper">
        <Card.Img variant="top" src={props.img} className="product-img" style={{ height: '220px', objectFit: 'cover' }} />
        <div className="price-badge">${props.price}</div>
      </div>
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="fw-bold product-title">{props.title}</Card.Title>
        <Card.Text className="product-desc">
          {props.desc}
        </Card.Text>
        <Button className="mt-auto btn-choco btn-add-cart">
          <span className="cart-icon">🛒</span> Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}
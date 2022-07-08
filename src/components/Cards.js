import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/action/action';


const Cards = () => {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  const send = (e) => {
    dispatch(ADD(e))
  }

  useEffect(() => {
    getProducts();
  }, []);  // eslint-disable-line

  const getProducts = async () => {
    let result = await fetch("http://localhost:4000/api/products");
    result = await result.json();
    setProducts(result.data);
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cards Projects </h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          products.map((element, i) => {
            return (
              <Card key={i} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>
                    Price:₹ {element.price}
                  </Card.Text>
                  <div className='button-div d-flex justify-content-center'>
                    <Button variant="primary " onClick={() => send(element)}>Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards;
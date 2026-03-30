"use client"
// import { useContext } from 'react';
import Link from 'next/link';
import type Product from '../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import { CartContext } from '../context/CartContextProvider';

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    let { id, title, price, image } = product
  
    return (
        <div className='col-md-6 my-3'>
            <Card style={{ width: '18rem' }}>
                <Link href={`products/${id}`}>
                    <Card.Img variant="top" src={image}/>
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Price: ${price}</small>
                    &nbsp;
                    <Button variant="primary" className="mt-2">
                    {/* // onClick={() => addCart({...product})} */}
                    Add to Cart</Button>
                </Card.Footer>
            </Card>

        </div>
    )
}

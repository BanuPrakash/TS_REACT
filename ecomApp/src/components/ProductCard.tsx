
import type Product from '../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  
    let { id, title, price, image } = product
    
    return (
        <div className='col-md-6 my-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Price: ${price}</small>
                    &nbsp;
                    <Button variant="primary" className="mt-2"
                    >Add to Cart</Button>
                </Card.Footer>
            </Card>

        </div>
    )
}

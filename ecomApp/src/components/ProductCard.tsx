
// import { useContext } from 'react';
import type Product from '../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
// import { CartContext } from '../context/CartContextProvider';

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    // let {addCart} = useContext(CartContext);
    let { id, title, price, image } = product
    let dispatch = useDispatch();
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
                    onClick={() => dispatch(addToCart({...product}))}
                    // onClick={() => addCart({...product})}
                    >Add to Cart</Button>
                </Card.Footer>
            </Card>

        </div>
    )
}

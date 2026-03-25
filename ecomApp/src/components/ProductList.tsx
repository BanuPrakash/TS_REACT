import { Container } from 'react-bootstrap'
import axios from 'axios';
import type Product from '../models/Product'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react';


export default function ProductList() {
  let [products, setProducts] = useState<Product[]>();

  // componentDidMount, called only once after first Render
  useEffect(() => {
     axios.get("https://fakestoreapi.com/products?limit=7")
    .then(response => setProducts(response.data));
  },[]);

  return (
    <Container>
      <div className='row'> 
        {products && products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />  
        ))}
      </div>
    </Container>
  )
}

// http://localhost:3000/products

// default is "use server" Server Side Component

import { Container } from 'react-bootstrap'
import type Product from '../../models/Product'
import ProductCard from '@/components/ProductCard'

export default async function ProductList() {
    // could be getting from database, API
  const res = await fetch("https://fakestoreapi.com/products?limit=7");
  const products:Product[] = await res.json();
  
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

import { Container } from 'react-bootstrap'
// import axios from 'axios';
import type Product from '../models/Product'
import ProductCard from './ProductCard'
import { useProductsQuery } from '../redux/api/productsApi'
// import { useEffect, useState } from 'react';


export default function ProductList() {
  // let [products, setProducts] = useState<Product[]>();

  // // componentDidMount, called only once after first Render
  // useEffect(() => {
  //    axios.get("https://fakestoreapi.com/products?limit=7")
  //   .then(response => setProducts(response.data));
  // },[]);

  // isLoading: when data is fetching for first time
  // isFetching: may be cached
  const {data: products, isLoading, isFetching, isSuccess, isError} = useProductsQuery();
  return (
    <Container>
      <div className='row'> 
        {isLoading && <h1>Loading ...</h1>}
        {isFetching && <h1>Fetching ....</h1>}
        {isError && <h1>Error: Something went wrong!!!</h1>}
        {products && products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />  
        ))}
      </div>
    </Container>
  )
}

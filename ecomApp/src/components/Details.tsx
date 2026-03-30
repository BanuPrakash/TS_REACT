
import { useParams } from 'react-router-dom'

export default function Details() {
    let {id} = useParams();
    // get product by ID
    // https://fake.../products/3
  return (
    <div>Details</div>
  )
}

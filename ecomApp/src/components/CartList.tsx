import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store"
import {Button, Container} from "react-bootstrap";
import { clearCart } from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  let {total, cartItems} = useAppSelector(state => state.cart);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    function doCheckout() {
        // Make API calls to backend for Saving Order 
        dispatch(clearCart());
        navigate("/")
    }
  return (
    <Container>
        <div>
            {JSON.stringify(cartItems)}
        </div>
        <div className="row">
            <div className="col-md-8">
                 &nbsp;
            </div>
            <div className="col-md-2">
              Total : {total}
             </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                 &nbsp;
            </div>
            <div className="col-md-2">
               <Button variant="success"
               onClick={doCheckout}
               >Checkout</Button>
             </div>
        </div>
        
    </Container>
  )
}

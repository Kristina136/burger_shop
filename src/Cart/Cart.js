import img from "./icon.png";
import CartItem from "./CartItem";
import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice } from "../redux/cartSlice"

const Cart =()=>{


    const cartItem = useSelector(getCartItems);
    const totalPrice= useSelector(getTotalPrice);
    return(
        <div>
           <img className="cart" src={img} alt="cart"/>
           { cartItem.map(cartItem=> <CartItem key={cartItem.id} cartItem={cartItem}/>)}
        <h3> Total: $ {totalPrice}</h3>
        
        </div>
    )
}
export default Cart
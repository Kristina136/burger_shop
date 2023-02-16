import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";
import data from "./../Dishes/data";
import img from "./img.png";

const CartItem =({cartItem})=>{

const dishes = data.find(item=>item.id===cartItem.dishId)
const dispatch =useDispatch()
    return(
        <div onClick={()=> dispatch(removeItemFromCart({cartItemId:cartItem.id}))} className="cartContainer">
             <p> {dishes.name} </p>
            <p> {cartItem.quantity} portions</p>
            <p> {dishes.price*cartItem.quantity} </p>
           <img className="imgCart" src={`./${dishes.img}.jpg`} alt="dish"/>
          
        </div>
    )
}
export default CartItem
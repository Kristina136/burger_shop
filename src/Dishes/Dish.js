import { useState } from "react"
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart } from "../redux/cartSlice";
import swal from 'sweetalert';


const Dish =({dish})=>{

    const [quantity, setQuantity]= useState(1);
    const dispatch= useDispatch();
    const add=()=>{
        dispatch(addItemToCart({dish, quantity}));
        swal("Item(s) is added!", "Go back to the store!", "success");
    }
    
    return(
        <div className="add">
            <img className="img" src={`./${dish.img}.jpg`} alt="burger"/>
      <p>{dish.name}</p>
      <p>$ {dish.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      <button onClick={add}>Add to cart</button>
     
        </div>
       
    )
}
export default Dish
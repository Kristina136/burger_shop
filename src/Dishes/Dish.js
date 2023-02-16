import { useState } from "react"
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart } from "../redux/cartSlice";


const Dish =({dish})=>{

    const [quantity, setQuantity]= useState(1);
    const dispatch= useDispatch()
    return(
        <div className="add">
            <img className="img" src={`./${dish.img}.jpg`} alt="burger"/>
      <p>{dish.name}</p>
      <p>$ {dish.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      <button onClick={()=>{dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
     
        </div>
       
    )
}
export default Dish
import { Trash } from "./Icons"

function CartItem({name, price}) {
  return (
    <div className="">
        <div className="">
            <div className="bg-green-400 w-8 h-8 rounded-full"></div>
        </div>

        <div className="">
            <div className="bg-yellow-400 w-10 h-10"></div>
            <div className="">
                <p>{name}</p>
                <p>{price}</p>
               <button><Trash /></button> 
            </div>
            
        </div>
    </div>
  )
}

export default CartItem
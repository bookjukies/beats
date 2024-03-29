import { Trash } from "./Icons"
import useGlobal from "../hooks/useGlobal"
import useCartStore from "../stores/cartStore"

function CartItem({name}) {
  const {data} = useGlobal()
  const removeItem = useCartStore((store) => store.removeItem)
  const beat = data.find(entry => entry.name === name)

  return (
    <div className="border-b py-4">
        <div className="grid grid-cols-12">
            {/* <div className="bg-green-400 w-8 h-8 rounded-full col-span-3"></div> */}
            <img className="col-span-3 rounded-full w-8" src={`/images/${beat.cover}`} alt="" />
            
            <div className="col-span-9">
              <p>{beat.producer}</p>
            </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
            {/* <div className="bg-yellow-400 w-10 h-10 col-span-3"></div> */}
            <img className="col-span-3 w-10 self-center" src={`/images/${beat.cover}`} alt="" />
                <div className="col-span-6">
                  <p>{beat.name}</p>
                  <p>plan</p>
                </div>

                <div className="col-span-3">
                  <p>R {beat.price}</p>
                  <button onClick={()=> removeItem(name)}><Trash /></button> 
                </div>        
        </div>
        <p>Read Terms</p>
    </div>
  )
}

export default CartItem
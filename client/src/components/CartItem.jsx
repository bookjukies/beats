import { Trash } from "./Icons";
import useCartStore from "../stores/cartStore";

function CartItem({ name, producer }) {
  const {removeItem, items }= useCartStore();
  const beat = items.find((entry) => entry.name === name);

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-2">
        {/* <div className="bg-yellow-400 w-10 h-10 col-span-3"></div> */}
        <img className="col-span-3 w-10 self-center" src={`/images/${beat.cover}`} alt="" />
        <div className="col-span-6">
          <p className="capitalize">{beat.name}</p>
          <p className="capitalize">{beat.plan}</p>
        </div>
        <div className="col-span-3 text-right">
          <p>R {beat.price}</p>
          <button className="px-2 py-1" onClick={() => removeItem(name)}><Trash /></button>
        </div>
      </div>
      <p>Read Terms</p>
    </div>
  );
}

export default CartItem;

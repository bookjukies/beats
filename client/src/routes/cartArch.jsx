import CartItem from "../components/CartItem";
import useCartStore from "../stores/cartStore";
import { Link } from "react-router-dom";
export default function Cart() {
  const cart = useCartStore((store) => store.items);

  console.log(cart);
  return (
    <div className="mt-24 p-4 bg-black text-white min-h-[90vh]">
      <h2 className="font-bold my-4 text-center text-xl">
        Cart ({cart.length})
      </h2>
      <div className="">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.name}
              name={item.name}
              price={item.price}
              producer={item.producer}
            />
          ))
        ) : (
          <p className="text-center font-bold">No items on cart</p>
        )}
      </div>
      <div className="py-12">
      {cart.length > 0 ? (
        <Link className="bg-sky-400 py-2 px-12 mt-12">Proceed To Checkout</Link>
      ) : null}
      </div>
    </div>
  );
}

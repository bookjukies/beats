import CartItem from "../components/CartItem";
import useCartStore from "../stores/cartStore";
import { Link } from "react-router-dom";

function groupItemsByProducer(cartItems) {
  const groupedObject = {};

  for (const item of cartItems) {
    const producer = item.producer;

    if (!groupedObject[producer]) {
      groupedObject[producer] = [];
    }

    groupedObject[producer].push(item);
  }

  return groupedObject;
}

export default function Cart() {
  const cart = useCartStore((store) => store.items);

  // Group cart items by producer
  const groupedItems = groupItemsByProducer(cart);

  // Calculate the total cart price
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-24 p-4 bg-black text-white min-h-[90vh] w-screen">
      <h2 className="font-bold my-4 text-center text-xl">
        Cart ({cart.length})
      </h2>
      <div className="">
        {Object.entries(groupedItems).map(([producer, items]) => {
          // Calculate the total price for this group
          const totalGroupPrice = items.reduce((total, item) => total + item.price, 0);

          return (
            <div className="border-b " key={producer}>
              <div className="grid grid-cols-12 py-4">
                <img className="col-span-3 rounded-full w-8" src={`/images/${items[0].cover}`} alt="" />
                <div className="col-span-9 grid grid-cols-9">
                  <h3 className="text-lg font-semibold col-span-6 capitalize">{producer}</h3>
                  <p className="col-span-3 text-right font-bold">R {totalGroupPrice}</p> {/* Display total price */}
                </div>
              </div>
              {items.map((item, index) => (
                <CartItem
                  key={index}
                  name={item.name}
                  price={item.price}
                  producer={item.producer}
                />
              ))}
            </div>
          );
        })}
      </div>
      {cart.length ? (
        <div className="text-center font-bold text-xl mt-4">
          Total Cart Price: R {totalCartPrice}
        </div>
      ) : (
        <p className="text-center font-bold text-xl mt-12">No Beats In Cart</p>
      )}
      <div className="mt-12 w-full grid">
        {cart.length > 0 ? (
          <Link to="/checkout" className="bg-sky-400 py-2 text-center  font-bold">Proceed To Checkout</Link>
        ) : null}
      </div>
    </div>
  );
}

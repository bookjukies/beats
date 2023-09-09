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

  console.log(cart)

  return (
    <div className="mt-24 p-4 bg-black text-white min-h-[90vh]">
      <h2 className="font-bold my-4 text-center text-xl">
        Cart ({cart.length})
      </h2>
      <div className="">
        {Object.entries(groupedItems).map(([producer, items]) => {
          // Calculate the total price for this group
          const totalGroupPrice = items.reduce((total, item) => total + item.price, 0);

          return (
            <div key={producer}>
              <div className="grid grid-cols-12">
                <img className="col-span-3 rounded-full w-8" src={`/images/${items[0].cover}`} alt="" />
                <div className="col-span-9 grid grid-cols-2">
                  <h3 className="text-lg font-semibold">{producer}</h3>
                  <p>R {totalGroupPrice}</p> {/* Display total price */}
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
      <div className="py-12">
        {cart.length > 0 ? (
          <Link className="bg-sky-400 py-2 px-12 mt-12">Proceed To Checkout</Link>
        ) : null}
      </div>
    </div>
  );
}

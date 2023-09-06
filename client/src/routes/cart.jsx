import CartItem from "../components/CartItem";
import useCartStore from "../stores/cartStore";
export default function Cart() {
  const cart = useCartStore((store) => store.items);

  return (
    <div className="mt-24 p-4 bg-black text-white min-h-[90vh]">
      <h2 className="font-bold my-4 text-center text-xl">
        Cart ({cart.length})
      </h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            price={item.price}
            title={item.title}
          />
        ))
      ) : (
        <p className="text-center font-bold">No items on cart</p>
      )}
    </div>
  );
}

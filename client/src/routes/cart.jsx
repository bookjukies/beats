import CartItem from "../components/CartItem"
import useCartStore from "../stores/cartStore"
export default function Cart() {
  const cart = useCartStore((store) => store.items)

  return (
    <div className="mt-24 p-4 bg-black text-white h-screen">
      <h2>Cart ({cart.length})</h2>
     {cart.length > 0 ? cart.map(item => <CartItem key={item.name} name={item.name} price={item.price} />) : <p>No items on cart</p>}
    </div>
  )
}

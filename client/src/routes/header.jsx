import { useState } from "react"
import { Burger, CartIcon, Cross } from "../components/Icons"
import { Link } from "react-router-dom"
export default function Header() {
    const [isMenu, setIsMenu] = useState(false)
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const name = "beats"
    
  return (
    <header className="flex w-full justify-between px-4 py-4 bg-black z-50 text-white fixed top-0">
        <nav className="flex w-1/2">
            <button onClick={()=> setIsMenu(!isMenu)}> {!isMenu? <Burger /> : <Cross />} </button> 
            <Link to='/'> {name} </Link>
        </nav>
        <nav className="flex w-1/2 justify-end">
            <Link to='/sign-up'> Sign up</Link>

            <Link to='/cart'> <CartIcon /> </Link>
        </nav>       
    </header>
  )
}

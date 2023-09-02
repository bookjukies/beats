import { useState } from "react"
import { Burger, CartIcon, Cross} from "./Icons"
import { Link } from "react-router-dom"
import useGlobal from "../hooks/useGlobal"
export default function Header() {
    const [isMenu, setIsMenu] = useState(false)
    const {isLoggedIn, setIsLoggedIn} = useGlobal();
    const name = "beats"
    
  return (
    <header className="flex w-full justify-between px-4 py-4 bg-black z-50 text-white fixed top-0">
        <nav className="flex w-1/2 gap-4">
            <button className="block" onClick={()=> setIsMenu(!isMenu)}> {!isMenu? <Burger /> : <Cross />} </button> 
            <Link to='/'> {name} </Link>
        </nav>
        <nav className="flex w-1/2 justify-end gap-4">
            {isLoggedIn? <Link to="/dashbord"> Dashbord </Link> : <Link to='/sign-up'> Sign up</Link>}

            <Link to='/cart'> <CartIcon /> </Link>
        </nav>       
    </header>
  )
}

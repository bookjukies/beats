import { useState } from "react"
import { Burger, CartIcon, Cross} from "./Icons"
import { Link } from "react-router-dom"
import useGlobal from "../hooks/useGlobal"
import useCartStore from "../stores/cartStore"
export default function Header() {
    const {isLoggedIn, setIsLoggedIn, isSidebarOpen, setIsSidebarOpen} = useGlobal();
    const items = useCartStore((store) => store.items)
    const numberOfItems = items?.length || 0
    const name = "beats"

    const toggleSideBar =()=>{
      if(isSidebarOpen){
        setIsSidebarOpen(false)
      }
    }
    
  return (
    <header className="flex w-full justify-between px-4 py-4 bg-black z-50 text-white fixed top-0" onClick={toggleSideBar}>
        <nav className="flex w-1/2 gap-4">
            <button className="block" onClick={()=> setIsSidebarOpen(!isSidebarOpen)}> {!isSidebarOpen? <Burger /> : <Cross />} </button> 
            <Link to='/'> {name} </Link>
        </nav>
        <nav className="flex w-1/2 justify-end gap-4">
            {isLoggedIn? <Link to="/dashbord"> Dashbord </Link> : <Link to='/sign-up'> Sign up</Link>}

            <Link className="relative" to='/cart'> <CartIcon /> <span className="absolute -top-4 -right-2">{numberOfItems}</span></Link>
        </nav>       
    </header>
  )
}

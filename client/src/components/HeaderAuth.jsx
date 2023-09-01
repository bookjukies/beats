import { Link } from "react-router-dom"

function HeaderAuth() {
  return (
    <header className="grid w-screen py-2 bg-black text-white sticky top-0">
        <Link to="/" className="justify justify-self-center text-2xl font-bold">Beats</Link>
    </header>
  )
}

export default HeaderAuth
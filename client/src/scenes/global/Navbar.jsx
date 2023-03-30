import {
  ArrowDownIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIsCartOpen, setIsMenuOpen } from "../../state"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <nav className="fixed top-0 left-0 w-full z-10 shadow-md p-0 h-16 bg-gradient-to-b to-cyan-400 from-blue-400 opacity-90">
      <div className="flex items-center justify-between mx-auto px-32 my-5">
        <div
          className="text-3xl cursor-pointer font-bold"
          onClick={() => navigate("/")}
        >
          E-Commerce
        </div>
        <div className="flex space-x-4">
          <ShoppingCartIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => dispatch(setIsCartOpen())}
          />
          <Bars3Icon
            className="w-6 h-6 cursor-pointer"
            onClick={() => dispatch(setIsMenuOpen())}
          />
          <ArrowDownIcon
            onClick={() => navigate("/login")}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

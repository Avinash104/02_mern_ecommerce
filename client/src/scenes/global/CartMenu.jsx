import { ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartTicket from "../../components/CartTicket"
import {
  selectCart,
  selectCartSelection,
  selectTotalPrice,
  setIsCartOpen,
} from "../../state"

const CartMenu = () => {
  const dispatch = useDispatch()
  const toggleCart = useSelector(selectCartSelection)
  const cart = useSelector(selectCart)
  const navigate = useNavigate()
  const cartTotalPrice = useSelector(selectTotalPrice)

  return (
    <div>
      <div
        className={`${
          !toggleCart && "hidden "
        } fixed top-16 left-0 w-full h-full flex justify-end`}
      >
        <div className="bg-slate-50 absolute top-0 left-0 w-full h-full z-99 opacity-40 " />

        <div className="flex flex-col text-right p-6 absolute top-0 right-0 min-w-[180px] w-[300px] md:w-[450px] h-screen bg-orange-300 opacity-95 shadow-lg origin-right z-10 transition-transform ease-out duration-300 delay-150 touch-none overflow-y-auto">
          {toggleCart && (
            <div className="self-end cursor-pointer mb-5">
              {" "}
              <XMarkIcon
                className="h-8 w-8 border-green-600 border-2 p-1 rounded-lg shadow-lg hover:scale-125 transition-transform duration-200 delay-200"
                onClick={() => dispatch(setIsCartOpen())}
              />
            </div>
          )}
          <h2 className="uppercase text-left text-base ml-2 mb-2">
            Shopping Cart
          </h2>
          <div>
            <ul className="space-y-1">
              {cart.length === 0 ? (
                <div className="w-60 mx-auto flex flex-col items-center">
                  <ExclamationCircleIcon className="h-24 w-24" />
                  <h2 className="text-xl my-5"> No Products in your cart.</h2>
                  <button
                    onClick={() => dispatch(setIsCartOpen())}
                    className="bg-purple-200 p-2 rounded-lg hover:scale-105"
                  >
                    Return to shop
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <li key={item.id} className="text-2xl w-full p-2 rounded-lg">
                    <CartTicket item={item} />
                  </li>
                ))
              )}
            </ul>
          </div>

          {cart.length !== 0 && (
            <footer>
              <div>Total payment: {cartTotalPrice}</div>
              <button
                onClick={() => {
                  dispatch(setIsCartOpen())
                  navigate("/checkout")
                }}
              >
                Checkout
              </button>
            </footer>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartMenu

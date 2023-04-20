import { XMarkIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  selectCart,
} from "../state/index"

const CartTicket = ({ item }) => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)

  const getItemCount = (cartItems) => {
    const itemInCart = cartItems.filter((obj) => obj.id === item.id)
    if (itemInCart.length > 0) {
      return itemInCart[0].count
    } else {
      return 0
    }
  }
  const itemCount = getItemCount(cart)

  return (
    <div>
      {/* Cart Heading */}

      <div className="grid grid-cols-3 gap-2 mt-3 border-lime-400 border-2 p-2 rounded-lg">
        <img
          src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
          alt="Item Cart Pic"
          className="h-40 rounded-lg"
        />
        <section className="col-span-2 text-left grid grid-rows-3">
          <div className="flex items-baseline justify-between">
            <h3 className="capitalize text-lg font-semibold">
              {item.attributes.name}
            </h3>
            <XMarkIcon
              className="h-4 w-4 cursor-pointer hover:scale-115 transition"
              onClick={() => dispatch(removeFromCart(item))}
            />
          </div>
          <p className="text-sm">{item.attributes.shortDescription}</p>
          <div className="flex justify-between items-center my-3">
            <div className="text-base">Price: {item.attributes.price}</div>
            <article
              className={`${
                itemCount > 0 ? "block" : "hidden"
              } bg-rose-200 flex items-center px-3 space-x-2 rounded-lg`}
            >
              <button onClick={() => dispatch(decreaseCount(item))}>-</button>
              <p className="text-base">{itemCount}</p>
              <button onClick={() => dispatch(increaseCount(item))}>+</button>
            </article>
            <summary>${itemCount * item.attributes.price}</summary>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CartTicket

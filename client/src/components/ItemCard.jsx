import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart, decreaseCount, increaseCount, selectCart } from "../state"

const ItemCard = ({ item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector(selectCart)

  const [addToCartBtnDisabled, setAddToCartBtnDisabled] = useState(false)

  const getItemCount = (cartItems) => {
    const itemInCart = cartItems.filter((obj) => obj.id === item.id)
    if (itemInCart.length > 0) {
      return itemInCart[0].count
    } else {
      return 0
    }
  }
  const itemCount = getItemCount(cart)
  const addToCartHandler = () => {
    dispatch(addToCart({ item: { ...item, count: 1 } }))
    setAddToCartBtnDisabled(true)
  }

  return (
    <div
      className="flex flex-col justify-center items-start p-2 relative cursor-pointer"
      onClick={() => navigate(`/item/${item.id}`)}
    >
      <img
        src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
        alt=""
        className="h-80 w-56 hover:scale-95 cursor-pointer ease-in transition-transform duration-200"
      />
      <div className="absolute flex justify-between w-full bottom-1/4 z-4 px-6">
        <div>
          <article
            className={`${
              itemCount > 0 ? "block" : "hidden"
            } bg-rose-200 flex px-3 space-x-2 rounded-lg`}
          >
            <button onClick={() => dispatch(decreaseCount(item))}>-</button>
            <p>{itemCount}</p>
            <button onClick={() => dispatch(increaseCount(item))}>+</button>
          </article>
        </div>
        {/* tried to implement a functionality where multiple 'addToCart' clicks is going to increase the count of that item in the redux state. However it proved to be beyond my paygrade. Hence, leaving its implementation to the future me.  */}
        <button
          className="bg-gray-700 text-sm px-2 py-1 rounded-md"
          onClick={addToCartHandler}
          disabled={addToCartBtnDisabled}
        >
          Add to Cart
        </button>
      </div>
      <h4>{item.attributes.name} </h4>
      <h4>{item.attributes.category}</h4>
      <h4 className="font-bold">${item.attributes.price}</h4>
    </div>
  )
}

export default ItemCard

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ItemCard from "../../components/ItemCard"
import { selectAllItems, setItems } from "../../state"

const ShoppingList = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectAllItems)

  const [selectCategory, setSelectCategory] = useState("newArrivals")

  const fetchItems = async () => {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    )

    const itemsJson = await items.json()
    dispatch(setItems(itemsJson.data))
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div>
      <div className="flex w-fit mx-auto space-x-4 my-2">
        <button
          onClick={() => setSelectCategory("newArrivals")}
          className={`${
            selectCategory === "newArrivals"
              ? "border-b-[3px] border-y-orange-600"
              : ""
          } text-lg cursor-pointer py-6 hover:scale-105 transition-transform duration-150`}
        >
          {" "}
          New Arrivals{" "}
        </button>
        <button
          onClick={() => setSelectCategory("bestSellers")}
          className={`${
            selectCategory === "bestSellers"
              ? "border-b-[3px] border-y-orange-600"
              : ""
          } text-lg cursor-pointer py-6 hover:scale-105 transition-transform duration-150`}
        >
          {" "}
          Best Sellers{" "}
        </button>
        <button
          onClick={() => setSelectCategory("topRated")}
          className={`${
            selectCategory === "topRated"
              ? "border-b-[3px] border-y-orange-600"
              : ""
          } text-lg cursor-pointer py-6 hover:scale-105 transition-transform duration-150`}
        >
          {" "}
          Top Rated{" "}
        </button>
      </div>
      <ol className="grid grid-cols-3 gap-5 w-fit mx-auto">
        {items
          .filter((item) => item.attributes.category === selectCategory)
          .map((item, index) => (
            <li key={index} className="border-2 rounded-md">
              <ItemCard item={item} />
            </li>
          ))}
      </ol>
    </div>
  )
}

export default ShoppingList

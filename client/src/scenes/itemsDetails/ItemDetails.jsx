import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetails = () => {
  const { itemId } = useParams()

  const [item, setItem] = useState({})
  const [items, setItems] = useState([])

  const getItem = async () => {
    const product = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    )
    const productJson = await product.json()
    // setItem((prev) => ({ ...prev, ...productJson.data }))
    setItem(productJson.data)
  }

  const getItems = async () => {
    const products = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    )
    const productsJson = await products.json()
    setItems(productsJson.data)
  }

  useEffect(() => {
    getItem()
    getItems()
  }, [itemId])

  return (
    <div className="flex mt-16">
      <section>
        {/* img  */}
        <img
          src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.large?.url}`}
          alt=""
        />
      </section>
      <section>
        <h1>{item.id}</h1>
        <h1>{items[1]?.id}</h1>
        {/* <h3>
          {items.map((prod) => (
            <span key={prod.id}>{prod.id}</span>
          ))}
        </h3> */}
      </section>
    </div>
  )
}

export default ItemDetails

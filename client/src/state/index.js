import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isCartOpen: false,
  isMenuOpen: false,
  cart: [],
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    addToCart: (state, action) => {
      //Below code was used to do dual add to cart functionality. Commenting it out until I implement it.
      // const itemFound = state.cart.find(
      //   (item) => item.id === action.payload.item.id
      // )
      // if (typeof itemFound !== "undefined") {
      //   state.cart = [...state.cart, action.payload.item.count + 1]
      // } else {
      //   state.cart = [...state.cart, action.payload.item]
      //   console.log("Cart item list: ", state.cart)
      // }

      state.cart = [...state.cart, action.payload.item]
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++
        }
        return item
      })
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--
        }
        return item
      })
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
})

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  setIsMenuOpen,
} = cartSlice.actions

export const selectCartSelection = (state) => state.cart.isCartOpen
export const selectMenuSelection = (state) => state.cart.isMenuOpen
export const selectAllItems = (state) => state.cart.items
export const selectCart = (state) => state.cart.cart

export default cartSlice.reducer

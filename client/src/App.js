import { BrowserRouter, Route, Routes } from "react-router-dom"
import Checkout from "./scenes/checkout/Checkout"
import Confirmation from "./scenes/checkout/Confirmation"
import CartMenu from "./scenes/global/CartMenu"
import Footer from "./scenes/global/Footer"
import NavSideMenu from "./scenes/global/NavSideMenu"
import Navbar from "./scenes/global/Navbar"
import Home from "./scenes/home/Home"
import ItemDetails from "./scenes/itemsDetails/ItemDetails"
import LoginScreen from "./scenes/login/LoginScreen"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
        <NavSideMenu />
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

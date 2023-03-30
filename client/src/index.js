import { GoogleOAuthProvider } from "@react-oauth/google"
import { configureStore } from "@reduxjs/toolkit"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import App from "./App"
import "./index.css"
import cartReducer from "./state"

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [thunk],
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <GoogleOAuthProvider clientId="641902247934-q47are2ebeh4akvlba3i89l8t2b5f33m.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
)

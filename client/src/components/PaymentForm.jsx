import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useRef } from "react"
import { selectTotalPrice } from "../state/index"

const PaymentForm = () => {
  const formRefs = useRef({})
  const amount = selectTotalPrice()
  const stripe = useStripe()
  const elements = useElements()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const name = formRefs.current.name.value
    const email = formRefs.current.email.value

    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      })

      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
          amount: amount,
        }),
      })

      if (!response.ok) return alert("Payment unsuccessful!")
      const data = await response.json()
      const confirm = await stripe.confirmCardPayment(data.clientSecret)

      if (confirm.error) return alert("Payment unsuccessful!")
      alert("Payment Successful! Subscription active.")
    } catch (error) {
      console.log(error)
      alert("Payment Failed! " + error)
    }

    formRefs.current.name.value = ""
    formRefs.current.email.value = ""
  }

  return (
    <div>
      <label htmlFor="">
        Name:
        <input
          type="text"
          ref={(element) => (formRefs.current.name = element)}
        />
      </label>
      <label htmlFor="">
        Email:
        <input
          type="text"
          ref={(element) => (formRefs.current.email = element)}
        />
      </label>
      <button onClick={onSubmitHandler}> Submit </button>
    </div>
  )
}

export default PaymentForm

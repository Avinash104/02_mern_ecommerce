import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "../../components/PaymentForm"

const publishableKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
const stripePromise = loadStripe(publishableKey)

const Checkout = () => {
  return (
    <div className="mt-16">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  )
}

export default Checkout

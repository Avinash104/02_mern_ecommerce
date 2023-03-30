import { GoogleLogin } from "@react-oauth/google"

const LoginScreen = () => {
  const responseMessage = (response) => {
    console.log(response)
  }
  const errorMessage = (error) => {
    console.log(error)
  }
  return (
    <div className="w-96 mx-auto h-12 my-40">
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}

export default LoginScreen

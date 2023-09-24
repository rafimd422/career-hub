import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Home from "../Home/Home"

const Root = () => {
  return (
<>
<Home></Home>
<Outlet />

<Footer></Footer>
</>
  )
}

export default Root

import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../Header/Header"

const Root = () => {
  return (
<>
<Header />
<Outlet />
<Footer></Footer>
</>
  )
}

export default Root

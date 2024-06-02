import Header from "../components/Header"
import Footer from "../components/Footer"
import "../App.css"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
     <Header/>
        <Outlet/>
     <Footer/>
    </>
  )
}

export default App
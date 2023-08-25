import Home from "../../views/Home"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Home />
            </div>
            <Footer/>
        </>
    )
}

export default Main
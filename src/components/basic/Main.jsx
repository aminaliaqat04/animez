import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { Outlet } from "react-router";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer/>
        </>
    )
}

export default Main
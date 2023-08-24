import Home from "../../views/Home"
import Navbar from "../common/Navbar"

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Home />
            </div>
        </>
    )
}

export default Main
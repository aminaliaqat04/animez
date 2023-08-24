import { Routes, Route } from "react-router-dom"
import Main from '../components/basic/Main'
import Home from '../views/Home'
import About from "../views/About"
import Movies from "../views/Movies"
import Contact from "../views/Contact"

const Router = () => {
    return (
        <Routes>
            <Route element={ <Main /> }>
                <Route path="/" element={ <Home /> } />
                <Route path="/movies" element={ <Movies /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Route>
        </Routes>
    )
}

export default Router
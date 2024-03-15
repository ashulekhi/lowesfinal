import {BrowserRouter,Routes , Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Navbar from "./Navbar"
import Pagenotfound from "./Pagenotfound"
import AddMobile from "./Addmobile"
import Mobiledetails from "./Mobiledetails"
import Search from "./Search"
import { useState } from "react"
function MyRouter(){
    var [isloggedin,setIsloggedin] = useState(false)
    function loginDone(){
        setIsloggedin(true)
    }
    return (
        <div>
            <BrowserRouter>
            <Navbar isloggedin={isloggedin} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login loginDone={loginDone} />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/details/:mobileid" element={<Mobiledetails />}></Route>
                <Route path="/*" element={<Pagenotfound />}></Route>
                <Route path="/addmobile" element={<AddMobile />}></Route>
            </Routes>
            </BrowserRouter>
        </div>   
         )
}

export default MyRouter


import "./main.css"
import Homapage from "./homepage";
import Bookingpage from "./booking";
import { Route,Routes } from "react-router-dom";

function Main(){
    return(
        <main>
            <Routes>
                <Route path="/" element={<Homapage />}></Route>
                <Route path="/booking" element={<Bookingpage />}></Route>
            </Routes>
        </main>
    )
}

export default Main;
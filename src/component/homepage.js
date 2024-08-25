import "./main.css"
import Special from "./specials";
import Testimonial from "./testimonial";
import About from "./about";
import restaurantFood from "../assets/img/restauranfood.jpg"
import { useEffect } from "react";

export default function Homapage(props){

    useEffect(() => {
        console.log(props.isConfirm)
    })

    return(
        <>
        <section id="hero-section">
            <div id="hero-section-content" className="container">
                <div id="promo-content">
                    <h1 className="text-secondary">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                    </p>
                    <br></br>
                    <input type="button" value="Reserve a table" className="btn btn-secondary"/>
                </div>
                <div id="main-img">
                    <div  id="restaurentfoodimg">
                    <img src={restaurantFood}  alt="restaurant food image"/>
                    </div>
                </div>
            </div>
        </section>
        <Special/>
        <Testimonial/>
        <About/>
        </>
    )
}
import "./main.css"
import restaurantFood from "../assets/img/restauranfood.jpg"

export default function Homapage(){
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
                    <input type="button" value="Reserve a table" className="btn btn-secondary"/>
                </div>
                <div id="main-img">
                    <div  id="restaurentfoodimg">
                    <img src={restaurantFood}  alt="restaurant food image"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="highlight-section">
        <div id="highlight-section-content" className="container">
            <div id="hilight-header">
                <h2>This weeks specials!</h2>
                <input type="button" value="Online menu" className="btn btn-secondary" />
            </div>
        </div>
        </section>
        </>
    )
}
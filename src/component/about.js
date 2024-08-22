import "./main.css"
import img1 from "../assets/img/Mario and Adrian A.jpg"
import img2 from "../assets/img/Mario and Adrian b.jpg"

export default function About(){
    return(
        <section className="about_section">
            <div id="about_content" className="container">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
            </p>
        </div>
        <div id="about_img">
            <div  id="restaurentfoodimg1" className="about_img">
                <img src={img2} alt="Mario and Adrian" height="100%" />
            </div>
            <div  id="restaurentfoodimg2" className="about_img">
            <img src={img1} alt="Mario and Adrian" height="100%" />
            </div>
            </div>
        </div>
        </section>
    )
}
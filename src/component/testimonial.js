import "./main.css"
import image from "../assets/img/images.png"
export default function Testimonial(){
    return(
        <section id="testimonial_section">
            <div id="testimonial_content" className="container">
            <section>
            <header>
                <h2>Testimonial</h2>
            </header>
            <section id="testimonial">
                <article className="review_card">
                    <section className="review_profile">
                        <div className="review_image">
                            <img src={image} alt="profile image" width="100%"/>
                        </div>
                    <section className="review_header">
                    <h3>Amit kumar</h3>
                        <div className="review_star">
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined">star</span>
                        </div>
                    </section>
                    </section>
                    <section className="review">
                        <p>
                            Good services and food.
                        </p>
                    </section>
                </article>
                <article className="review_card">
                    <section className="review_profile">
                        <div className="review_image">
                            <img src={image} alt="profile image" width="100%"/>
                        </div>
                    <section className="review_header">
                    <h3>Amit kumar</h3>
                        <div className="review_star">
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined">star</span>
                        </div>
                    </section>
                    </section>
                    <section className="review">
                        <p>
                            Good services and food.
                        </p>
                    </section>
                </article>
                <article className="review_card">
                    <section className="review_profile">
                        <div className="review_image">
                            <img src={image} alt="profile image" width="100%"/>
                        </div>
                    <section className="review_header">
                    <h3>Amit kumar</h3>
                        <div className="review_star">
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        </div>
                    </section>
                    </section>
                    <section className="review">
                        <p>
                            Good services and food.
                        </p>
                    </section>
                </article>
                <article className="review_card">
                    <section className="review_profile">
                        <div className="review_image">
                            <img src={image} alt="profile image" width="100%"/>
                        </div>
                    <section className="review_header">
                    <h3>Amit kumar</h3>
                        <div className="review_star">
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined text-secondary">star</span>
                        <span className="material-symbols-outlined">star</span>
                        <span className="material-symbols-outlined">star</span>
                        </div>
                    </section>
                    </section>
                    <section className="review">
                        <p>
                            Good services and food.
                        </p>
                    </section>
                </article>
                
            </section>
            </section>
            </div>
        </section>
    )
}
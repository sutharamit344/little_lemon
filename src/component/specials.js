import "./main.css"
import salad from "../assets/img/greek salad.jpg";
import brunchetta from "../assets/img/bruchetta.svg";
import desert from "../assets/img/lemon dessert.jpeg";
export default function Special(){
    return(
        <>
        <section id="highlight-section">
        <div id="highlight-section-content" className="container">
            <header id="highlight-header">
                <h2>This weeks specials!</h2>
                <input type="button" value="View all dishes" className="btn btn-secondary" />
            </header>
            <section id="highlight_content">
                <article className="highlight_card">
                    <section className="card_image">
                        <img src={salad} alt="" />
                    </section>
                    <section className="card_content">
                        <section className="card_header">
                        <h3 className="card_title">Greek salad</h3>
                        <span className="card_price"><h3>$12.99</h3></span>
                        </section>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tt ever since the 150
                        </p>
                        <footer className="card_footer">
                            <h4>Order a delivery</h4>
                            <i></i>
                        </footer>
                    </section>
                </article>
                
                <article className="highlight_card">
                    <section className="card_image">
                        <img src={brunchetta} alt="" />
                    </section>
                    <section className="card_content">
                        <section className="card_header">
                        <h3 className="card_title">Greek salad</h3>
                        <span className="card_price"><h3>$12.99</h3></span>
                        </section>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tt ever since the 150
                        </p>
                        <footer className="card_footer">
                            <h4>Order a delivery</h4>
                            <i></i>
                        </footer>
                    </section>
                </article>
                
                <article className="highlight_card">
                    <section className="card_image">
                    <img src={desert} alt="" />
                    </section>
                    <section className="card_content">
                        <section className="card_header">
                        <h3 className="card_title">Greek salad</h3>
                        <span className="card_price"><h3>$12.99</h3></span>
                        </section>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been tt ever since the 150
                        </p>
                        <footer className="card_footer">
                            <h4>Order a delivery</h4>
                            <i></i>
                        </footer>
                    </section>
                </article>
            </section>
        </div>
        </section>
        </>
    )
}
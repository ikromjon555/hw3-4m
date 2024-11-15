import './brands.css'
import react from '../../../img/Rectangle 2.jpg'

export const Brands = () => {
    return (
        <div>
            <img id='img' src={react} alt="" />
            <div>
                <h1 id='name'>FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE</h1>
                <p id='description' >Browse through our diverse range of meticulously crafted garments, designed 
                to bring out your individuality and cater to your sense of style.</p>
                <button id='button' >Shop Now</button>
                <div id='products' >
                    <div>
                        <h1 id='number' >200+</h1>
                        <p id='desc' >International Brands</p>
                    </div>
                    <div>
                        <h1 id='number' >2,000+</h1>
                        <p id='desc' >High-Quality Products</p>
                    </div>
                    <div>
                        <h1 id='number' >30,000+</h1>
                        <p id='desc' >Happy Customers</p>
                    </div>
                </div>
            </div>
            <div id='brands' >
                <div id='names' >
                    <h1>VERSACE </h1>
                    <h1> ZARA </h1>
                    <h1> GUCCI </h1>
                    <h1> PRADA </h1>
                    <h1>Calvin Klein</h1>
                </div>
            </div>
        </div>
    );
}
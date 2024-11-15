import './TopSelling'
import './TopSelling.css'
import react from './../../../img/image 7 (1).jpg'
import react2 from './../../../img/Frame 38 (1).jpg'
import react3 from './../../../img/Frame 34 (1).jpg'
import react4 from './../../../img/Frame 33 (1).jpg'

export const TopSelling = () => {
    return (
        <div>
            <h1 id='title2'>TopSelling</h1>
            <div>
                <div>
                    <img id='top-selling-1' src={react} alt="" />
                    <p id='top-selling-title-1' >VERTICAL STRIPED SHIRT</p>
                    <p id='top-selling-price-1'>$212</p>
                </div>
                <div>
                    <img id='top-selling-2' src={react2} alt="" />
                    <p id='top-selling-title-2' >COURAGE GRAPHIC T-SHIRT</p>
                    <p id='top-selling-price-2'>$145</p>
                </div>
                <div>
                    <img id='top-selling-3' src={react3} alt="" />
                    <p id='top-selling-title-3'>LOOSE FIT BERMUDA SHORTS</p>
                    <p id='top-selling-price-3'>$80</p>
                </div>
                <div>
                    <img id='top-selling-4' src={react4} alt="" />
                    <p id='top-selling-title-4'>FADED SKINNY JEANS</p>
                    <p id='top-selling-price-4'>$210</p>
                </div>
            </div>
        </div>
    );
}


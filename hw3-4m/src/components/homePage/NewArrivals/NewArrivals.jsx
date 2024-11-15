import './NewArrivals.css'
import react1 from './../../../img/image 7.jpg'
import react2 from './../../../img/Frame 33.jpg'
import react3 from './../../../img/Frame 34.jpg'
import react4 from './../../../img/Frame 38.jpg'

export const NewArrivals = () => {
    return (
        <div>
            <h1 id='title' >NewArrivals</h1>
            <div>
                <div>
                    <img id='t-shirt-1' src={react1} alt="" />
                    <p id='description1' >T-SHIRT WITH TAPE DETAILS</p>
                    <h1 id='price1' >$120</h1>
                </div>
                <div>
                    <img id='t-shirt-2' src={react2} alt="" />
                    <p id='description2' >SKINNY FIT JEANS</p>
                    <h1 id='price2' >$240</h1>
                </div>
                <div>
                    <img id='t-shirt-3' src={react3} alt="" />
                    <p id='description3' >CHECKERED SHIRT</p>
                    <h1 id='price3' >$180</h1>
                </div>
                <div>
                    <img id='t-shirt-4' src={react4} alt="" />
                    <p id='description4' >SLEEVE STRIPED T-SHIRT</p>
                    <h1 id='price4' >$130</h1>
                </div>
            </div>
            <button id='btn'>View All</button>
        </div>
        
    );
}


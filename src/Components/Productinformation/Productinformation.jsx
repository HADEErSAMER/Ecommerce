import "./Productinformation.css"
import minus from "../../assets/icon-minus.svg"
import plus from "../../assets/icon-plus.svg"
import cart from "../../assets/icon-cart.svg"
function Productinformation(){
return(
    <div id="Productinformationdiv">
        <label className="campanylabel"> Sneaker Company</label>
        <p id="bolder">Fall Limited Edition Sneakers</p>
        <p id="p2" className="campanylabel">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="div125">
<label id="label125">$125.00</label>
<button id="btn50">50%</button>
</div>
<label id="label250"> $250.00</label>
<div className="div125">
<button id="plusminusbtns">
    <img className="plusminusimg" src={minus}></img>
    0
    <img className="plusminusimg" src={plus}></img>

</button>

<button id="cartbtn">
<img   className="caart" src={cart}></img>
Add to cart
</button>
</div>
    </div>
)
}

export default Productinformation
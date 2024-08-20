import { Link, Outlet } from "react-router-dom"
import "./Layoutpage.css"
import card from "../../assets/icon-cart.svg"
import avatar from "../../assets/image-avatar.png"

function Layoutpage (){
  
return(
    <>
    <nav>
      <div id="navdiv">
      
        <ul>
        <li>
            <Link to="/Homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/Collectionpage">Collection</Link>
          </li>
          <li>
            <Link to="/Menpage">Men</Link>
          </li>
          <li>
            <Link to="/Womenpage">Women</Link>
          </li>
          <li>
            <Link to="/Aboutpage">About</Link>
          </li>
         
          
        </ul>
        

        
        </div>
        <hr color=" beige" id="hr"></hr>
      </nav>

     
<Outlet></Outlet>

    </>
)
}
export default Layoutpage
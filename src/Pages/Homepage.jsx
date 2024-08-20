
import "./Homepage.css"

import { Link } from "react-router-dom"
function Homepage(){
    const arrayofproduct=[
        {id:1,name:"product1"},
        {id:2,name:"product2"},
        {id:3,name:"product3"},
        {id:4,name:"product4"},
        {id:5,name:"product5"},
        {id:6,name:"product6"},
        {id:7,name:"product7"},
        {id:8,name:"product8"},
    
      ]
    return(
        <div id="productwrapper">
      {arrayofproduct.map((product)=>{
        return(
          <Link to={`/Details/${product.id}`}>
           <div className="productbox">
            <h1>{product.name}</h1>
          </div>
          </Link>
         
        )
      })}
      </div>
    )
}
export default Homepage
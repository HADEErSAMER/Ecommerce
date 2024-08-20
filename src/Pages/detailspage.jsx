import { useParams } from "react-router-dom"

function detailspage(){
    const {id}=useParams()
    
 return<h1>more details about product {id}</h1>
}
export default detailspage
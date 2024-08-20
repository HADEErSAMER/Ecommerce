import "./Product.css"
import productimg1 from "../../assets/image-product-1-thumbnail.jpg"
import productimg2 from "../../assets/image-product-2-thumbnail.jpg"
import productimg3 from "../../assets/image-product-3-thumbnail.jpg"
import productimg4 from "../../assets/image-product-4-thumbnail.jpg"
import { useState } from "react"



function Product(){

    const images = [
        { id: 1, src: "src/assets/image-product-1-thumbnail.jpg"  },
        { id: 2, src: "src/assets/image-product-2-thumbnail.jpg" },
        { id: 3, src: "src/assets/image-product-3-thumbnail.jpg" },
        { id: 4, src: "src/assets/image-product-4-thumbnail.jpg" },
      ];
    
      
      const [mainImage, setMainImage] = useState(images[0]);
    
      
      const handlOnClick = (image) => {
        setMainImage(image);
      };
    
      return (
        <div id="productdiv">
         
          
            <img id="bigimg" src={mainImage.src}  />
         
    
         
          <div id="miniimage">
          {images.map((image) => (
          <img 
            key={image.id}
            src={image.src}
           
            onClick={() => handlOnClick(image)}
            className="miniimg"
          />
        ))}
      </div>
    </div>
  );
}












































































export default Product
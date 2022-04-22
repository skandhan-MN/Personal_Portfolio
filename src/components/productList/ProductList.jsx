import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
          <h1 className="pl-title"> I can help you with...</h1>
          <p className="pl-desc"> UI/UX animations, Webdesign and development to logo design and Branding Check out my latest web  development portfolio projects.</p>
      </div>
      <div className="pl-list">
        {products.map((item)=> (
          <Product key={item.id} img={item.img} link ={item.link}/>
        ))}
         
      </div>

    </div>
  )
}

export default ProductList

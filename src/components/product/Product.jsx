/* eslint-disable jsx-a11y/anchor-has-content */
import "./product.css"
const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circles"></div>
        <div className="p-circles"></div>
        <div className="p-circles"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" /></a>  
    </div>
  )
}

export default Product

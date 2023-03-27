import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col }) => {
    return (
        <div className={`col-xs-6  col-lg-${col} col-sm-6 col-md-4 ng-info`}>
        <div className="product">

        <div className="product-image"> 
        <a href="" className="image"> <img src={product.images[0].url}  className="pic-1"/> { !product.images[1] ?<img src={product.images[0].url}  alt='product is loading' className="pic-2"/> : <img src={product.images[1].url} alt='product is loading' className="pic-2"/> }</a> 
        <Link to={`/product/${product._id}`}>
        <a href="" className="cart">Add to Cart</a>
        </Link>
          <ul className="links">
          <Link to={`/product/${product._id}`}>
            <li><a href=""><i className="fa fa-eye" aria-hidden="true"></i> </a></li>
            <li><a href=""><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
            </Link>
          </ul>
        </div>

        <div class="content"> 
        <div className="rating-outer">
              <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
          </div>
            <h3 class="title"><a href="">{product.name}</a></h3>
            <div class="price"><span>now selling at: </span>${product.price}</div>
          </div>
          <br></br>
          <br></br>
      </div>
      </div>




    )
}

export default Product

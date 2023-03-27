import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { adevertiseProducts } from "../../actions/productActions";
import "./style.css";

const ProductAdvert = () => {
  const dispatch = useDispatch();
  // we get the product to be rendered on the ui by grabbing the product fron the global state using useSelector
  const { product, error } = useSelector((state) => state.advertise);
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(adevertiseProducts());
  }, [dispatch, error]);

  return (
    <div className="main-content">
      <div className="container">
        {product &&
          product.map((products) => (
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h1>{products.name}</h1>
                <p>{products.description}</p>
                <Link to={`/product/${products._id}`}>
                  <a className="btn btn-primary">
                    <i className="fa fa-shopping-cart" /> Order $
                    {products.price}
                  </a>
                </Link>
                <div className="ratings mt-auto">
                  <div className="rating-outer" style={{ marginLeft: 20 }}>
                    <div
                      className="rating-inner"
                      style={{ width: `${(products.ratings / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 order-first order-lg-last">
                <img
                  src={products.images[0].url}
                  alt="Watch"
                  className="img-fluid"
                  style={{ height: 500, width: 400, marginLeft: 60 }}
                />
              </div>

              <div className="icon">
                <a
                  href="https://web.facebook.com/choc.prince.1"
                  className="facebook"
                >
                  <i className="fa fa-facebook-f"></i> Facebook{" "}
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA"
                  className="youtube"
                >
                  {" "}
                  <i className="fa fa-youtube"></i>youtube
                </a>
                <a href="https://twitter.com/home" className="twitter">
                  {" "}
                  <i className="fa fa-twitter"></i> twitter{" "}
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductAdvert;

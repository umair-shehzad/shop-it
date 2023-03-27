import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typical from "react-typical";
import "./feature.css";
import { featuredProducts } from "../../actions/productActions";

import { Card,  } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const FeaturedProducts = () => {

  
  var setting = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 100,
        settings: "unslick",
      },
    ],
  };

  const dispatch = useDispatch();
  // we get the product to be rendered on the ui by grabbing the product fron the global state using useSelector
  const {product} = useSelector((state) => state.featured);
  useEffect(() => {
    dispatch(featuredProducts());
  }, [dispatch]);

  return (
    <>
    
    
      <div
        className="clearfix mt-5 mb-2" id='featuredproduct'
        style={{ background: "#fa9c23", padding: 10, borderRadius: 10 }}
      >
        <h4
          className="float-left"
          style={{ fontFamily: "cursive", color: "#131a48" }}
        >
          {" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " Durable shoes with pride shop with us! 👉🏿 ⛸  ",
              3000,
              "Original T-shirts for men 😎",
              3000,
              "Original Laptops and phone 💻 📱",
              3000,
              "Womens Week | Up to 40% off 💃🏻 👌🏾",
              4000,
            ]}
          />
        </h4>
        <Link to="/cart" className="float-right text-uppercase" to="/">
          {" "}
          <img
            src="./images/shoppingcart.png" alt ='shoppingcart'
            style={{ height: 30, width: 30 }}
          />
        </Link>
      </div>

      <Slider {...setting}>
        {product.map((products) => (
          <Card>
            <Link to={`/product/${products._id}`}>
              <Card.Img variant="top" src={products.images[0].url}  />
            </Link>
            <Card.Body style={{ padding: 5 }}>
              <span  style={{fontSize:14}}>{products.name}</span>
              <div></div>
              <span style={{ fontWeight: "bold" }}>${products.price}</span>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProducts;

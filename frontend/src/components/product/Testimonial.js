import React, { useEffect, useState } from "react";
import './style.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useDispatch, useSelector } from "react-redux";
import { getProductReviews } from '../../actions/productActions'



const options = {
    loop:true,
    margin:0,
    nav:true,
    animateIn: 'bounceInRight',
    animateOut: 'bouceOutRight',
    dots:true,
    autoplay:true,
    smartSpeed:1000,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    },
};


const Testimonial = () => {
    const dispatch = useDispatch();
    const [productId] = useState("");
    const {  reviews } = useSelector((state) => state.productReviews);

    useEffect(() => {
       
        dispatch(getProductReviews(productId));
    
      }, [dispatch,productId]);

    return (
        <>

        <div className="testimonial-section" id="testimonial">
            <div className="container">
               <div className="row justify-content-center">
                   <div className="col-lg-7">
                      
                       <div className="section-title">
                           <h1 className="title">Testimonial</h1>
                           <h2 className="subtitle">Our Satisfied Customer Feedback</h2>
                       </div>
                    
                   </div>
               </div>
        
               <div className="row">
                   {reviews && reviews.map(review =>(

                  <OwlCarousel className="owl-carousel" id="testimonial-carousel"  {...options}>
               
                   <div className="col-lg-12">
                       <div className="testi-item">
                           <div className="testi-comment">
                              <p>
                              <i className="fa fa-quote-left"></i> 
                           {review.comment}
                              <i className="fa fa-quote-right"></i> 
                              </p>
                              <ul className="stars list-unstyled">
                              <li><i className="fa fa-star"></i></li>
                                  <li><i className="fa fa-star"></i></li>
                                  <li><i className="fa fa-star"></i></li>
                                  <li><i className="fa fa-star-half-alt"></i></li>
                                  <li><i className="fa fa-star"></i></li>
                              </ul>
                           </div>
                           <div className="client-info">
                              <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1614276026/avatars/hfx9vms3zqxu7mrfrwuh.jpg" alt='' style={{height: 70, width:70, borderRadius: 35}}/>
                              <h5>{reviews.name}</h5>
                              <p> </p>
                           </div>
                       </div>
                   </div>
        

                  
                 </OwlCarousel>
                   ))}
               </div>
            </div>
        </div>
                    
                </>
    )
}

export default Testimonial

import React from 'react'
import Slider from "react-slick";
import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'
const settings = {
    dots: true,
    infinite: true,
    autoPlay:true,
    speed: 6000,
    swipeToSlide:true,
    autoPlaySpeed:6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };
const Testimonial = () => {
  return <Slider{...settings}>
    <div className="testimonial py-4 px-3">
        <p style={{color:'black'}} className="section__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat amet tempore in aperiam omnis laudantium error eos e
            xcepturi magni eaque quasi commodi ut perspiciatis tenetur unde officiis, quo, earum dolore?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className="mb-0 mt-3">
                    Mohammad NR
                </h6>
                <p className="section__description">
                    Customer
                </p>
            </div>

        </div>
        
    </div>
    <div className="testimonial py-4 px-3">
        <p style={{color:'black'}} className="section__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat amet tempore in aperiam omnis laudantium error eos e
            xcepturi magni eaque quasi commodi ut perspiciatis tenetur unde officiis, quo, earum dolore?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className="mb-0 mt-3">
                    Mohammad NR
                </h6>
                <p className="section__description">
                    Customer
                </p>
            </div>

        </div>
        
    </div>
    <div className="testimonial py-4 px-3">
        <p style={{color:'black'}} className="section__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat amet tempore in aperiam omnis laudantium error eos e
            xcepturi magni eaque quasi commodi ut perspiciatis tenetur unde officiis, quo, earum dolore?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className="mb-0 mt-3">
                    Mohammad NR
                </h6>
                <p className="section__description">
                    Customer
                </p>
            </div>

        </div>
        
    </div>
    <div className="testimonial py-4 px-3">
        <p style={{color:'black'}} className="section__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat amet tempore in aperiam omnis laudantium error eos e
            xcepturi magni eaque quasi commodi ut perspiciatis tenetur unde officiis, quo, earum dolore?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
            <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
            <div>
                <h6 className="mb-0 mt-3">
                    Mohammad NR
                </h6>
                <p className="section__description">
                    Customer
                </p>
            </div>

        </div>
        
    </div>
  </Slider>
}

export default Testimonial;
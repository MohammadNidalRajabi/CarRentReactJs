import React from 'react'
import '../../styles/our-members.css'
import { Container,Row,Col } from 'reactstrap'
 import { Link } from 'react-router-dom'
 import ava01 from '../../assets/all-images/ava-1.jpg'
 import ava02 from '../../assets/all-images/ava-2.jpg'
 import ava03 from '../../assets/all-images/ava-3.jpg'
const OurMembers = () => {
    const OUR__MEMBERS=[
        {
            name:"Mohammad NR",
            experience:"2 years Front End with React Js",
            fbUrl:"#",
            instUrl:"#",
            twitUrl:"#",
            linkedinUrl:"#",
            imgUrl:ava01
        },
        {
            name:"Zaid MK ",
            experience:"2 years Back End with php",
            fbUrl:"#",
            instUrl:"#",
            twitUrl:"#",
            linkedinUrl:"#",
            imgUrl:ava02
        },
        {
            name:"Ahmad NR ",
            experience:"2 years Back End with html",
            fbUrl:"#",
            instUrl:"#",
            twitUrl:"#",
            linkedinUrl:"#",
            imgUrl:ava01
        },
        {
            name:"Zaid MK ",
            experience:"2 years Back End with php",
            fbUrl:"#",
            instUrl:"#",
            twitUrl:"#",
            linkedinUrl:"#",
            imgUrl:ava03
        },
      
    ]
  return <>
  {
    OUR__MEMBERS.map((item,index)=>(

        <Col lg='3' md='3' sm='4' xs='6' key={index} className="mb-4">
            <div className="single__member">
                <div className="single__member-img">
                    <img src={item.imgUrl} alt=""  className='w-100'/>
                    <div className="single__member-social">
                        <Link to={item.fbUrl}>
                            <i className="ri-facebook-line"></i>
                        </Link>
                        <Link to={item.twitUrl}>
                            <i className="ri-twitter-line"></i>
                        </Link>
                        <Link to={item.instUrl}>
                            <i className="ri-instagram-line"></i>
                        </Link>
                        <Link to={item.linkedinUrl}>
                            <i className="ri-linkedin-line"></i>
                        </Link>
                       
                    </div>
                </div>
                <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                        <p className="section__description text-center">
                            {item.experience}
                        </p>

            </div>
        </Col>
    ))
  }
  </>
}

export default OurMembers;
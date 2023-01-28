import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/contact.css'
const Contact = () => {
    const  socialLinks=[
        {
            url:"#",
            icon:"ri-facebook-line",
        },
        {
            url:"#",
            icon:"ri-instagram-line",
        },
        {
            url:"#",
            icon:"ri-linkedin-line",
        },
        {
            url:"#",
            icon:"ri-twitter-line",
        },
    ]
    return <Helmet title='Contact'>
        <CommonSection title='Contact' />
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className='fw-bold mb-4'> Get In Touch</h6>
                        <Form>
                            <FormGroup className='contact__form'>
                                <input type="text" placeholder='Your Name' className='w-100' />
                            </FormGroup>
                            <FormGroup className='contact__form'>
                                <input type="email" placeholder='Your Email' className='w-100' />
                            </FormGroup>
                            <FormGroup className='contact__form'>
                                <textarea name="" id="" rows="5" placeholder='Message' className='textarea'></textarea>
                            </FormGroup>
                            <button className='btn contact__btn' type='submit'>
                                Send
                            </button>
                        </Form>

                    </Col>
                    <Col lg='5' md='5'>
                        <div className="contact__info">
                            <h6 className="fw-bold">Contact Information</h6>
                            <p className="section__description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga! A esse corporis magnam nam?
                            </p>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className='mb-0 fs-6'>Phone:</h6>
                                <p className="section__description">
                                    +9724575645
                                </p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className='mb-0 fs-6'>Email:</h6>
                                <p className="section__description">
                                    example@gamil.com
                                </p>
                            </div>
                            <h6 className='fw-bold'>Follow Us</h6>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                {
                                     socialLinks.map((item,index)=>(
                                        <Link className='social__link-icon' to={item.url} key={index}><i className={item.icon}></i></Link>
                                     ))
                                }
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
}

export default Contact;
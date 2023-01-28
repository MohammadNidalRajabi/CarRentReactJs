import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../../styles/footer.css'
const date=new Date();
const year=date.getFullYear();
const quickLinks = [
  {
    path: 'about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: 'blogs',
    display: 'Blog'
  },
  {
    path: 'contact',
    display: 'Contact'
  },

]
const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
          <div className="footer__logo">
            <h1><Link className='link__in__header' to='/home'>
              <i className="ri-car-line"></i>
              <span>Rent Car <br></br>Service</span>
            </Link></h1>
          </div>
          <p className="footer__logo-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa error a odio
            tempore asperiores ratione. Iusto nemo, sunt nostrum nobis necessitatibus
            ipsa corporis facilis commodi veniam esse blanditiis quaerat quod!
          </p>
        </Col>
        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title">
              Quick Links
            </h5>
            <ListGroup>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} style={{background:'transparent',outline:'none',border:'none'}} className={"p-0 mt-3 ,quick__link"}>
                    <Link style={{color:'#fff'}} to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </div>
        </Col>
        <Col lg='3' md='4' sm='6' >
          <div className="mb-4">
            <h5 className="mb-4  footer__link-title">Head Office</h5>
            <p className='  office__info'> 123 Zindabazar, Sypher,Hebron</p>

            <p className='  office__info'>Phone: +972 0553164897</p>

            <p className='  office__info'> Email: CarRental@gmail.com</p>

            <p className='  office__info'> Office Time:10am - 7pm</p>
          </div>
        </Col>
        <Col lg='3' md='4'>
          <div className="mb-4">
          <h5 className="footer__link-title">News letter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="text" name="email" placeholder='Email'/> 
                <span>
                <i className="ri-send-plane-line"></i>
                </span>
                
              </div>
          </div>
        </Col>
        <Col lg='12'>
          <div className="footer__bottom">
            <p style={{color:'gray'}} className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
            <i className="ri-copyright-line"></i>Copyright{year},Developed by NR Group. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;
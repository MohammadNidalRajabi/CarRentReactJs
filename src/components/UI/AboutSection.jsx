
import React from 'react'
import { Container,Col,Row } from 'reactstrap';
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'
const AboutSection = ({aboutClass}) => {
  return <section className='about__section' style={aboutClass==='aboutPage'?{marginTop:'px'}:{marginTop:'280px'}}>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="about__section-content">
            <h4 className="section__subtitle">About Us</h4>
            <h2 className="section__title">Welcome to car rent service</h2>
            <p className="section__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim sunt, consectetur, earum et rerum tenetur amet optio maiores esse eum ratione quis recusandae, magni laborum iure dolor tempore. Animi!
            </p>
            <div className="about__section-item d-flex align-items-center">
              <p className="section__description d-flex align-items-center gap-2">
              <i className="ri-checkbox-circle-line"></i>
                Lorem ipsum asdasd asdasd
                <i className="ri-checkbox-circle-line"></i>
                Lorem ipsum asdasd asdasd
              </p>
             
            </div>
            <div className="about__section-item d-flex align-items-center">
              <p className="section__description d-flex align-items-center gap-2">
              <i className="ri-checkbox-circle-line"></i>
                Lorem ipsum asdasd asdasd
                <i className="ri-checkbox-circle-line"></i>
                Lorem ipsum asdasd asdasd
              </p>
             
            </div>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="about__img">
            <img src={aboutImg} alt="" className='w-100' />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default AboutSection;
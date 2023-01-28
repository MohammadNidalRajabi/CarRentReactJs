import React from 'react'
import MasetCard from '../../assets/all-images/master-card.jpg'
import PayPal from '../../assets/all-images/paypal.jpg'
import '../../styles/payment-method.css'
const PaymentMethod = () => {
  return <>
    <div className="payment">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />Direct Back Transfer
        </label>
    </div>
    <div className="payment mt-3">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />Check Payment
        </label>
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-center-between gap-2">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />Master Card
        </label>
        <img src={MasetCard} alt="" />
    </div>
    <div className="payment mt-3 d-flex align-items-center justify-center-between gap-2">
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input type="radio" />PayPal
        </label>
        <img src={PayPal} alt="" />
    </div>
    <div className='payment text-end mt-5'>
        <button>Reserve Now</button>
    </div>
  </>
}

export default PaymentMethod;
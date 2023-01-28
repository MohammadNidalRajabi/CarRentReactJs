import React from 'react'
import { FormGroup } from 'reactstrap'
import '../../styles/find-car-form.css'
import '../../styles/find-car-form.css'
const FindCarForm = () => {
  return <form className='form'>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup className='form__group'>
            <input type="text" placeholder="From address" required />
        </FormGroup>
        <FormGroup className='form__group'>
            <input type="text" placeholder="To address" required />
        </FormGroup>
        <FormGroup className='form__group'>
            <input type="date" placeholder="Journey date" required />
        </FormGroup>
        <FormGroup className='form__group'>
            <input className='Journey__time' type="time" placeholder="Journey time" required />
        </FormGroup>
        <FormGroup className='select__group'>
            <select >
                <option value="ac">Ac CAr</option>
                <option value="non-ac">Non Ac CAr</option>
            </select>
        </FormGroup>    
        <FormGroup className='form__group'>
            <button className='find__car-btn btn'>Find Car</button>
        </FormGroup> 

    </div>
  </form>
}

export default FindCarForm;
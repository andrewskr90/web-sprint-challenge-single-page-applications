// import { validate } from '@babel/types'
// import { resetWarningCache } from 'prop-types'
import React, { useState } from 'react'
import schema from './validation/formSchema'
import { reach } from 'yup'

const initialOrderForm = {
    name:'',
    size:'',
    pepperoni:'',
    sausage:'',
    onions:'',
    pineapple:''
}

const initialFormErrors = {
    name:'',
    size:'',
    pepperoni:'',
    sausage:'',
    onions:'',
    pineapple:''
}

export default function Order() {
    const [orderForm, setOrderForm] = useState(initialOrderForm)
    const [order, setOrder] = useState({})
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const validate = (name, value) => {
        reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]:''}))
            .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
    }

    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        const useThisValue = type === 'checkbox' ? checked : value
        console.log(value)
        validate(name, value)
        console.log(value)
        setOrderForm({...orderForm, [name]: useThisValue})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setOrder(orderForm)
        setOrderForm(initialOrderForm)
    }

    return (
        <div>
            <h3>Order Here</h3>
            <div>
                <form class='pizza-form' onSubmit={onSubmit}>
                    <label>Name
                        <input
                            id='name-input'
                            type='text'
                            name='name'
                            onChange={onChange}
                            value={orderForm.name}
                        />
                    </label>
                    <div class='errors'>{formErrors.name}</div>
                    <label>Size
                        <select
                            id='size-dropdown'
                            name='size'
                            onChange={onChange}
                            value={orderForm.size}
                        >
                            <option value=''>-- Select a size --</option>
                            <option value='small'>S</option>
                            <option value='medium'>M</option>
                            <option value='large'>L</option>
                            <option value='extraLarge'>XL</option>
                        </select>
                    </label>
                    <div class='errors'>{formErrors.size}</div>
                    <div class='toppingsDiv'>
                        <p>Toppings</p>
                        <div class='toppingsOptions'>
                        <label>Pepperoni
                            <input
                                type='checkbox'
                                name='pepperoni'
                                onChange={onChange}
                                value={orderForm.pepperoni}
                            />
                        </label>
                        <label>Sausage
                            <input
                                type='checkbox'
                                name='sausage'
                                onChange={onChange}
                                value={orderForm.sausage}
                            />
                        </label>
                        <label>Onions
                            <input
                                type='checkbox'
                                name='onions'
                                onChange={onChange}
                                value={orderForm.onions}
                            />
                        </label>
                        <label>Pineapple
                            <input
                                type='checkbox'
                                name='pineapple'
                                onChange={onChange}
                                value={orderForm.pineapple}
                            />
                        </label>
                        </div>
                    </div>
                    <label>Instructions
                        <input
                            id='special-text'
                            type='text'
                            name='instructions'
                            onChange={onChange}
                            value={orderForm.instructions}
                        />
                    </label>
                    <button id='order-button'>Place Order</button>
                </form>
            </div>
        </div>
        
    )
}
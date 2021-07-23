// import { validate } from '@babel/types'
// import { resetWarningCache } from 'prop-types'
import React, { useState } from 'react'
import schema from './validation/formSchema'
import { reach } from 'yup'
import axios from 'axios'
import { size } from 'lodash'

const initialOrderForm = {
    name:'',
    size:'',
    pepperoni:false,
    sausage:false,
    onions:false,
    pineapple:false
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
        validate(name, value)
        setOrderForm({...orderForm, [name]: useThisValue})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newOrder = {
            name:orderForm.name.trim(),
            size:orderForm.size.trim(),
            pepperoni:orderForm.pepperoni,
            sausage:orderForm.sausage,
            onions:orderForm.onions,
            pineapple:orderForm.pineapple
        }

        axios.post('https://reqres.in/api/orders', newOrder)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setOrderForm(initialOrderForm)
            })
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
                                checked={orderForm.pepperoni}
                            />
                        </label>
                        <label>Sausage
                            <input
                                type='checkbox'
                                name='sausage'
                                onChange={onChange}
                                checked={orderForm.sausage}
                            />
                        </label>
                        <label>Onions
                            <input
                                type='checkbox'
                                name='onions'
                                onChange={onChange}
                                checked={orderForm.onions}
                            />
                        </label>
                        <label>Pineapple
                            <input
                                type='checkbox'
                                name='pineapple'
                                onChange={onChange}
                                checked={orderForm.pineapple}
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
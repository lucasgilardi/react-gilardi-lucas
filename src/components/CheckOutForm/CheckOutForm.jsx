import { useState } from 'react';
import React from 'react'
import { getFirestore } from '../../services/getFirestore';
import { useCartContext } from '../../context/CartContext';
import firebase from 'firebase/app';
import CheckOutModal from '../CheckOutModal/CheckOutModal';
import { AiOutlineWarning } from 'react-icons/ai';
import './CheckOutForm.css';

const CheckOutForm = () => {

    const {cartList, clearCart, totalPrice} = useCartContext()

    const [idOrder, setIdOrder] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [error, setError] = useState (false)

    const [showModal, setShowModal] = useState(false)

    const handleHide = () => {
        setShowModal(false)
        clearCart()
    }

    const generateOrder = (e) =>{
        
        e.preventDefault()

        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.phone.trim()=== '') {
            setError(true)
            return
          }else{
            setError(false)
            let orden = {}
            orden.date = firebase.firestore.Timestamp.fromDate(new Date());
            orden.buyer = formData
            orden.total = totalPrice()
            orden.items = cartList.map(cartItem =>{
                const id = cartItem.id;
                const name = cartItem.title;
                const price = cartItem.price * cartItem.amount;

                return {id, name, price}
            })

            const dbQuery = getFirestore()
            dbQuery.collection('orders').add(orden)
                .then(({id} ) => {setIdOrder(id)})
                .then(resp => console.log(resp))
                .catch (err => console.log (err))   
          }}

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className="checkOut-container">
                <h3 className="checkOut-title">Check Out</h3>
                <form
                    className="checkOut-form"
                    onSubmit={generateOrder}
                    onChange={handleChange}
                >
                    <div>
                        <input 
                            className="checkOut-input" 
                            type="text" 
                            name="name"
                            placeholder="Name"
                            defaultValue={formData.name}
                        />
                    </div>
                    <div>
                        <input 
                            className="checkOut-input" 
                            type="text" 
                            name="phone"
                            placeholder="Phone"
                            defaultValue={formData.phone}
                        />
                    </div>
                    <div>
                        <input 
                            className="checkOut-input" 
                            type="text" 
                            name="email"
                            placeholder="Email"
                            defaultValue={formData.email}
                        />
                    </div>
                    <div className="my-2">
                        
                        <button 
                        className="keep-shopping-btn" 
                        onClick={() => setShowModal(true)}
                        disabled={formData.name.length === 0 || formData.phone === 0 || formData.email === 0}
                        >CHECK OUT</button>
                    </div>
                </form>
            {error ? <h3 className="checkOut-warning"><AiOutlineWarning className="warning-icon"/>You must complete all the fields to proceed with your purchase. Please try again.</h3>
                   : <CheckOutModal 
                        show={showModal} 
                        onHide={handleHide} 
                        data={formData} 
                        id={idOrder} 
                        total={totalPrice()}/>
                    }
            </div>
        </div>
    )
}

export default CheckOutForm

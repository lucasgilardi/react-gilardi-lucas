import React from 'react'
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="form-container">
                <h2 className="form-title">GET IN TOUCH</h2>
                <form action="">
                    <label htmlFor="nombre">Name</label>
                    <input type="text" name="nombre" id="nombre"/>
                
                    <label htmlFor="apellido">Lastname</label>
                    <input type="text" name="apellido" id="apellido"/>
                
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" name="tel" id="tel"/>
                
                    <label htmlFor="mail">Email</label>
                    <input type="email" name="mail" id="mail"/> 
                
                    <label htmlFor="mensaje">Message...</label>
                    <textarea name="mensaje" id="mensaje"></textarea>

                    <input type="submit" value="SEND"/>
                </form>
            </div>
        </div>
    )
}

export default Contact

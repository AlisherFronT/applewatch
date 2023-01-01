import React from 'react';
import './popup.css'

const PopUp = ({popup, setPopup, products, setProducts}) => {

    const closePopUpOverlay = (e) => {
        if (e.target.className === 'overlay') {
            setPopup(false)
        }
    }

    const addCard = (e) => {
        e.preventDefault()
        setProducts([...products, {
            id:products[products.length - 1].id + 1,
            title: e.target[0].value,
            image: e.target[1].value,
            price: e.target[2].value
        }])
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        setPopup(false)
    };

    return (
        <div className='overlay' style={{display: popup === true ? 'flex' : 'none'}} onClick={closePopUpOverlay}>
            <form className="popup__form" onSubmit={addCard}>
                <h2 className='popup__form-title'>New Card</h2>
                <input className='popup__form-input' placeholder='Title' type="text" required/>
                <input className='popup__form-input' placeholder='Image' type="text" required/>
                <input className='popup__form-input' placeholder='Price' type="number" required/>
                <button className='popup__form-btn' type='submit'>Add Card</button>
                <div className="popup__close" onClick={() => setPopup(false)}/>
            </form>
        </div>
    );
};

export default PopUp;
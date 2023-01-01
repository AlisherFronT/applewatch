import React from 'react';

const Card = ({product, products, setProducts}) => {

    const {image, title, price, id} = product;

    const deleteCardHandler = id => {setProducts(products.filter(item => item.id !== id))
    }

    return (
        <div className="content__card">
                <img src={image} alt="" className="content__card-img"/>
                <h3 className="content__card-title">{title}</h3>
                <p className="content__card-price">${price}</p>
            <div className="content_card__btns">
                <button className='content__card-btn' type="button">{title === 'Apple Card' ? 'Apply' : 'Buy'}</button>
                <button className='content__card-delete' type='button' onClick={() =>deleteCardHandler(id)}>Delete</button>
            </div>
            </div>
    );
};

export default Card;
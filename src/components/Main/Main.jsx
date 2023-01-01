import React, {useState} from 'react';
import './main.css'
import Card from "./Card";
import {Airpods} from "../../assets/images/images";
import {AppleTv} from "../../assets/images/images";
import {AppleCard} from "../../assets/images/images";
import {Iphone} from "../../assets/images/images";
import PopUp from "./PopUp/PopUp";

const Main = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Airpdos',
            price: 199.00,
            image: Airpods
        }, {
            id: 2,
            title: 'Iphone XR',
            price: 799.00,
            image: Iphone
        }, {
            id: 3,
            title: 'Apple TV 4K',
            price: 179.00,
            image: AppleTv
        }, {
            id: 4,
            title: 'Apple Card',
            price: 'Free',
            image: AppleCard
        },
        {
            id: 5,
            title: 'Airpdos',
            price: 199.00,
            image: Airpods
        }, {
            id: 6,
            title: 'Iphone XR',
            price: 799.00,
            image: Iphone
        }, {
            id: 7,
            title: 'Apple TV 4K',
            price: 179.00,
            image: AppleTv
        }, {
            id: 8,
            title: 'Apple Card',
            price: 'Free',
            image: AppleCard
        }

    ]);
    const [all, setAll] = useState('');
    const [popup, setPopup] = useState(false)


    return (
        <main className='container'>
        <section className='main'>
                <div className='main__header'>
                    <h2 className='main__title'>Check also</h2>
                    <div className="main__options">
                        <button className="add__card" onClick={() => setPopup(true)}>Add Card</button>
                        <p className='main__all' onClick={() => setAll('all')}>See All ></p>
                    </div>
                </div>



            <div className="content__row">

                {products.filter((item, idx) => {
                    if (all.length === 0){
                        return idx < 4
                    } else {
                        return item
                    }
                } ).map((product ) => (
                    <Card setProducts = {setProducts} products = {products} key={product.id} product={product}/>
                ))}


            </div>

            {
                all.length !== 0 ? <p style={{textAlign:"center", marginTop: 20 + 'px', cursor:"pointer"}} onClick={() => setAll('')}>Hide</p> : ''
            }


        </section>
      <PopUp products={products} setProducts={setProducts} popup={popup} setPopup={setPopup}/>
        </main>

    );
};

export default Main;
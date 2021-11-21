import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import University from '../University/University';
import './Universityes.css'

const Universityes = () => {
    const [universityes, setUniversityes] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./university.JSON')
            .then(res => res.json())
            .then(data => setUniversityes(data));
    }, []);

    const handleAddToCart = (university) => {
        const newCat = [...cart, university];
        setCart(newCat);
    };

    // console.log(universityes)
    return (
        <div className='universityes-Conatiner container'>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-4'>
                {
                    universityes.map(university => <
                        University
                        university={university}
                        key={university.id}
                        handleAddToCart={handleAddToCart}
                    ></University>)
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>



        </div>
    );
};

export default Universityes;
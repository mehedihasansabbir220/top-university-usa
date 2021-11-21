import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './University.css'

const University = (props) => {
    // console.log(props.university);
    const { img, name, QSRankings, CoursesOffered, Cost, Duration } = props.university;
    return (
        <div className="col g-3 single-university">
            <div className="card h-100 p-3 ">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body card-detils ">
                    <h5 className="card-title ">University Name: {name}</h5>
                    <p>QS Rankings 2022: {QSRankings}</p>
                    <p>Courses Offered: {CoursesOffered}</p>
                    <p className='cost'>Total Program Cost(in USD): $ {Cost}</p>
                    <p>Duration (in Years): {Duration}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.university)} type="button" className="btn btn-dark">
                    <FontAwesomeIcon icon={faShoppingCart} />

                    Add to Your favourite</button>
            </div>
        </div >
    );
};

export default University;
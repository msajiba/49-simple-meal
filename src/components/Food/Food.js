import React from 'react';
import './Food.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'



const Food = (props) => {

    const {strMeal, strMealThumb} = props.meal;
 

    return (
        <div className="food-item ">
                <img className="w-25" src={strMealThumb} alt="" />
                <div className="food-info">
                    <p className='mb-5'> {strMeal} </p>
                    <button 
                        className="button-click btn" 
                        onClick={()=> props.addFoodHandler(props.meal)}> 
                        add item <FontAwesomeIcon icon={faArrowAltCircleRight} /> 
                    </button>
                </div>
        </div>
    );
};

export default Food;
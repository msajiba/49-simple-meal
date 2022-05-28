import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Meals.css';



const Meals = () => {

   const [meals, setMeals] = useState([])
   const [food, setFood] = useState([]);


   useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
   },[]);

   const addFoodHandler = (meal) => {
        setFood([...food, meal]);
   } 

    return (

        <div className="container ">
            <div className="row">

                <div className="col-md-8">
                   
                    {
                         meals.map(meal => <Food 
                            key={meal.idMeal} 
                            meal={meal}
                            addFoodHandler={addFoodHandler}
                            > </Food>)
                    }

                </div>

                <div className="col-md-4">
                    <p> Total Item :  {food.length} </p>

                    <ul>
                        {
                            food.map(m=> <li key={m.idMeal}> {m.strMeal} </li>)
                        }    
                    </ul>                    

                </div>
            </div>
        </div>


    );
};

export default Meals;
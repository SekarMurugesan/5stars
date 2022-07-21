import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  const [rating, setRating] = useState(0) // initial rating value
 
  

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    alert("You have selected"+" "+ rate/20 + " Star")
        
  }
  return (
    <>
    <div className="container">
      <div className='head'>RATING(SELECT A STAR AMOUNT)
     <br/><br/><div className='App head'>
      <Rating onClick= {handleRating} ratingValue={rating}  allowHalfIcon="true" iconsCount={5} />
     </div><br/>
     <div className='number'>1 2 3 4 5</div>
     </div>
    </div>
    </>
       
  );
}

export default App;

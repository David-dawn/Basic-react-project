import React, {useState} from 'react';




function MyComponent(){
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");


  function handleAddCar(){
   const newCar = {year: carYear, make: carMake, model: carModel}

   setCars(c => [...c, newCar]);

   setCarYear(new Date().getFullYear());
   setCarMake("");
   setCarModel("");


  }

  function handleRemoveCar(index){


    setCars(c => c.filter((_, i) => i !== index));
  }

  function handleYearChange(event){
    setCarYear(event.target.value);
  }

  function handleMakeChange(event){
    setCarMake(event.target.value)
  }

  function handleModelChange(event){
   setCarModel(event.target.value);
  }

  return(
    <div>
      <h2>List Of Car Object</h2>
      <ul>
        {cars.map((car, index) => <li key={index}>
          {car.year} {car.make} {car.model}
        </li>)}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}></input>/<br></br>
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make'></input>/<br></br>
      <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model'></input>/<br></br>
      <button onClick={handleAddCar}>Add car</button>

    </div>
  )
}



/*
function MyComponent(){
  

  const [foods, setFoods] = useState(["Apple", "Orange", "Banna"]);

  function handleAddFFood(){
   const newFood = document.getElementById("foodinput").value;
   document.getElementById("foodinput").value = "";

   setFoods(f => [...f, newFood]);
  }

  function handleRemoveFood(index){
   setFoods(foods.filter((_, i) => i !== index));
  }



  return(
   <div>
    <h2>List Of Food</h2>
    <ul>
      {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
    </ul>
    <input type="text" id='foodinput' placeholder='Enter food name'/>
    <button onClick={handleAddFFood}>Add Food</button>
   </div>
  )
}
*/
/*
function MyComponent(){
  const [car, setCar] = useState({year:2024, make:"Ford", model: "Mustang"});
  function handleYearChange(event){
   setCar(c => ({...c,  year: event.target.value}));
  }

  function handleMakeChange(event){
   setCar(c =>(({...c, make: event.target.value})));
  }

  function handleModelChange(event){
   
    setCar(c =>({...c, model: event.target.value}))
  }

  return(
    <div>
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
      <input type="numberr" value={car.year} onChange={handleYearChange}/><br></br>
      <input type="text" value={car.make} onChange={handleMakeChange}></input>/<br></br>
      <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
  )
}
  */

/*
function MyComponent(){
 const [name, setName] = useState("Guest");
 const [quantity, setQuantity] = useState(1);
 const [comment, setComment] = useState();
 const [payment, setPayment] = useState();
 const [shipping, setShipping] = useState("");
 
 function handleNameChange(event){
   setName(event.target.value);
 }
 
 function handleQuantityChange(event){
   setQuantity(event.target.value);
 }

 function handleCommentChange(event){
   setComment(event.target.value);
 }

 function handlePaymentChange(event){
  setPayment(event.target.value);
 }

 function handleShippingChange(event){
   setShipping(event.target.value)
 }


 return(
    <div>
     <input value={name} onChange={handleNameChange}></input>
     <p>Name: {name}</p>

     <input value={quantity} onChange={handleQuantityChange}type='number'/>
     <p>Quantity: {quantity}</p>

     <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'></textarea>
     <p>Comment: {comment}</p>

     <select value={payment} onChange={handlePaymentChange} name="" id="">
      <option value="">Select an Option</option>
      <option value="Visa">Visa</option>
      <option value="MasterCard">MasterCard</option>
      <option value="GiftCard">GiftCard</option>
     </select>
     <p>Payment: {payment}</p>

     <label>
      <input value="Pick Up" type="radio"  checked={shipping === "Pck Up"} onChange={handleShippingChange}/>
      Pick up
     </label>

     <label>
     <input value="Delievery" type="radio"  checked={shipping === "Delivery"} onChange={handleShippingChange}/>
      Delivery
     </label>
     <p>Shipping: {shipping}</p>

        
    </div>
 );
}

*/
 

export default MyComponent
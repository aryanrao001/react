import React, { useState , useMemo } from 'react'
import './Bmicalculator.css';

const Bmicalculator = () => {


  const [weight,setweight] = useState('20');
  const [height,setheight] = useState('100');

  function onweightchange(event){
    setweight(event.target.value);
  }
  function onheightchange(event){
    setheight(event.target.value);
  }



  const output = useMemo(()=>{
    const calculateheight = height /100;

    return(weight/(calculateheight*calculateheight)).toFixed(10)
  },[weight,height]);

  return (
    <div class="outermostdiv">
    <div class="Bmicalc">
      <div>
      <h1>BMI Calculator </h1>
      <label>Weight {weight}Kg</label>
      <input
      type="range"
      step="1"
      min="20"
      max="100"
      onChange={onweightchange}
      
      
      /> <br></br>
      <label>Height {height} cm</label>
      <input type="range"
      step="1"
      min="100"
      max="1000"
      onChange={onheightchange}
      />
      <p>Your BMI is {output}</p>
      </div>
      
    </div>
    </div>
  )
}

export default Bmicalculator

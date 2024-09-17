import React, { useState } from "react";
import datas from './datas.json';



// This is the first example of use state 
const UseState = () => {
    const [count,setcount] = useState(0);
    
    const handleClickinc = () => {
        setcount(count+1);
    }
    const handleClickdec = () => {
        setcount(count-1);
    }






    const[nData,setnData] = useState(datas);
    console.log(datas);

    return(
        <div>
            {/* This is the first example of use state  */}
            <h6>This is the first example of use state simple increment and decrement</h6>
            <h1>{count}</h1>
            <button onClick={handleClickinc}  >+</button>
            <button onClick={handleClickdec}  >-</button>


            {/* This is the second Example of Use state  */}
            <h6>This is the second example of use state</h6>
            <ul>
                {
                datas.map((items)=> 
                    <li key={items.id}> {items.name}</li>
                )
                }
            </ul>
        </div>
    )
}

export default UseState;
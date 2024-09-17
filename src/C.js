import React, { useContext } from 'react'
import { Greetcontext } from './A'

export default function C(props) {
    const usecon = useContext(Greetcontext);
  return (
    <div>
        <h1>{props.greet}</h1>
        <h1></h1>
      
    </div>
  )
}

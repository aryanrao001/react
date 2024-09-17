import React, { createContext } from 'react'
import B from './B'

const Greetcontext = createContext();

export default function A() {
    const greet = "Hello Simple props ";

    const greet2 = "Hello Context  ";
    const greet3 = "In this we don't have to pass props one by one component "
  return (
    <div>
        <h2>Here We learn about context Api</h2>
        <h5>Through we can easily send props to the component which is very far Like here we send some props to end component C through context Api </h5>
        <h6>Just Below is the example of simple props </h6>
        <B greet={greet}/>   

        <Greetcontext.Provider value={{greet2,greet3}}>
        <B/>
        </Greetcontext.Provider>   

    </div>
  )
}

export {Greetcontext}
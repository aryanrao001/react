import React from 'react';
import Mobile from './Mobile';
import UseState from './Usestate';
import Usereducer from './Usereducer';
import A from './A';

const Home = () => {
  return (
    <div>

    {/* This is props */}
    <Mobile/>

    {/* This is Use State  */}
    <UseState/>
    

    
    {/* This is Context Api */}
    <A/>

    {/* This is use Reducer */}
    <Usereducer/>
 
      
    </div>
  )
}

export default Home

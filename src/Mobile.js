import React from "react";
import Mobilelist from "./Mobilelist";
import books from './books.json';


// This is simple object Method

const book1 = {
    image: 'https://rukminim2.flixcart.com/image/312/312/jm9hfgw0/mobile/x/g/f/apple-iphone-xs-mt9k2hn-a-original-imaf97f6hqebeych.jpeg?q=70',
    title: 'Iphone XS ',
    price: '$120'

}
const book2 = {
    image: 'https://rukminim2.flixcart.com/image/312/312/j7qi9ow0/mobile/h/f/t/apple-iphone-6s-mn0x2hn-a-original-imaexw7fpbbfwwtw.jpeg?q=70',
    title: 'Iphone 6 ',
    price: '$100'

}

// This is array method 



function Mobile(){
    return(
        <>

    {/* This is the old method  */}
{/* <Mobilelist image={book1.image} title={book1.title} price={book1.price} />
    <Mobilelist image={book2.image} title={book2.title} price={book2.price} /> */}

    {books.map((ele) =>{
       return( <Mobilelist image={ele.image} title={ele.title} price={ele.price} />)

    })}


    </>
)
}   

export default Mobile;
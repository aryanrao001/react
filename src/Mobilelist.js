import React from "react";
import './Mobilelist.css';

function Mobilelist(props){

    const image1='https://rukminim2.flixcart.com/image/312/312/jm9hfgw0/mobile/x/g/f/apple-iphone-xs-mt9k2hn-a-original-imaf97f6hqebeych.jpeg?q=70'
    const name1 = 'Iphone XS';
    const price1 = '$120';



    const {image,title,price} = props;

    return(
        <>
        
        {/* This is a first Type we can do with simple html   */}

        {/* 
         <div className="mobile">
            <img src="https://rukminim2.flixcart.com/image/312/312/jm9hfgw0/mobile/x/g/f/apple-iphone-xs-mt9k2hn-a-original-imaf97f6hqebeych.jpeg?q=70"></img>
            <div>
                <h2>Iphone XS </h2>
                <h6>$120</h6>
                <button>Add to Cart </button>
            </div>
        </div> */}

        {/* This is second type we can do with js above */}

        {/* <div className="mobile">
            <img src={image1}></img>
            <div>
                <h2>{name1} </h2>
                <h6>{price1}</h6>
                <button>Add to Cart </button>
            </div>
        </div>  */}


        {/* This is third type we can do with props  */}

        {/* <div className="mobile">
            <img src={props.image}></img>
            <div>
                <h2>{props.title} </h2>
                <h6>{props.price}</h6>
                <button>Add to Cart </button>
            </div>
        </div>  */}

        {/* This we can do with props destructing */}

        <div className="mobile">
            <img src={image}></img>
            <div>
                <h2>{title} </h2>
                <h6>{price}</h6>
                <button>Add to Cart </button>
            </div>
        </div> 





        </>
    )
}


export default Mobilelist;
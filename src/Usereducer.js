import React, { useReducer } from 'react'


const initialState = {
    data:[],
    loading:false,
    error:null
}


function reducer (state,action){
    switch(action.type){
        case 'FETCH_DATA_START':
            return{...state,loading:true};
        case 'FETCH_DATA_SUCCESS':
            return{loading:false,error:null,data:action.payload};

        case 'FETCH_DATA_FAILURE' :
            return{...state,loading:false,error:action.payload};
        
        case 'DELETE_DATA':
            return {...state, data:state.data.filter((item) =>
                item.id !== action.payload
            )};
        case 'ADD_DATA':
            return {...state,data:[...state.data,action.payload]};
    }

}
console.log(initialState.data[1]);


// const reducer = (state, action) =>{
//     if(action.type === 'incr'){

//         return { count: state.count + 1}; //WE Write state.count because we take below count as a object 
//     }
//     if(action.type === 'decr'){
//         return { count: state.count - 1};  //WE Write state.count because we take below count as a object 
//     }
// }

const Usereducer = () => {
//     const [state, dispatch] = useReducer(reducer, { count:0 });

//     const handleclickinc = () => {
//         dispatch({type:"incr"});
//     }
//     const handleclickdec = () => {
//         dispatch({type:"decr"});
//     }



    const [state,dispatch] = useReducer(reducer, initialState);


    const fetchData = async() => {
        dispatch({type:'FETCH_DATA_START'});

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({type:'FETCH_DATA_SUCCESS',payload: data});
        }
        catch(error){
            dispatch({type:'FETCH_DATA_FAILURE',payload:error.message});
        }
         
    }




    const deleteData = (id) => {
        dispatch({type:'DELETE_DATA',payload:id});
    }
    const addData = (newData) => {
        dispatch({type:'ADD_DATA',payload:newData})

    }


  return (
    <div>

         <h6>This is The first Example of Use Reducer and i commented this because we now solve some complex examples if you want to see then uncommented the code </h6>
        {/* <h2>We can also use (Use Reducer ) in the place of Use State But we Use (Use REducer ) only when there is complex statment </h2>
        <p>{state.count}</p>
        <button onClick={handleclickinc}>+</button>
        <button onClick={handleclickdec}>-</button> */}



        <h6>This is the perfect example of Use reducer </h6>
        <button onClick={fetchData}>Fetch Data </button>
        {state.loading && <p>Loading ....</p>}
        {state.error && <p>Error:{state.error}</p>}
        <ul>
            {state.data.map((item) => 
                <li key={item.id}>
                    {item.title};{' '} 
                    <button onClick={()=> deleteData(item.id)}> Remove </button>
                </li>
            )}
        </ul>
        <form onSubmit={(e) => {
            e.preventDefault();
            addData({
                id:Date.now(),
                title:e.target.title.value,
            })
        }}>
            <input type="text" name='title'placeholder='Add new Item'/>
            <button type="submit">Add</button>
        </form>


      
    </div>
  )
}

export default Usereducer

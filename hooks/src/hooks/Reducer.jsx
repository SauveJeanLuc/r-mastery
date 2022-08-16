import React from 'react'
import { useReducer } from 'react';

const step = 50;

const reducer = (state, action) => {
    switch(action.type){
        case "R+":
            return Object.assign({}, state, {r: state.r + step});
        case "R-":
            return Object.assign({}, state, {r: state.r - step});
        case "G+":
            return Object.assign({}, state, {g: state.g + step});
        case "G-":
            return Object.assign({}, state, {g: state.g - step});
        case "B+":
            return Object.assign({}, state, {b: state.b + step});
        case "B-":
            return Object.assign({}, state, {b: state.b - step});                        
        default:
            return state;
    }
}
export default function Reducer() {
    // const [r, setR] = useState(0);
    // const [g, setG] = useState(0);
    // const [b, setB] = useState(0);


    const [{r,g,b}, dispatch] = useReducer(reducer, {r:0,g:0,b:0});
  
    return (
      <>
          {/* <h1 style={ {`color: rgb(${r}, ${g}, ${b})`}} > Change The Color Of This Text </h1> */}
          <h1 style={{color: `rgb(${r}, ${g}, ${b})`}} > Change The Color Of This Text </h1>
  
          <span>R</span><button onClick={() => dispatch({ type: "R+"})}>+</button><button onClick={ () => dispatch({ type: "R-"}) }>-</button>
          <hr />
          <span>G</span><button onClick={() => dispatch({ type: "G+"})}>+</button><button onClick={ () => dispatch({ type: "G-"}) }>-</button>
          <hr />
          <span>B</span><button onClick={() => dispatch({ type: "B+"})}>+</button><button onClick={ () => dispatch({ type: "B-"}) }>-</button>
          <hr />
  
      </>
    )
  }

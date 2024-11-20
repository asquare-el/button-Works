//onChange = event handler used primarily with form elements eg. <input>
//<button> <textarea> <radio> triggers a funcrion everytime the valye of the input changes


import { useState } from "react";

function MyComponent(){
    const [name, setName] = useState("Aditi");
    const [quantity, setQuant] = useState("1");
    function nameChangeHandler(event){
        setName(event.target.value);
    }
    function quantChangeHandler(event){
        setQuant(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={nameChangeHandler}></input>
            <p>Name: {name} </p>
            <input value={quantity} onChange={quantChangeHandler} type="number"></input>
            <p> Quantity: {quantity}</p>
        </div>
    )
}
export default MyComponent
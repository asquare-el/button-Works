import { useState } from "react";

function Counter(){
    const [count, setCount] = useState("");
    const increment = () => {
        if(count<10)
        {setCount(count+1);}
    }
    const decrement = () => {
        if(count>0)
            setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment} disabled={count === 10}> INCREMENT</button>
            <button onClick={decrement}disabled={count === 0}> DECREMENT</button>
            <button onClick={reset}> RESET </button>
        </div>
    )
}
export default Counter
import React, { useState } from "react";
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <button className="counter" onClick={() => setCount(count + 1)}>
            Clickeado { count } veces
        </button>
    )
}

export default Counter
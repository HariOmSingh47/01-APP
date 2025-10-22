import React, {use, useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count Component - {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default CounterComponent;

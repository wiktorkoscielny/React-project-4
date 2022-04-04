import React, { useState } from "react";

export default function Count() {
    const [number, setNumber] = useState(0)

    const Increament = () => {
        setNumber(number + 1);
    }

    const Decrement = () => {
        setNumber(number - 1);
    }

    return (
        <>
            {number}
            <div>
                <button onClick={Increament}>
                    +
                </button>
                <button onClick={Decrement}>
                    -
                </button>
            </div>
        </>
    )
}
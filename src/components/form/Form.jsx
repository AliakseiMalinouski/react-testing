import React from "react";
import { useState } from "react";

const Form = () => {

    const [data, setData] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setData(value);
    }

    return (
        <form>
            <input type="text" placeholder="input" value={data} onChange={handleChange}/>
        </form>
    )
}

export {
    Form,
}


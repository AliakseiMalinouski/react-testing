import React from "react";
import { useState } from "react";

const Cover = ({ title, text, items, onClick, inputValue }) => {
    const [data, setData] = useState(items);
    const handleClick = (id) => {
        const preparedData = data.map((item) => {
            return {
                ...item,
                checked: item.id === id,
            }
        });
        setData(preparedData);
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <div data-testid="items-test-id">
            {data.map(({ title, checked, id }) => (
                <div key={id} onClick={() => handleClick(id)} data-testid={`item-test-id-${id}`}>
                    <h3>{title}</h3>
                    <input type='checkbox' checked={checked} onChange={() => {}}/>
                </div>
            ))}
            <button type="button" name='button-item' onClick={onClick}></button>
            <input type="text" data-testid="input-with-prop-value" value={inputValue}/>
            </div>
        </div>
    )
}

export {
    Cover,
}

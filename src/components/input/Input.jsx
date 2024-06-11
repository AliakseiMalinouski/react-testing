import React from "react";

const Input = ({ type, placeholder, onChange }) => {
    const handleChange = (e) => {
        const { value } = e.target;
        onChange(value);
    }
    const handleClick = () => {
        console.log('CLICKED');
    }
    return (
        <>
        <input
            type={type}
            data-testid={'input'}
            onChange={handleChange}
            placeholder={placeholder}
        />
        <button onClick={handleClick}>button</button>
        </>
    )
}

export {
    Input,
}

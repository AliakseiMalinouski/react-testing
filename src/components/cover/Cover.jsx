import React from "react";

const Cover = ({ title, text, items }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            {items.map((item) => (
                <div>
                    {item}
                </div>
            ))}
        </div>
    )
}

export {
    Cover,
}
import React, { useState } from "react";

const Users = ({ url }) => {

    const [data, setData] = useState([]);

    const handleLoad = () => {
        fetch(url)
        .then(data => setData(data))
    }

    return (
        <>
        <button 
            type="button"
            onClick={handleLoad} 
            data-testid="button-request">
            onload
        </button>
        <div className="users-wrapper">
                
        </div>
        </>
    )
}

export { Users };
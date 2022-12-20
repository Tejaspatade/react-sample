import React from "react";

import "./card.style.css";

export const Card = (props) => {
    return (
        <div className="card-container">
            <h2>{props.name}</h2>
        </div>
    );
};

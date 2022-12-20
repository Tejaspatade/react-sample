import React from "react";

import "./searchbox.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        // HandleChange is a callback function
        onChange={handleChange}
    />
);

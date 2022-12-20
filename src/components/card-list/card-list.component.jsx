import React from "react";
import { Card } from "../card/card.component";

import "./card-list.style.css";

export const CardList = (props) => {
    return (
        <div className="card-list">
            {/* Iterate over all artists and return inside a H1 */}
            {props.artists.map((artist) => {
                // Return 1 card per iteration to be added into Card List
                return <Card key={artist.id} name={artist.name} />;
            })}
        </div>
    );
};

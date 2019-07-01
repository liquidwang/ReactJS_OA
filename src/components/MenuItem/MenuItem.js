import React from "react";

const MenuItem = ({ item, onItemSelect, shortName }) => {
    return (
        <li onClick={ () => onItemSelect(shortName) }>
            {item}
        </li>
    )
};

export default MenuItem;

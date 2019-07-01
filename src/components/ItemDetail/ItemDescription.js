import React from "react";

const ItemDescription = ({ name, description }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
        </tr>
    )
};

export default ItemDescription;

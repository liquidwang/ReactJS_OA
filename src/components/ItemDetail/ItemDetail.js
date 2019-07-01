import React from "react";
import ItemDescription from "./ItemDescription";
import "./ItemDetail.css";

const ItemDetail = ({ menuDetail, selectedItem }) => {
    if( !selectedItem ) {
        return <div>&nbsp;</div>
    }

    const detail = menuDetail.map( (element, id) => {
        return <ItemDescription
            key={id}
            name={element.name}
            description={element.description}
        />
    });

    return (
        <div>
            <h4>{`Items in Category:(${selectedItem})`}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {detail}
                </tbody>
            </table>
        </div>
    )
};

export default ItemDetail;

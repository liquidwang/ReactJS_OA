import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuList = ({ list, onItemSelect }) => {
    const listItems = list.map( (element, id) => {
        return <MenuItem
            key={id}
            item={element.name}
            shortName={element.short_name}
            onItemSelect={onItemSelect}
        />
    });

    return (
        <div className={"container"}>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};

export default MenuList;

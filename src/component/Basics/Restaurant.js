import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((currElem) => {
        return currElem.category;
    })
    ),
    "All",
];///by adding new set only unique item are shown ,by adding square bracket it is converted to array,
//by adding ... only array value is shown.
console.log(uniqueList);
const Restaurant = () => {
    // const myStyle = { color: "blue" }; Adding css by making object
    //Hook state

    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);

    const filterItem = (category) => {

        if (category === 'All') {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant;

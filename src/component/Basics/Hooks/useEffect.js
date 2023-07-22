import React, { useEffect, useState } from 'react';
import "./style.css";
//useEffect means components need to do after render.
//Hooks are use manage state ...
const UseEffect = () => {
    const [myNum, SetMyNum] = useState(0);
    useEffect(() => {
        document.title = `Chats(${myNum})`;
    });
    //[] is array dependency for calling only once.

    console.log(myNum);

    return (
        <>

            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => SetMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>

    )
}

export default UseEffect;

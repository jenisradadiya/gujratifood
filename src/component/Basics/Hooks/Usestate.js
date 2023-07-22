import React from 'react';
import "./style.css";

//Hooks are use manage state ...
const Usestate = () => {

    const [myNum, SetMyNum] = React.useState(0);
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
                <div className="button2" onClick={() => myNum > 0 ? SetMyNum(myNum - 1) : SetMyNum(0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>

    )
}

export default Usestate;

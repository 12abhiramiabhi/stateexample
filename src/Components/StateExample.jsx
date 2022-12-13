import React from 'react'
import { useState } from "react"

export default function StateExample() {

    const [message, setMessage] = useState("please like this page");
    const [num, setNum] = useState(0);

    // let message = "please like this page"
    function likedbutton() {
        // message = "thanks for the like"
        // console.log(message);
        setMessage("thanks for the like")

    }
    function numButton() {
        setNum(num + 1)
    }

    return (
        <div>
            <p>{num}</p>
            <h1>{message}</h1>
            <button onClick={likedbutton} >click</button>
            <button onClick={numButton}>cike</button>
        </div>
    )
}

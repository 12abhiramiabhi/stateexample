import React from 'react'
import "./stateexample.css"
import { useState } from "react"

export default function StateExampleTwo() {
    const [backGround, setBaround] = useState("red-box")
    function changeColor() {
        setBaround("blue-box")
    }

    return (
        <div>
            <div className={backGround} ></div>
            <button onClick={changeColor} >click</button>
        </div>
    )
}

import React from 'react'
import { useState } from "react"

export default function StateThree() {
    const [image, setimage] = useState(false)
    function viewImage() {
        setimage(true)
    }

    function closeImage() {
        setimage(false)
    }

    return (

        <div>
            <button onClick={viewImage}>view image</button>

            {image &&
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" />

            }
            {image && <button onClick={closeImage}>close image</button>}
        </div>
    )
}

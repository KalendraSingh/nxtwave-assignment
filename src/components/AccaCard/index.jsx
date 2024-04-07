import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import "./index.css"

function AccaCard() {
    return (
        <>
            <div className='card-container'>
                <div className='item-card'>
                    <div>
                        <FaUserGroup />
                    </div>
                    <div>
                        <p>Heading</p>
                    </div>
                </div>
                <p>Lorem words</p>
            </div>
        </>
    )
}

export default AccaCard
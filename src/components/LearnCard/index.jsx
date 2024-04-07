import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import "./index.css"

export default function EligibilityCard({ top, bottom }) {
    return (
        <>
            <div>
                <div className='learn-card'>
                    <div className='card-heading-top'>
                        <h5>{top}</h5>
                    </div>
                    <div className='learn-item-card'>
                        <ul>
                            <li>This is goood code.</li>
                            <li>This is goood code.</li>
                            <li>This is goood code.</li>
                            <li>This is goood code.</li>
                        </ul>
                    </div>
                    <div className='card-heading-bottom'>
                        <h5>{bottom}</h5>
                    </div>
                </div>
              
            </div>
        </>
    )
}

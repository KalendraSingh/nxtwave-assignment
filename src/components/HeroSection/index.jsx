import React from 'react'
import BecomeAcca from "../BecomeAcca/Index"
import GetinTouch from "../GetinTouch/index"
import "./index.css"

export default function index() {
    return (
        <>
            <section className='Become-ACCA-In-18-months'>
                <div className='left'>
                    <BecomeAcca />
                </div>
                <div className='right'>
                    <GetinTouch />
                </div>
            </section>
        </>
    )
}

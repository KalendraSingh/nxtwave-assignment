import React from 'react'
import GetinTouch from "../GetinTouch/index"
import Button from 'react-bootstrap/Button';
import "./index.css"

export default function index() {
    return (
        <>
            <section className='Become-ACCA-In-18-months' style={{marginTop:"20px",marginBottom:"20pxs"}}>
                <div className='left'>
                    <h3>Kick of your ACCA Pre Journey with IndigoLearn</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit

                    </p>
                    <Button variant="danger">Start Journey</Button>{' '}

                </div>
                <div className='right'>
                    <GetinTouch />
                </div>
            </section>
        </>
    )
}

import React from 'react'
import AccaCard from '../AccaCard'
import "./Index.css"
function BecomeAcca() {
    return (
        <>
            <h1>Become ACCA in 18 months</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Iure cupiditate quas hic magni aperiam praesentium laboriosam
                quis voluptas porro tenetur et est commodi,?
            </p>
            <div className='Acca-card-container'>
                <AccaCard />
                <AccaCard />
                <AccaCard />
                <AccaCard />
            </div>
            <div className='button-conainer'>
                <div>
                    <button className='learn-more-button'>Learn More</button>
                </div>
                <div>
                    <button className='apply-now-button'>Apply More</button>
                </div>
            </div>
        </>
    )
}
export default BecomeAcca

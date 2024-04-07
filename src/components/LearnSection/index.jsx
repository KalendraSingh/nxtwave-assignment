import React from 'react'
import LearnCard from "../LearnCard/index"
import "./index.css"

export default function index() {
    return (
        <>
            <h2 className='chooseus-heading'>What You Will Learn In ACCA?</h2>
            <section className='chooseus-container'>
                <LearnCard top = "Knwlwdge Level" bottom = "3 papers"/>
                <LearnCard top = "Skill Level" bottom = "6 papers"/>
                <LearnCard top = "Profesional Level" bottom = "4 papers"/>
    
            </section>
        </>
    )
}

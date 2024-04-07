import React from 'react'
import ChooseUsCard from "../ChooseUsCard/index"
import { MdGroups } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegAddressCard } from "react-icons/fa";
import "./index.css"

export default function index() {
    return (
        <>
            <h2 className='chooseus-heading'>Why Choose Us</h2>
            <section className='chooseus-container'>

                <ChooseUsCard icon = {<HiOutlineLightBulb className='chooseus-icon'/>} heading = "Energy Facility"/>
                <ChooseUsCard icon = {<MdGroups className='chooseus-icon'/>} heading = "Group of member"/>
                <ChooseUsCard icon = {<FaRegAddressCard className='chooseus-icon'/>} heading = "Placements"/>
            </section>
        </>
    )
}

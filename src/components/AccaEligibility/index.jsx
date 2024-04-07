import React from 'react'
import EligibilityCard from '../EligibilityCard'
import { FaUserGroup } from "react-icons/fa6";
import "./index.css"

export default function AccaEligibility() {
  return (
    <div className='EligibilityCard-container'>
      <EligibilityCard icon = {<FaUserGroup/> } heading = "Levels"/>
      <EligibilityCard icon = {<FaUserGroup/> } heading = "Durations"/>
      <EligibilityCard icon = {<FaUserGroup/> } heading = "Exam" />
      <EligibilityCard icon = {<FaUserGroup/> } heading = "Exceptions"/>
    </div>
  )
}

import React from 'react'
import { FaUserGroup } from "react-icons/fa6";
import "./index.css"

export default function EligibilityCard({icon, heading}) {
  return (
    <>
      <div>
        <div className='eligibility-card'>
          <h5>{heading}</h5>
          <div className='eligibility-item-card'>
            <div>
              {icon}
            </div>
            <div>
              <p>Lorem words</p>
            </div>
          </div>

        </div>
        <div />
      </div>
    </>
  )
}

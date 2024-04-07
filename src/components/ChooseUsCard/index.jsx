import React from 'react'
import "./index.css"

export default function index({ icon, heading}) {
  return (
    <div className='chooseus-card-container'>
      <div>
        {icon}
        <p>{heading}</p>
        <p>Lorem words for the description wich is short for the specific topic.</p>
      </div>
    </div>
  )
}

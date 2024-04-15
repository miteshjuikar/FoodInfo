import React from 'react'

export default function Spinner() {
  return (
    <div className='spinnerMainDiv'>
    <div className={`spinner-border text-secondary ${"spinner"}`} role="status">
        <span className="sr-only"></span>
    </div>
    </div>
  )
}

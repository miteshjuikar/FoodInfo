import React from 'react'

export default function Spinner() {
  return (
    <div className='spinnerMainDiv'>
    <div class={`spinner-border text-secondary ${"spinner"}`} role="status">
        <span class="sr-only"></span>
    </div>
    </div>
  )
}

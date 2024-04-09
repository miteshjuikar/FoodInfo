import React from 'react'
import style from '../AdvanceSearch.module.css'

export default function DropDown( { arrDropName, name, textData, handleChange}) {
    const handleChangeDrop = (e) => {
        console.log(e.target.value);
    }
  return (
    <>
        <div className={style.textBox}>
            <label htmlFor="dropDownInput" className="form-label">{name}</label>
            <select className={`form-select`} onChange={handleChange} >
                <option defaultValue={"Select"}>Select</option>
                {arrDropName.map((dropVal) => (<option key={dropVal} >{dropVal}</option>))}
            </select>
        </div>
    </>
  )
}

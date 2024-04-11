import React from 'react'
import style from '../AdvanceSearch.module.css'

export default function DropDown( { arrDropData, name, id, textData, handleChange}) {
    const handleChangeDrop = (e) => {
        console.log(e.target.id, e.target.value);
    }
  return (
    <>
        <div className={style.textBox}>
            <label htmlFor="dropDownInput" className={`form-label ${style.textLabel}`}>{name}</label>
            <select className={`form-select`} id={id} onChange={handleChange} >
                <option defaultValue={"Select"}>Select</option>
                {arrDropData.map((dropVal) => (<option key={dropVal} >{dropVal}</option>))}
            </select>
        </div>
    </>
  )
}

import React from 'react'
import style from '../AdvanceSearch.module.css'


export default function TextBox({ name, boxId, textData, handleChange }) {
    
    // function handleChange(e) {
    //     setTextData((preVal) => ({
    //         ...preVal,
    //         [e.target.id]: e.target.value
    //     }))
    // }
  
  return (
    <>
    <div className={style.textBox}>
        <label htmlFor="basic-url" className={`form-label ${style.textLabel}`}>{name}</label>
        <div className="input-group">
            <input type="text" 
                    className="form-control" 
                    id={boxId} 
                    aria-describedby="basic-addon3 basic-addon4" 
                    value={textData.boxId}
                    onChange={handleChange}
            />
        </div>
        <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
    </div>
    </>
  )
}

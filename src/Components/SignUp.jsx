import React from 'react'
import style from './SignUp.module.css'
import { useState } from 'react'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [formData, setFormData] = useState({email:"", password:""});

  function handleChange(e){
    setFormData((pre) => ({
      ...pre,
      [e.target.id]: e.target.value
    }))
  }
  const email = formData.email;
  const password = formData.password;
  console.log(auth, email, password);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = await res.user;
    console.log(user)
  }

  return (
    <div className={style.logInForm}>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    value={formData.email} 
                    onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" 
                    className="form-control" 
                    id="password" 
                    value={formData.password} 
                    onChange={handleChange}
                    />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

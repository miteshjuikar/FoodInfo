import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './SignUp.module.css'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Validation from './Validation'

export default function SignUp() {
  const [formData, setFormData] = useState({email:"", password:"", confirmPassword: "", name: ""});
  const [ error, setError ] = useState({email:"", password:"", confirmPassword: "", name: ""});
  const [ submit, setSubmit ] = useState(true);
  const navigate = useNavigate();

  function handleChange(e){
    setFormData((pre) => ({
      ...pre,
      [e.target.id]: e.target.value
    }))
  }
  const email = formData.email;
  const password = formData.password;

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(Validation(formData))
  }
  useEffect(() => {
    if(Object.keys(error).length === 0){
      async function hitSign(){
        setSubmit(false)
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          const user = userCredential.user;
          setSubmit(true)
          navigate("/logIn")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSubmit(true)
          alert(errorCode, errorMessage);
        });
      }
      hitSign();
    }
  },[error])

  return (
    <div className={style.mainLogIn}>
    <div className={style.sideText}>
      <h2>Looks like you're new here!</h2>
      <p>Sign up with your email to get started</p>
    </div>
    <div className={style.logInForm}>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder='Enter your full name'
                    onChange={handleChange}
            />
            {error.name && <div className="form-text" style={{color: 'red'}}>{error.name}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    value={formData.email} 
                    placeholder='Enter your email Id'
                    onChange={handleChange}
            />
            {error.email ? <div className="form-text" style={{color: 'red'}}>{error.email}</div> : <div className="form-text">We'll never share your email with anyone else.</div>}
            
        </div>
        
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" 
                    className="form-control" 
                    id="password" 
                    value={formData.password} 
                    placeholder='Enter password'
                    onChange={handleChange}
            />
            {error.password && <div className="form-text" style={{color: 'red'}}>{error.password}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="verifyPassword1" className="form-label">Confirm Password</label>
            <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder='Confirm Password'
                    value={formData.confirmPassword} 
                    onChange={handleChange}
            />
            {error.confirmPassword && <div className="form-text" style={{color: 'red'}}>{error.confirmPassword}</div>}
        </div>
        <button type="submit"
               className="btn btn-primary"
               disabled={!submit}
        >
          {submit ? "Submit" : "submitting"}
        </button>
    </form>
    </div>
    </div>
  )
}

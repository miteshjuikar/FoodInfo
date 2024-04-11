import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import style from './SignUp.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'

export default function LogIn() {

    const [formData, setFormData] = useState({email:"", password:""});
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
        async function logInData(){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
            const user = userCredential.user;
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode,errorMessage);
            });
        }
        logInData();
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
                    placeholder='Enter your email Id'
                    onChange={handleChange}
            />
            <div className="form-text">We'll never share your email with anyone else.</div>
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
        </div>
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

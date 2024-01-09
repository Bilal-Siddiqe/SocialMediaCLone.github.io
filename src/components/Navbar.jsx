import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useData from '../hooks/useData';

export default function Navbar() {

  const navigate = useNavigate();
  const { login, setLogin, signUp, setSignUp } = useData();

  return (
    <div className='d-flex justify-content-between px-5 bg-dark text-white align-items-center' >
      <h1>Navbar</h1>

      <ul className='list-unstyled mt-2 d-flex justify-content-between align-items-center'>
        <Link to={"/"} className='text-decoration-none'> <li className='mx-3 text-white'>  Home</li> </Link>
      </ul>

      <div className="forms">
        {

          login ?

            <button className=" mx-3 btn btn-danger" onClick={() => {
              navigate('/signin')
              setLogin(false)
            }}>Logout</button>

            :

            signUp ? <button className=" mx-3 btn btn-primary" onClick={() => {
              navigate('/signup')
              setSignUp(false)
            }}>Sign Up</button>

              :

              <button className=" mx-3 btn btn-success" onClick={() => {
                navigate('/signin')
                setSignUp(true)
              }}>Sign In</button>

        }


      </div>


    </div>
  )
}

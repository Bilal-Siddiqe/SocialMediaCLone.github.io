import React, { useState } from 'react';
import useData from '../hooks/useData'
import { Link, useNavigate } from 'react-router-dom';


export default function SignInForm() {

  const [logUName, setLogUName] = useState();
  const [logPwd, setLogPwd] = useState();
  let { users, setUsers, setLoginUser, setLogin } = useData();
  const navigate = useNavigate();

  function login() {
    console.clear();

    const found = users.find((items) => { return items.userName == logUName && items.Password == logPwd })

    if (found) {
      navigate("/profile");
      setLoginUser(found.userName);
      setLogin(true);
    } else {
      alert("Invalid User Name Or Password")
    }
  }


  return (

    <div className='container mt-5'>

      <div className="border border-2 p-3 d-flex flex-column">
        <h1 className='text-center'>Sign In</h1>

        <input className='d-block m-auto mt-3 mx-5' type="text" placeholder='Write Unique UserName' onChange={(e) => { setLogUName(e.target.value) }} />
        <input className='d-block m-auto mt-3 mx-5' type="password" placeholder='Password' onChange={(e) => { setLogPwd(e.target.value) }} />

        <button className="btn btn-primary d-block mt-3 mx-5" onClick={login}>Login</button>

        <span className='d-block text-center mt-3'> <Link to={'/signup'}>dpn't have an account ?</Link> </span>
      </div>
    </div>


  )
}

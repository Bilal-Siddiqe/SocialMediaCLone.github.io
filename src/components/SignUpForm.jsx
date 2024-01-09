import React, { useState } from 'react';
import useData from '../hooks/useData'
import { Link, useNavigate } from 'react-router-dom';


export default function SignUpForm() {

  const [inputName, setInputName] = useState();
  const [inputUName, setInputUName] = useState();
  const [inputPwd, setInputPwd] = useState();
  let { users, setUsers } = useData();
  const navigate = useNavigate();

  const register = () => {
    console.clear();

    const person = {
      fullName: inputName,
      userName: inputUName,
      Password: inputPwd,
      profilURL: "",
      posts: []
    }

    const found = users.find((items) => { return items.userName == person.userName })

    if (!found) {
      // setUsers([...users, person]);
      users.push(person)
      console.log(users);
      navigate('/signin');
    }
    else{
      alert("User Already Registered");
    }

  }

  return (
    <div className='container mt-5'>

      <div className="border border-2 p-3 d-flex flex-column">
        <h1 className='text-center'>Sign Up</h1>

        <input className='d-block m-auto mt-3 mx-5' type="text" placeholder='Full Name' onChange={(e) => { setInputName(e.target.value) }} />
        <input className='d-block m-auto mt-3 mx-5' type="text" placeholder='Write Unique UserName' onChange={(e) => { setInputUName(e.target.value) }} />
        <input className='d-block m-auto mt-3 mx-5' type="password" placeholder='Password' onChange={(e) => { setInputPwd(e.target.value) }} />

        <button className="btn btn-primary d-block mt-3 mx-5" onClick={register}>Register</button>

        <span className='d-block text-center mt-3'> <Link to={'/signin'}>already have an account ?</Link> </span>
      </div>
    </div>
  )
}

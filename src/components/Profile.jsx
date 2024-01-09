import React, { useEffect, useState } from 'react'
import useData from '../hooks/useData'
import { useNavigate } from 'react-router-dom';
import "./Profile.css"


export default function Profile() {

  const [postData, setPostData] = useState("");
  const navigate = useNavigate();
  let { users, setUsers, loginUser } = useData();

  const LoginFound = users.find((items) => { return items.userName == loginUser });

  useEffect(
    () => {
      if (loginUser == "") {
        navigate("/")
      }
    }, [post]);


  function post() {
    LoginFound.posts.unshift(postData);
    navigate("/profile");
    setPostData("")
  }

  const profileChange = () => {
    LoginFound.profilURL = prompt("URL");
    navigate("/profile");
  }


  return (
    <div className="container">


      {
        LoginFound ?
          <>
            <div className="rightSide rounded">
              <img className='mt-3 d-block rounded-circle m-auto' src={LoginFound.profilURL} alt="" width={80} height={80} />
              <button className='mt-3 d-block m-auto btn btn-danger' onClick={profileChange}>Change</button>
              <h1 className='mt-3 text-center h4'>{LoginFound.fullName}</h1>


            </div>

            <div className="midSection rounded">

              <div className="create post border border-2 border-dark rounded mt-3 px-4 py-2">
                <input value={postData} type="text" className='d-block m-auto p-2 w-100 mt-3' placeholder='Create Your Post' onChange={(e) => { setPostData(e.target.value) }} />
                <button className="btn btn-primary d-block w-100 mt-3" onClick={post}>Post</button>
              </div>

              {
                LoginFound.posts.map((items) => {
                  return (
                    <>
                      <div className="post border border-2 border-dark rounded mt-3 px-4 py-2">{items}
                        <button className='d-block btn btn-danger'>Delete</button>
                      </div>

                    </>
                  )
                })
              }


            </div>

            <div className="leftSide rounded">

            </div>

          </>




          : <h1>Un Autherized</h1>
      }









    </div>
  )
}

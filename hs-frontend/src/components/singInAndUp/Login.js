import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios";

const Login = (porps) => {

  const[userEmail, setUserEmail] = useState("");
  const[firstPWField, setFirstPWField] = useState("");

  const[IsAccountCreated, setIsAccountCreated] = useState(false);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  }


  const handlePasswordChange = (event) => {
      console.log(event.target.value);
      setFirstPWField(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
        headers:{
          'Content-Type': 'application/json',
        },
        // crossorigin: true,
        withCredentials: true
    }

    var postBody = JSON.stringify({email: userEmail,username: userEmail, password: firstPWField});

    axios.post("https://localhost:5001/userAPI/login", postBody, requestOptions)
        .then(resp => console.log(resp.data));
    setIsAccountCreated(true)
  }


  let content = (
      <WholePage className="DivOfTheForm">
            <StyledForm action="#" method="post" onSubmit={handleSubmit}>
              <h2>Log In</h2>
              <p>
                  <label htmlFor="Email" className="floatLabel">Email</label>
                  <input id="Email" name="Email" type="text" onChange={handleEmailChange}/>
              </p>
              <p>
                  <label htmlFor="password" className="floatLabel">Password</label>
                  <input id="password" name="password" type="password" onChange={handlePasswordChange}/>
              </p>
              <p>
                  <input type="submit" value="Login" id="submit" />
              </p>
          </StyledForm>
        </WholePage>
  )

  return content;
}



const StyledForm = styled.form`
    background: #fff;
    padding: 4em 4em 2em;
    max-width: 400px;
    margin: 50px auto 0;
    box-shadow: 0 0 1em #222;
    border-radius: 2px;

    h2 {
        margin:0 0 50px 0;
        padding:10px;
        text-align:center;
        font-size:30px;
        color:darken(#e5e5e5, 50%);
        border-bottom: solid 2px #e5e5e5;
      }
      p {
        margin: 0 0 3em 0;
        position: relative;
      }
      input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        outline: none;
        margin:0;
      }
      input[type="text"],
      input[type="password"] {
        background: #fff;
        border: 1px solid #dbdbdb;
        font-size: 1.6em;
        padding: .8em .5em;
        border-radius: 2px;
      }

      input[type="submit"] {
        background: #757575;
        border-radius: 4px;
        border: none;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 2em;
        line-height: 1.0em;
        margin: 2em 0 0;
        outline: none;
        padding: .8em 0;
        text-shadow: 0 1px #68B25B;
      }
      input[type="submit"]:hover {
        background: rgba(148,175,101,1);
      }

      label{
        position: absolute;
        left: 8px;
        color: #999;
        display: inline-block;
        padding: 4px 10px;
        font-weight: 400;
        @include transition(color .3s, top .3s, background-color .8s);
        &.floatLabel{
          top: -11px;
          background-color: rgba(255,255,255,0.8);
          font-size: 14px;
        }
        }

`

const WholePage = styled.div`
    padding-top: 70px;

`


export default Login;
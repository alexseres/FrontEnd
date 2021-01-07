import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";

 const Registration = (props) => {

    const[longPW, setLongPW] = useState(false);
    const[equalPWs, setEqualPWs] = useState(false);

    const[IsAccountCreated, setIsAccountCreated] = useState(false);

    const[userEmail, setUserEmail] = useState("");
    const[userName, setUserName] = useState("");

    const[firstPWField, setFirstPWField] = useState("");
    const[confirmPWField, setConfirmPWField] = useState("");


    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    }


    const saveFirstPWFieldValueOnChange = (event) => {
        console.log(event.target.value);
        if(event.target.value.length > 6 && event.target.value.length !== 0) {
            setFirstPWField(event.target.value);
            setLongPW(true); 
        } 
        else
        {
            setFirstPWField(event.target.value);
            setLongPW(false); 
        }
    }

    const saveConfirmPWFieldOnChange = (event) => {

        setConfirmPWField(event.target.value);

        if (firstPWField === event.target.value) {
            setEqualPWs(true);
        }
        else
        {
            setEqualPWs(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            headers:{'Content-Type': 'application/json'},
        }

        var postBody = JSON.stringify({email: userEmail, username: userName, password: firstPWField, redirectURL: "/"});

        axios.post("https://localhost:5001/userAPI/registration", postBody, requestOptions)
            .then(resp => console.log(resp.data));

        setIsAccountCreated(true);
    }

    if (IsAccountCreated) {
        return <Redirect to="/" />
    }


    let longEnoughSpan = (<div></div>);
    let passwordEqualSpan = (<div></div>);

    let isDisabled = true;

    
    if (longPW && equalPWs) 
    {
        longEnoughSpan = (
            <InvisibleSpan className="longPWSpan" onChange={saveFirstPWFieldValueOnChange}>Enter a password longer than 6 characters!</InvisibleSpan>
        );

        passwordEqualSpan = (
            <InvisibleSpan className="equalPWSpan" onChange={saveConfirmPWFieldOnChange}>Your passwords do not match!</InvisibleSpan>
        );
        
        isDisabled = false;
    }
    else if (longPW && !equalPWs) 
    {
        longEnoughSpan = (
            <InvisibleSpan className="longPWSpan" onChange={saveFirstPWFieldValueOnChange}>Enter a password longer than 6 characters!</InvisibleSpan>
        );

        passwordEqualSpan = (
            <VisibleSpan className="equalPWSpan" onChange={saveConfirmPWFieldOnChange}>Your passwords do not match!</VisibleSpan>
        );
    }
    else if (!longPW && equalPWs) 
    {
        longEnoughSpan = (
            <VisibleSpan className="longPWSpan" onChange={saveFirstPWFieldValueOnChange}>Enter a password longer than 6 characters!</VisibleSpan>
        );

        passwordEqualSpan = (
            <InvisibleSpan className="equalPWSpan" onChange={saveConfirmPWFieldOnChange}>Your passwords do not match!</InvisibleSpan>
        );
    }
    else 
    {
        longEnoughSpan = (
            <VisibleSpan className="longPWSpan" onChange={saveFirstPWFieldValueOnChange}>Enter a password longer than 6 characters!</VisibleSpan>
        );

        passwordEqualSpan = (
            <VisibleSpan className="equalPWSpan" onChange={saveConfirmPWFieldOnChange}>Your passwords do not match!</VisibleSpan>
        );
    }

    let content = (
        <WholePage className="DivOfTheForm">
             <StyledForm action="#" method="post" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <p>
                    <label htmlFor="Username" className="floatLabel">Username</label>
                    <input id="Username" onChange={handleUserNameChange} name="Username" type="text" />
                </p>
                <p>
                    <label htmlFor="Email" className="floatLabel">Email</label>
                    <input id="Email" onChange={handleEmailChange} name="Email" type="text" />
                </p>
                <p>
                    <label htmlFor="password" className="floatLabel">Password</label>
                    <input id="password" name="password" type="password" onChange={saveFirstPWFieldValueOnChange} />
                    {longEnoughSpan}
                </p>
                <p>
                    <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
                    <input id="confirm_password" name="confirm_password" type="password" onChange={saveConfirmPWFieldOnChange} />
                    {passwordEqualSpan}
                </p>
                <p>
                    <input disabled={isDisabled} type="submit" value="Create My Account" id="submit" />
                </p>
            </StyledForm>
            </WholePage>
    );
    
    return content
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
        border-bottom:solid 1px #e5e5e5;
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
      input[type="text"]:focus,
      input[type="password"]:focus {
        background: #fff
      }
    
      input[type="submit"] {
        background: #757575;
        box-shadow: 0 3px 0 0 darken($button, 10%);
        border-radius: 4px;
        border: none;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 2em;
        line-height: 1.6em;
        margin: 2em 0 0;
        outline: none;
        padding: .8em 0;
        text-shadow: 0 1px #68B25B;
      }
      input[type="submit"]:hover {
        background: rgba(148,175,101,1);
        text-shadow:0 1px 3px darken($button, 30%);
      }
      
      label{
        position: absolute;
        left: 8px;
        top: 12px;
        color: #999;
        font-size: 16px;
        display: inline-block;
        padding: 4px 10px;
        font-weight: 400;
        background-color: rgba(255,255,255,0);
        @include transition(color .3s, top .3s, background-color .8s);
        &.floatLabel{
          top: -11px;
          background-color: rgba(255,255,255,0.8);
          font-size: 14px;
        }
        }
`

const VisibleSpan = styled.span`
    display:block;
    background: #22222240;
    padding: 2px 5px;
    color: #666;

`

const InvisibleSpan = styled.span`
    display: none;
`

const WholePage = styled.div`
    padding-top: 25px;

`

export default Registration;
import "./styles/Login.css"
import React, { useState, FormEvent } from 'react'
import { authUserRequest } from '../api/users.api';
import Layout from './Layout'

const LoginForm = (props: any) => {
  let token;

  const [post, setPost] = useState({
    "email": "",
    "password": ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    authUserRequest(post)
      .catch()
      .then((response) => {
        // console.log(response);
        token = response.data.access_token;
        // console.log("access_token: ", token);
        sessionStorage.setItem("access_token", token);
      })
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };

  return (
    <div className="login-main">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="email">Email</label>
        <input
          className="login-input"
          type="text"
          name="email"
          // placeholder="email@email.em"
          autoComplete="off"
          onChange={handleInput}
          required
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          className="login-input"
          type="password"
          name="password"
          // placeholder="********"
          onChange={handleInput}
          required
        />
        <button className="login-submit-button">Log In</button>
      </form>
      <button className="login-swap-button" onClick={() => props.onFormSwitch("register")}>Register</button>
    </div>
  )
}

export default LoginForm;

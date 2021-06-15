import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import {
  Redirect,
} from "react-router-dom";

import {url} from '../globals'

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function getToken() {
    return localStorage.getItem('token')
  }

 

  async function handleSubmit(e){
    e.preventDefault();
    fetch(url+'token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'username':username, 'password':password})
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        console.log(json);
        console.log(json.token);
        window.location.reload();
      });
  };
  if (getToken()){
    return <Redirect push to={"/home"}/>;
  }
  else{
  return (
    <div className="Login">
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
  }
}

export default Login;
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./shared/firebase";

const Login = () => {
  const navigate = useNavigate();
  const id_ref = useRef(null);
  const pw_ref = useRef(null);
  const LoginFB = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
  };

  return (
    <Container>
      <h1>LOG-IN</h1>
      <label style={{ fontSize: "x-large" }}>
        ID
        <input
          ref={id_ref}
          placeholder="Enter your E-mail"
          style={{
            width: "20vw",
            height: "3vh",
            fontSize: "large",
            marginBottom: "0.5rem",
            marginLeft: "0.5rem",
          }}
        />
      </label>
      <label style={{ fontSize: "x-large" }}>
        PW
        <input
          ref={pw_ref}
          placeholder="Enter your password"
          type="password"
          style={{
            width: "20vw",
            height: "3vh",
            fontSize: "large",
            marginBottom: "0.5rem",
            marginLeft: "0.5rem",
          }}
        />
      </label>
      <br />
      <Buttons>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/");
            LoginFB();
          }}
          style={{ marginTop: "1%" }}
        >
          LOG-IN
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/");
          }}
        >
          CANCEL
        </Button>
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  margin-top: 20vh;
  width: 40vh;
  height: 50vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default Login;

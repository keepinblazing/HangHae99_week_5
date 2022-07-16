import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./shared/firebase";

 
const Login = () => {
  const navigate = useNavigate();
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const LoginFB = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
  };
  return (
    <Container>
      ID <input ref={id_ref} placeholder="Example@example.com" /> <br />
      PW <input ref={pw_ref} placeholder="Enter your password" type="password"/> <br />
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/");
          LoginFB();
        }}
      >
        LOG-IN
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  margin-top: 5%;
  width: 800px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Login;

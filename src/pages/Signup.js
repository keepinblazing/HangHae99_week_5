import React, { useRef } from "react";
import { auth } from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../shared/firebase";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const name_ref = useRef(null);
  const id_ref = useRef(null);
  const pw_ref = useRef(null);
  const navigate = useNavigate();
  const join = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    const user_doc = await addDoc(collection(db, "users"), {
      user_id: id_ref.current.value,
      name: name_ref.current.value,
    });
  };

  return (
    <Container>
      <h1>SIGN UP</h1>
      <label style={{ fontSize: "x-large" }}>
        NAME
        <input
          ref={name_ref}
          name="name"
          placeholder="Enter your name"
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
        ID
        <input
          ref={id_ref}
          placeholder="Enter your E-mail"
          name="id"
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
          name="password"
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
            join();
          }}
        >
          JOIN
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
  width: 40vw;
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

export default Signup;

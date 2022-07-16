import React from "react";
import { auth } from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./shared/firebase";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const name_ref = React.useRef(null);
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
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
      NAME <input ref={name_ref} />
      <br />
      ID <input ref={id_ref} placeholder="Example@example.com" />
      <br />
      PW{" "}
      <input ref={pw_ref} placeholder="Enter your password" type="password" />
      <br />
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/");
          join();
        }}
      >
        JOIN
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

export default Signup;

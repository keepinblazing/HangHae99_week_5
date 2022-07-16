import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (

    <Container>
      ID : <input /> <br/>
      PW : <input /> <br/>
      <Button variant="outlined"
        onClick={() => {history.push("/");
        }}>
        LOG-IN
        </Button>
    </Container>
  );
};

const Container = styled.div`

margin : auto;
margin-top : 5%;
width : 800px;
height : 800px;
border : 1px solid black;
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;

`;

export default Login;

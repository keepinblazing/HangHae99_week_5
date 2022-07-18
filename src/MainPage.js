import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";


const Mainpage = () => {
    const navigate = useNavigate();

  return (
    



    <Write onClick={()=> navigate("/Write")}>
      <FontAwesomeIcon
        icon={faPen}
        style={{ color: "white", fontSize: "large" }}
      />
    </Write>
  );
};

const Write = styled.button`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  position: fixed;
  right: 2%;
  bottom: 10%;
  border: transparent;
  cursor: pointer;
`;

export default Mainpage;

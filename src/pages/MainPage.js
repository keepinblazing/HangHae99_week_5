/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPostFB } from "../redux/modules/post";

const Mainpage = () => {
  const navigate = useNavigate();
  const post_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostFB());
  }, []);

  return (
    <>
      <Container>
        {post_list.map((list, index) => {
          return (
            <Feed
              key={index}
              onClick={() => {
                navigate("/detail/" + index);
              }}
            >
              <img
                src={list.image_url}
                style={{ width: "25vw", height: "25vh", objectFit: "cover" }}
              ></img>
              <div>{list.content}</div>
            </Feed>
          );
        })}
      </Container>
      <Write onClick={() => navigate("/Write")}>
        <FontAwesomeIcon
          icon={faPen}
          style={{ color: "white", fontSize: "large" }}
        />
      </Write>
    </>
  );
};

const Container = styled.div`
  margin: auto;
  margin-top: 8vh;
  width: 60vw;
  height: 90vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Feed = styled.div`
  margin-top: 8vh;
  width: 55vw;
  height: 50vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

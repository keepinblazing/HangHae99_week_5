/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { deletePostFB} from "../redux/modules/post";

const DetailPage = () => {
  const index = useParams();
  const params = useParams();
  const post_index = params.index;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post_list = useSelector((state) => state.post.list);

  return (
    <>
      <Container>
        <img src={post_list[post_index].image_url} style = {{width : "50vw", height : "50vh"}}></img>

        {post_list[post_index].content}

        <Buttons>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
              dispatch(deletePostFB(post_list[post_index].id));
            }}
            style={{ marginTop: "1%" }}
          >
            DELETE
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/detail/:index/Modify");
            }}
          >
            MODIFY
          </Button>
        </Buttons>
      </Container>
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
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default DetailPage;

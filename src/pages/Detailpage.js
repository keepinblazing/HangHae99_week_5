/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const DetailPage = () => {
    const index = useParams();
    const params = useParams();
    const post_index = params.index;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const post_list = useSelector((state) => state.post.list)

    console.log(post_list)
    return (
        <>
        <Container>
            {post_list[post_index].content}
            <img src = {post_list[post_index].image_url}></img>



    

        </Container>

        </>

    )

}

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





export default DetailPage;
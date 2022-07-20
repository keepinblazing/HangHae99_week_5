import React, { useRef, useState } from "react";
import styled from "styled-components";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addPostFB } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../shared/firebase";

const Write = () => {
  const storage = getStorage();
  const file_link_ref = useRef(null);
  const content_ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [is_login, setIsLogin] = React.useState(false);
  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  const uploadFB = async (e) => {
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);
    file_link_ref.current = { url: file_url };
  };

  return (
    <Container>
      <h1 style={{ position: "fixed", top: "10vh" }}>게시글 작성하기</h1>

      <input
        type="file"
        onChange={uploadFB}
        style={{ position: "fixed", top: "20vh" }}
      />

      <h2 style={{ position: "fixed", top: "25vh" }}>이미지 위치</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5%",
          position: "fixed",
          top: "30vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "11vw",
            height: "10vh",
            border: "1px solid black",
            marginRight: "5%",
          }}
        >
          <Checkbox color="default" />
          왼쪽
        </div>
        <div
          style={{
            width: "11vw",
            height: "10vh",
            border: "1px solid black",
            marginRight: "5%",
          }}
        >
          <Checkbox color="default" />
          오른쪽
        </div>
        <div
          style={{ width: "11vw", height: "10vh", border: "1px solid black" }}
        >
          <Checkbox color="default" />
          아래
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          ref={content_ref}
          style={{
            width: "35vw",
            height: "30vh",
            position: "fixed",
            top: "50vh",
          }}
        ></input>
        
      </div>
      <button
        style={{
          width: "10vw",
          height: "5vh",
          marginTop: "1%",
          position: "fixed",
          top: "80vh",
        }}
        type="submit"
        onClick={() => {
          navigate("/");
          dispatch(
            addPostFB({
              content: content_ref.current.value,
              image_url: file_link_ref.current.url,
              time : new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '')
            })
          );
        }}
      >
        작성하기
      </button>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  margin-top: 8vh;
  width: 40vw;
  height: 90vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Write;

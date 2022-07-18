import React, { useState , useRef} from "react";
import styled from "styled-components";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { db } from "./shared/firebase";

const Write = () => {
  const storage = getStorage();

  const file_link_ref = useRef(null);
  const content_ref = useRef(null);

  const uploadFB = async (e) => {
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(uploaded_file.ref);
    file_link_ref.current = { url: file_url };
    
    const add_Post = await addDoc(collection(db, "posts"), {
      image_url: file_link_ref.current.url,
      
    });
  };

    // const fileBtn = (e) => {
    //   file_link_ref.current.click();
    // };
  return (
    <Container>
      <input
        type="file"
        onChange={uploadFB}
        style={{ position: "fixed", top: "25vh"}}
        
      />
      <img src = {file_link_ref}></img>
      {/* <button style={{ position: "fixed", top: "25vh"}}
      onClick={()=> {fileBtn();}}>image upload</button> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom : "5%",
          position : "fixed",
          top : "30vh",
        }}
      >
        <div
          style={{
            width: "11vw",
            height: "10vh",
            border: "1px solid black",
            marginRight : "5%"
          }}
        ></div>
        <div
          style={{ width: "11vw", height: "10vh", border: "1px solid black",marginRight : "5%" }}
        ></div>
        <div
          style={{ width: "11vw", height: "10vh", border: "1px solid black" }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input ref = {content_ref}style={{ width: "35vw", height: "30vh",
      position : "fixed",
      top : "50vh"}}></input>
        <button style={{ width: "10vw", height: "5vh", marginTop: "1%" ,
      position : "fixed", top : "80vh"}}>
          게시글 작성하기
        </button>
      </div>
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

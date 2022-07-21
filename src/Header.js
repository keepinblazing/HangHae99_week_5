import React from "react";

import styled from "styled-components";
import oc from "open-color";

import { shadow, media } from "./styleUtil";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./shared/firebase";

const Header = () => {
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

  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <button
            style={{
              backgroundColor: "transparent",
              border: "transparent",
              cursor: "pointer",
              position: "fixed",
              left: `1%`,
            }}
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon={faHouse} style={{ fontSize: "x-large" }} />
          </button>

          {is_login === false ? (
            <div style={{ position: "fixed", right: "1%" }}>
              <Button variant="outlined" onClick={() => navigate("/Signup")}>
                JOIN
              </Button>
              <Button variant="outlined" onClick={() => navigate("/Login")}>
                LOG-IN
              </Button>
            </div>
          ) : (
            <div style={{ position: "fixed", right: "1%" }}>
              <Button
                variant="outlined"
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
              >
                LOG-OUT
              </Button>
            </div>
          )}
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </Positioner>
  );
};

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  ${media.wide`
        width: 992px;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.black[6]}, ${oc.white[5]});
`;

export default Header;

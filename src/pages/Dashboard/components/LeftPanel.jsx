import React, { useEffect } from "react";
import CryptocredLogo from "../../../assets/cryptocredLogoOrange.png";
import homeIcon from "../../../assets/homeIcon.png";
import transacIcon from "../../../assets/transacationIcon.png";
import settingsIcon from "../../../assets/settingsIcon.png";
import profileIcon from "../../../assets/userIcon.png";
import logoutIcon from "../../../assets/logoutIcon.png";
import { Box, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";

const DashButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "100px",
  display: "flex",
  "&:hover": {
    //   backgroundColor: purple[700],
    backgroundImage: "linear-gradient(to bottom right, #F6851B, #904E10)",
  },
  "&:pressed": {
    backgroundImage: "linear-gradient(to bottom right, #FFF, #FFF)",
  },
}));

function LeftPanel() {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = useAuth();


  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuth(false);
    setUser(null);
  };

  const getW = async()=>{
        const res = await axios.get("http://api.weatherapi.com/v1/current.json?key=b5c68217e84e49498b9211538240312&q=Bhopal");
        console.log(res.data);
  }

  useEffect(()=>{
        getW();
  },[]);

  return (
    <Box style={{ width: "300px", height: "600px" }}>
      <Box>
        <img
          style={{ height: "141px", margin: "10%" }}
          src={CryptocredLogo}
          alt="cryptocredLogo"
        ></img>
      </Box>
      {/*cryptocred logo*/}

      {/*Dashboard button*/}
      <DashButton onClick={() => navigate("/dashboard")}>
        <img
          style={{ objectFit: "contain" }}
          src={homeIcon}
          alt="home icon"
        ></img>
        <Box
          style={{ color: "white" }}
          sx={{ fontSize: "25px", margin: "10px" }}
        >
          Dashboard
        </Box>
      </DashButton>

      {/*Transaction button*/}
      <DashButton onClick={() => navigate("/transaction")}>
        <img
          style={{ objectFit: "contain" }}
          src={transacIcon}
          alt="home icon"
        ></img>
        <Box
          style={{ color: "white" }}
          sx={{ fontSize: "25px", margin: "10px" }}
        >
          Transaction
        </Box>
      </DashButton>

      {/*Settings button*/}
      <DashButton>
        <img
          style={{ objectFit: "contain" }}
          src={settingsIcon}
          alt="home icon"
        ></img>
        <Box
          style={{ color: "white" }}
          sx={{ fontSize: "25px", margin: "10px" }}
        >
          Settings
        </Box>
      </DashButton>

      {/*Profile button */}
      <DashButton>
        <img
          style={{ objectFit: "contain" }}
          src={profileIcon}
          alt="home icon"
        ></img>
        <Box
          style={{ color: "white" }}
          sx={{ fontSize: "25px", margin: "10px" }}
        >
          Profile
        </Box>
      </DashButton>

      {/*Logout button */}
      <DashButton onClick={handleLogout}>
        <img
          style={{ objectFit: "contain" }}
          src={logoutIcon}
          alt="home icon"
        ></img>
        <Box
          style={{ color: "white" }}
          sx={{ fontSize: "25px", margin: "10px" }}
        >
          Logout
        </Box>
      </DashButton>
    </Box>
  );
}

export default LeftPanel;

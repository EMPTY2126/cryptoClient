import React, { useState } from "react";
import "./Login.css";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import loginAsset from "../../assets/loginAsset.png";
import googleIcon from "../../assets/Google.png";
import { Link, useNavigate } from "react-router-dom";
import metamaskIcon from "../../assets/Metamask.png";
import cryptocredLogo from "../../assets/cryptocredLogoOrange.png";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    backgroundColor: "#e9e8fc",
    borderRadius: "20px",
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-input": {
      fontSize: "20px",
      height: "35px",
    },
    "& .MuiInputLabel-root": {
      fontSize: "30px",
      height: "35px",
    },
  },
}));

function LoginPage() {
  const textFieldStyles = {
    width: "100%",
    height: "80px",
    borderRadius: "20px",
    borderColor: "white",
    mt: "20px",
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setIsAuth, setUser } = useAuth();

  const loginHandler = async () => {
    console.log(email, pwd);
    const creds = { userEmail: email, pwd: pwd };
    try {
      const res = await axios.post("http://localhost:5000/api/login", creds, {
        withCredentials: true,
      });
      console.log(res.data);
      if (res.data.isSuccess) {
        setIsAuth(true);
        setUser(res.data.user.userEmail);
        navigate("/");
      }
    } catch (error) {
    }
  };

  const googleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  const googleSuccess = async (response) => {
    try {
      const tokenId = response.access_token;
      const res = await axios.post(
        "http://localhost:5000/api/auth/google",
        { tokenId },
        { withCredentials: true }
      );

      if (res.data.isSuccess) {
        setIsAuth(true);
        setUser(res.data.user.userEmail);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleSuccess,
    onError: googleFailure,
  });
  return (
    <Box
      style={{ margin: "45px auto 0 auto", width: "1519px", height: "780px" }}
      sx={{
        bgcolor: "#FFFFFF",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/*White Box*/}
      <Box
        style={{ width: "700px", height: "740px", margin: "30px" }}
        sx={{ borderRadius: "20px" }}
      >
        {" "}
        {/*Box for Login page image */}
        <img
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          src={loginAsset}
          alt="loginPageImage"
        ></img>
      </Box>

      {/*Box for entry fields*/}
      <Box
        style={{ width: "700px", height: "800px", margin: "30px" }}
        sx={{ borderRadius: "20px" }}
      >
        <img
          style={{ width: "100%", height: "150px", objectFit: "contain" }}
          src={cryptocredLogo}
          alt="MainLogo"
        ></img>

        <Box
          style={{ fontFamily: "Italiana", fontSize: "48px", color: "#433D8B" }}
          sx={{ textAlign: "center" }}
        >
          Welcome back
        </Box>
        <Box
          style={{ fontSize: "15px", color: "#A0A0A4" }}
          sx={{ textAlign: "center" }}
        >
          Please login to your account
        </Box>

        {/*Input fields*/}
        <Box style={{ margin: "2% 2% 2% 2%" }}>
          <CustomTextField
            label="Email Address"
            variant="filled"
            id="standard-basic"
            onChange={(e) => setEmail(e.target.value)}
            sx={textFieldStyles}
          />
          <CustomTextField
            label="Password"
            variant="filled"
            type="password"
            id="standard-basic"
            onChange={(e) => setPwd(e.target.value)}
            sx={textFieldStyles}
          />
        </Box>

        {/*Forget password option */}
        <Box
          style={{
            textAlign: "right",
            fontFamily: "inter",
            fontSize: "24px",
            margin: "1%",
            color: "#17153B",
          }}
        >
          Forget password ?
        </Box>

        {/*Login Button*/}
        <Button
          style={{
            width: "100%",
            height: "67px",
            fontSize: "32px",
            backgroundColor: "#352A71",
            borderRadius: "20px",
          }}
          onClick={loginHandler}
          variant="contained"
        >
          Login
        </Button>
        <Divider
          style={{ marginTop: "2%", color: "#000", fontFamily: "Inter" }}
        >
          Or Login with
        </Divider>
        {/*Google and Metamask buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button
            style={{
              width: "80%",
              height: "61px",
              fontSize: "24px",
              color: "#000",
              borderColor: "#000",
              borderRadius: "20px",
            }}
            onClick={() => googleLogin()}
            variant="outlined"
          >
            <img src={googleIcon} alt="googleIcon"></img>&nbsp; Google
          </Button>
          <Button
            style={{
              width: "80%",
              height: "61px",
              fontSize: "24px",
              color: "#000",
              borderColor: "#000",
              borderRadius: "20px",
            }}
            variant="outlined"
          >
            <img src={metamaskIcon} alt="metamaskIcon"></img>&nbsp; Metamask
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div className="loginSignup">
            Don't have an account?{" "}
            <Link to="/signup" className="loginSignupC">
              Signup
            </Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;

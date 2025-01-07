import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import signupAsset from "../../assets/signupAsset.png";
import googleIcon from "../../assets/Google.png";
import metamaskIcon from "../../assets/Metamask.png";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

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

function SignUp() {
  const textFieldStyles = {
    width: "100%",
    height: "80px",
    borderRadius: "20px",
    borderColor: "white",
    mt: "20px",
  };

  const buttonStyle = {
    width: "100%",
    height: "61px",
    fontSize: "24px",
    color: "#000",
    borderColor: "#000",
  };

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignUp = async () => {
    console.log(rePassword)
    const data = {
      userName: `${firstName} ${lastName}`,
      userEmail: email,
      userPhone: phone,
      pwd: password,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/signup",data)
      console.log(res.data);
      if(res.data.isSuccess) navigate("/login");
    } catch (error) {
      console.log("error in posting signup")
    }

  };

  return (
    <Box
      style={{ margin: "45px auto 0 auto", width: "80vw", height: "858px" }}
      sx={{
        bgcolor: "#FFFFFF",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{ width: "700px", height: "800px", margin: "30px" }}
        sx={{ borderRadius: "20px", padding: "40px" }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <CustomTextField
            label="First Name"
            variant="filled"
            id="standard-basic"
            sx={textFieldStyles}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <CustomTextField
            label="Last Name"
            variant="filled"
            id="standard-basic"
            sx={textFieldStyles}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <CustomTextField
          label="Email"
          variant="filled"
          id="standard-basic"
          sx={textFieldStyles}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomTextField
          label="Password"
          variant="filled"
          type="password"
          id="standard-basic"
          sx={textFieldStyles}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomTextField
          label="Confirm Password"
          variant="filled"
          type="password"
          id="standard-basic"
          sx={textFieldStyles}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <CustomTextField
          label="Phone Number"
          variant="filled"
          id="standard-basic"
          sx={textFieldStyles}
          onChange={(e) => setPhone(e.target.value)}

        />

        <Button
          style={{
            width: "100%",
            height: "67px",
            fontSize: "32px",
            marginLeft: "0px",
            backgroundColor: "#352A71",
            borderRadius: "20px",
          }}
          sx={{ mt: "40px", mb: "20px" }}
          variant="contained"
          onClick={handleSignUp}
        >
          Signup
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button
            style={buttonStyle}
            sx={{ borderRadius: "20px" }}
            variant="outlined"
          >
            <img src={googleIcon} alt="googleIcon"></img>&nbsp; Google
          </Button>
          <Button
            style={buttonStyle}
            sx={{ borderRadius: "20px" }}
            variant="outlined"
          >
            <img src={metamaskIcon} alt="metamaskIcon"></img>&nbsp; Metamask
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div className="loginSignup">
            Alreay registred?{" "}
            <Link to="/login" className="loginSignupC">
              Login
            </Link>
          </div>
        </Box>
      </Box>

      <Box
        style={{ width: "700px", height: "800px", margin: "30px" }}
        sx={{ borderRadius: "20px" }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
          src={signupAsset}
          alt="signupPageImage"
        ></img>
      </Box>
    </Box>
  );
}

export default SignUp;

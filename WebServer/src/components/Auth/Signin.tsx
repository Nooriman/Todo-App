import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import HorizontalLineWithText from "../HorizontalLineWithText/HorizontalLineWithText";
import "../../style/Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface loginSchema {
  email: string;
  password: string;
}

type ChildProps = {
  onButtonClick: (data: string) => void;
};

export default function Signin({ onButtonClick }: ChildProps) {
  const navigate = useNavigate();
  const [userCred, setUserCred] = useState<loginSchema>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignIn = async () => {
    console.log(userCred);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        userCred
      );
      if (response.data.message === "Authentication successful") {
        console.log("response", response);
        navigate("/main");
      }
    } catch (error) {
      console.log("err");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login");
  };

  const handleFacebookLogin = () => {
    alert("Facebook Login");
  };

  return (
    <div className="SignInComponent">
      <h1>Sign In</h1>
      <TextField
        variant="outlined"
        label="Email"
        value={userCred.email}
        size="small"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserCred({ ...userCred, email: e.target.value })
        }
      />

      <FormControl size="small" variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserCred({ ...userCred, password: e.target.value })
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button onClick={handleSignIn} variant="contained">
        Sign In
      </Button>
      <HorizontalLineWithText text="or" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            onClick={handleGoogleLogin}
            sx={{ width: "100%" }}
            variant="contained"
            color="secondary"
          >
            Google
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleFacebookLogin}
            sx={{ width: "100%" }}
            variant="contained"
            color="secondary"
          >
            Facebook
          </Button>
        </Grid>
      </Grid>

      <Button onClick={() => onButtonClick("signup")}>
        Don't have an account? Sign Up
      </Button>
    </div>
  );
}

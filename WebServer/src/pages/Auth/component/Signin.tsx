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
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import HorizontalLineWithText from "../../../components/HorizontalLineWithText/HorizontalLineWithText";
import "../style/Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import content from '../../../data/content.json';

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
  const [isError, setIsError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        userCred
      );

      if (response.status === 200) navigate("/main");
    } catch (error) {
      setIsError(true);
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
      <h1>{content.auth_label_signIn}</h1>
      <TextField
        error={isError}
        variant="outlined"
        label={content.auth_label_email}
        value={userCred.email}
        size="small"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserCred({ ...userCred, email: e.target.value })
        }
      />

      <FormControl size="small" variant="outlined">
        <InputLabel>{content.auth_label_password}</InputLabel>
        <OutlinedInput
          error={isError}
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
        {content.auth_label_signIn}
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
            {content.auth_label_google}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleFacebookLogin}
            sx={{ width: "100%" }}
            variant="contained"
            color="secondary"
          >
           {content.auth_label_facebook} 
          </Button>
        </Grid>
      </Grid>

      <Button onClick={() => onButtonClick("signup")}>
        {content.auth_account_signup}
      </Button>

      {isError && <Typography align="center" color="error">{content.auth_label_incorrect}</Typography>}
    </div>
  );
}

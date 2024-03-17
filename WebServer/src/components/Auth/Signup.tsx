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
import axios from "axios";
import { ChangeEvent, useState } from "react";
import HorizontalLineWithText from "../HorizontalLineWithText/HorizontalLineWithText";
import "../../style/Auth.css";
import { useNavigate } from "react-router-dom";

interface signupSchema {
  email: string;
  password: string;
}

type ChildProps = {
  onButtonClick: (data: string) => void;
};

export default function Signup({ onButtonClick }: ChildProps) {
    const navigate = useNavigate();
  const [signUpCred, setSignUpCred] = useState<signupSchema>({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();
  const [isUnmatchedPassword, setIsUnmatchedPassword] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpCred({ ...signUpCred, email: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signup",
        signUpCred
      );

      if (response.status === 200) navigate('/main');

    } catch (error) {}
  };

  const handleGoogleLogin = () => {
    alert("Google login");
  };

  const handleFacebookLogin = () => {
    alert("Facebook Login");
  };

  return (
    <div className="SignUpComponent">
      <h1>Sign Up</h1>

      <TextField
        variant="outlined"
        label="Email"
        value={signUpCred.email}
        size="small"
        onChange={handleEmailOnChange}
      />

      <FormControl size="small" variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignUpCred({ ...signUpCred, password: e.target.value })
          }
          error={isUnmatchedPassword}
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

      <FormControl size="small">
        <InputLabel>Confirm Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          error={isUnmatchedPassword}
          onBlur={() =>
            confirmPassword !== signUpCred.password
              ? setIsUnmatchedPassword(true)
              : setIsUnmatchedPassword(false)
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

      <Button variant="contained" onClick={handleSignUp}>
        Sign Up
      </Button>

      <HorizontalLineWithText text="or" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            onClick={handleGoogleLogin}
            sx={{ width: "100%" }}
            variant="contained"
            color="secondary"
            disabled
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
            disabled
          >
            Facebook
          </Button>
        </Grid>
      </Grid>
      {/* <FormGroup>
        <FormControlLabel
          required
          control={<CheckBox onChange={handleCheckboxChange} color="primary"  />}
          label="Accepts Terms & Condition"
        />
      </FormGroup> */}
      <Button color="primary" onClick={() => onButtonClick("signin")}>
        Already have an account? Sign In
      </Button>

      {isUnmatchedPassword && (
        <Typography align="center" color="error">
          Password does not match. Please re-type the password
        </Typography>
      )}
    </div>
  );
}

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
import HorizontalLineWithText from "../../../components/HorizontalLineWithText/HorizontalLineWithText";
import "../style/Auth.css";
import { useNavigate } from "react-router-dom";
import content from '../../../data/content.json';

interface signupSchema {
  email: string;
  password: string;
}

type SignUpProps= {
  onButtonClick: (data: string) => void;
};

export default function Signup({ onButtonClick }: SignUpProps) {
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

    } catch (error) {
        console.log('error: ', error)
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login");
  };

  const handleFacebookLogin = () => {
    alert("Facebook Login");
  };

  return (
    <div className="SignUpComponent">
      <h1>{content.auth_label_signUp}</h1>

      <TextField
        variant="outlined"
        label={content.auth_label_email}
        value={signUpCred.email}
        size="small"
        onChange={handleEmailOnChange}
      />

      <FormControl size="small" variant="outlined">
        <InputLabel>{content.auth_label_password}</InputLabel>
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
        <InputLabel>{content.auth_label_confirmPassword}</InputLabel>
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
      {content.auth_label_signUp}
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
            {content.auth_label_google}
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
           {content.auth_label_facebook} 
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
        {content.auth_account_signin};
      </Button>

      {isUnmatchedPassword && (
        <Typography align="center" color="error">
            {content.auth_label_unmatchPassword}
        </Typography>
      )}
    </div>
  );
}

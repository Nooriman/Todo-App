import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import HorizontalLineWithText from "../HorizontalLineWithText/HorizontalLineWithText";
import '../../style/Auth.css';

interface signupSchema {
    email: string,
    password:string,
    confirmPassword: string,
    isChecked: boolean
}

type ChildProps = {
    onButtonClick: (data:string) => void;
}

export default function Signup({onButtonClick}:ChildProps) {

    const [signUpCred, setSignUpCred] = useState<signupSchema>({
        email: '',
        password: '',
        confirmPassword: '',
        isChecked: false
    })

    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const handleEmailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpCred({...signUpCred, email: e.target.value});
    }

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpCred({...signUpCred, isChecked: e.target.checked})
    }

    const handleSignUp = () => {
        // handle proper signup to AWS Cognito
        alert(JSON.stringify(signUpCred));
    }

    const handleGoogleLogin = () => {
        alert('Google login');
    }

    const handleFacebookLogin = () => {
        alert('Facebook Login');
    }

    return (
        <div className="SignUpComponent">
            <h1>Sign Up</h1>

            <TextField variant="outlined" label="Email" value={signUpCred.email} size="small" onChange={handleEmailOnChange} />

            <FormControl size='small' variant='outlined'>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setSignUpCred({...signUpCred, password: e.target.value})}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={() => setShowPassword(!showPassword)}
                                edge='end'>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    } />
            </FormControl>

            <FormControl size='small'>
                <InputLabel>Confirm Password</InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setSignUpCred({...signUpCred, confirmPassword: e.target.value})}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={() => setShowPassword(!showPassword)}
                                edge='end'>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    } />
            </FormControl>

            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>

            <HorizontalLineWithText text='or' />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button onClick={handleGoogleLogin} sx={{ width: '100%' }} variant='contained' color='secondary'>Google</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleFacebookLogin} sx={{ width: '100%' }} variant='contained' color='secondary'>Facebook</Button>
                </Grid>
            </Grid>
            {/* <FormGroup>
                <FormControlLabel required control={<CheckBox onChange={handleCheckboxChange} color="primary"/>} label="Accepts Terms & Condition" />
            </FormGroup> */}
            <Button color='primary' onClick={() => onButtonClick('signin')}>Already have an account? Sign In</Button>
        </div>
    )
}
// import React, {useState} from "react";
// import {Avatar , Button,Paper , Grid, Typography, Container} from '@material-ui/core';
// import { GoogleLogin } from 'react-google-login';
// import { useDispatch } from "react-redux";
// import {useNavigate } from 'react-router-dom';

// import Icon from './icon';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import useStyles from './styles';
// import Input from "./Input";

//clientId="649011429317-ak3lhid0v0opcvm8rg27lnn0hhasdv1t.apps.googleusercontent.com"


// const Auth = () =>{

//     const classes = useStyles();
//     const [showPassword , setShowPassword] = useState(false);
//     const [isSignup, setIsSignup] = useState(false);
//     const dispatch = useDispatch();
//     const history = useNavigate();

//     const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword );

//     const handleSubmit = () => {

//     };

//     const handleChange =() => {

//     };
//     const switchMode = () => {
//         setIsSignup((prevIsSignup) => !prevIsSignup);
//         handleShowPassword(false);
//     };

//     const googleSuccess = async(res) => {
//         const result = res?.profileObj ;
//         const token = res?.tokenId;

//         try{

//             dispatch({type : 'AUTH', data : {result , token }});

//             history.push('/');
//         } catch(error){
//             console.log(error);
//         }
//     };

//     const googleFailure = () => {
//         console.log("Google Sign In was unsuccessful. Try again later.");
//     };

//     return(
//         <Container component="main" maxWidth="xs">
//             <Paper className={classes.paper} elevation={3}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
//                 <form className={classes.form} onSubmit={handleSubmit}>
//                     <Grid container spacing={2} >
//                         {
//                             isSignup && (
//                                 <>
                                    
//                                 <Input name="firstName" label="First Name" handleChange={handleChange} half/>
//                                 <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                                    
//                                 </>
//                             )
//                         }
//                         <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
//                         <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
//                         { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
//                     </Grid>
//                     <Button type = "submit" fullWidth variant="contained" color="primary" className={classes.submit}>
//                         {isSignup ? 'Sign Up' : 'Sign In'}
//                     </Button>
//                     <GoogleLogin
//                         clientId="649011429317-ak3lhid0v0opcvm8rg27lnn0hhasdv1t.apps.googleusercontent.com"
//                         render={(renderProps) => (
//                             <Button className={classes.googleButton} color="Primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>
//                         )}

//                         onSuccess={googleSuccess}
//                         onFailure={googleFailure}
//                         cookiePolicy="single_host_origin"
//                     />
//                     <Grid container justify="flex-end">
//                         <Grid item>
//                             <Button onClick={switchMode}>
//                                 {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Paper>
//         </Container>
//     )
// }

// export default Auth

// import libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import action types
import { AUTH } from '../../constants/actionTypes';
// import dotenv
import dotenv from "dotenv";
// import icon
import Icon from './icon';
// import styles
import useStyles from './styles';
dotenv.config();
const SignUp = () => {
  // eslint-disable-next-line 
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();

  // eslint-disable-next-line 
  const switchMode = () => {

    setIsSignup((prevIsSignup) => !prevIsSignup);
  };


  // google success info
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };


  // Error info if login fails
  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  // JSX

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6">Login with Google accounts</Typography>

        <GoogleLogin
          //clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // Google Client id must be your own 
          clientId="649011429317-ak3lhid0v0opcvm8rg27lnn0hhasdv1t.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess} // calling google success
          onFailure={googleError}  // google error
          cookiePolicy="single_host_origin"
        />


      </Paper>
    </Container>
  );
};

export default SignUp;
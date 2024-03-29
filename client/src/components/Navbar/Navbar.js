
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

// import images
import memoriesLogo from '../../images/memoriesLogo.png';
import memoriesText from '../../images/memoriesText.png';
// import actions
import * as actionType from '../../constants/actionTypes';
// import styles
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const classes = useStyles();

  // logout 
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line 
  }, [location]);
  // JSX code
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" />
        <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import React, { useState,useEffect } from 'react';
// import {Link, useNavigate, useLocation} from 'react-router-dom';
// import { AppBar,Typography , Toolbar,Avatar, Button } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import useStyles from './styles';
// import memories from '../../images/memories.png';

// const Navbar = () => {

//     const classes = useStyles();
//     const[user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//     const dispatch = useDispatch();
//     const history = useNavigate();
//     const location = useLocation();

//     const logout = () => {
//         dispatch({ type : 'LOGOUT'});

//         history.push('/');

//         setUser(null);
//     };

//     useEffect(() => {
//         const token = user?.token;

//         //JWT ...(json web token)

//         setUser(JSON.parse(localStorage.getItem('profile')));
//     } , [location]);

//     return(
//     <AppBar className={classes.appBar} position="static" color="inherit">
//     <div className={classes.brandContainer}>
//         <Typography component={Link} to="/" className={classes.heading} variant="h2" align="centre">Memories</Typography>
//         <img className={classes.image} src={memories} alt="memories" height="60" />
//     </div>
//     <Toolbar className={classes.toolbar}>
//         {user? (
//             //if the user logged in
//             <div className={classes.profile}>
//                 <Avatar className={classes.Avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
//                 <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
//                 <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
//             </div>
//         ) : (
//             //else will direct it to the page where it needs authentication
//             <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
//         )}
//     </Toolbar>
//     </AppBar>
//     );
// }

// export default Navbar
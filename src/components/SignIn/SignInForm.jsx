import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  Grid,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import BtnFancy from '../BtnFancy';

const SignInForm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1.25),
      width: '100%',
    },
    inputLabel: {
      backgroundColor: 'white',
      padding: '0 12px 0 8px',
    },
  }));

  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = () => alert("User DataBase not yet availalbe")

  return (
    <Grid item>
      <form className={classes.root} onSubmit={onSubmit}>

          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email" className={classes.inputLabel}>Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              value={values.email}
              onChange={handleChange('email')}
              labelWidth={70}
            />
          </FormControl>
  
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" className={classes.inputLabel}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
            <FormHelperText id="forgot-password-helper-text">
              <a onClick={(e) => {e.preventDefault(); alert("that sucks"); }}>Forgot Password?</a>
            </FormHelperText>
          </FormControl>

          <BtnFancy type="submit">Sign In</BtnFancy>
      </form>
    </Grid>
  );
}

export default SignInForm;

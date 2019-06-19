import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../layout/Footer';

import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        <Link href="/" className={classes.toolbarTitle}>
          World News
        </Link>
      </Typography>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm />
      </div>
      <Box mt={5}>
        <Footer />
      </Box>
    </Container>
  )
}

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { firstName, lastName, username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase 
          .user(authUser.user.uid)
          .set({
            username, 
            email,
          });
      })
      .then(authUser => {
        this.setState({ INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      }) 
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // const classes = useStyles();

    const {
      firstName,
      lastName,
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo ||
    passwordOne === '' || email === '' || username === '';

    return (
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              value={firstName}
              onChange={this.onChange}
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="lname"
              name="lastName"
              value={lastName}
              onChange={this.onChange}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="uname"
              name="username"
              value={username}
              onChange={this.onChange}
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="email"
              name="email"
              value={email}
              onChange={this.onChange}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              id="passwordOne"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              variant="outlined"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="passwordTwo"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isInvalid}
          // className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>

        {error && <p>{error.message}</p>}
      </form>
    );  
  }
}

const SignUpPage = compose(
  withRouter,
  withFirebase,
)(SignUpForm);

export default SignUp

export { SignUpPage }
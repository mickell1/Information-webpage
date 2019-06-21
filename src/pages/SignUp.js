import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';
import * as ROLES from '../constants/roles';

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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpPage />
      </div>
    </Container>
  )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ACCOUNT_EXISTS_ERROR = 'auth/email-already-in-use';

const ACCOUNT_EXISTS_ERROR_MSG = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {}

    if(isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if(error.code === ACCOUNT_EXISTS_ERROR) {
          error.message = ACCOUNT_EXISTS_ERROR_MSG
        }

        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo ||
    passwordOne === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Grid container spacing={2}>
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
              label="Full Name"
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
        </Grid>
        <FormControlLabel
          control={<Checkbox name="isAdmin" value={isAdmin} onChange={this.onChangeCheckbox} color="primary" />}
          label="Admin"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isInvalid}
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

export default SignUp;

export { SignUpPage };
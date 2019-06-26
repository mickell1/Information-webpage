import React, {Component } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withFirebase } from '../Firebase';
import '../../styles/Errors.css';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error })
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state; 

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={this.onSubmit}>
              <TextField
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                label="New Password"
                variant="outlined"
                required
                fullWidth
                id="passwordOne"
              />
              <TextField
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                label="Confirm New Password"
                variant="outlined"
                required
                fullWidth
                id="passwordTwo"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isInvalid}
            >
              Reset My Password
            </Button>

          {error && <p className="error">{error.message}</p>}
        </form>
      </Container>
    );
  }
}

export default withFirebase(PasswordChangeForm);
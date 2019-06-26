import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withFirebase } from '../Firebase';
import '../../styles/Errors.css'

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE}
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>Password Forget</h1>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={2}>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={this.state.email}
                onChange={this.onChange}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
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

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm };
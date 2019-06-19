import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const PasswordForgetPage = () => (
  <div>
    <h1>Password Forget</h1>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
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
    const useStyles = makeStyles(theme => ({
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    // const classes = useStyles();

    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
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

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordForgetPage;

export { PasswordForgetForm };
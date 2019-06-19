import React from 'react';
import Button from '@material-ui/core/Button';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  
  <Button variant="outlined" size="small" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
)

export default withFirebase(SignOutButton);
import React from 'react';
import Box from '@material-ui/core/box'

import { AuthUserContext, withAuthorization } from '../components/Session';
import PasswordChangeForm from '../components/PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {
      authUser => (
        <div>
          <Box ml={60}>
            <h1>Account: {authUser.email}</h1>
          </Box>
          <PasswordChangeForm />
        </div>
      )
    }
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage)
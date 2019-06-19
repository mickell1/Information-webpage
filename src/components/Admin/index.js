import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { passwordForgetForm } from '../PasswordForget';
import passwordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {
      authUser => (
        <div>
          <h1>Account: {authUser.email}</h1>
          <passwordForgetForm />
          <passwordChangeForm />
        </div>
      )
    }
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage)
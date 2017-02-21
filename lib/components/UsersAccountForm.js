import React, { PropTypes, Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

export const UsersAccountForm = ({client}) => {
  return (
    <Accounts.ui.LoginForm 
      onPostSignUpHook={() => client.resetStore()}
      onSignedInHook={() => client.resetStore()}
      onSignedOutHook={() => client.resetStore()}
    />
  )
};

UsersAccountForm.displayName = 'UsersAccountForm';

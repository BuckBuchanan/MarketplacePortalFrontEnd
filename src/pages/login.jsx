import React from 'react';
import LoginForm from '../components/LoginForm';

import {DashboardLayout} from '../components/Layout';

const LoginPage = () => {
  return (
    <DashboardLayout>
      <h2>Login Page</h2>
      <LoginForm />
    </DashboardLayout>
  )
}

export default LoginPage;

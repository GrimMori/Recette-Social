import { useState } from 'react'
import LoginForm from '../partials/LoginForm';
import RegisterForm from '../partials/RegisterForm';

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: any) => {
    setCurrentForm(formName);
  }

  return (
    <>
      {currentForm === "login" ? <LoginForm onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />}
    </>
  )
}

export default Login;

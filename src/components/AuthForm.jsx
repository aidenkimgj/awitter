import React, { useState } from 'react';
import { Alert, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { authService } from '../fbInstance';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = e => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    let data;
    try {
      if (newAccount) {
        //Create Account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // Login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const toggleHandler = () => setNewAccount(!newAccount);
  return (
    <>
      <Form onSubmit={onSubmit}>
        {error ? <Alert color="danger">{error}</Alert> : ''}
        <FormGroup>
          <Label for="title">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            className="form-control mb-2"
            required
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            className="form-control"
            required
            onChange={onChange}
          />
        </FormGroup>

        <Button block className="mt-4 create">
          {newAccount ? 'Create Account' : 'Login'}
        </Button>
      </Form>
      <span onClick={toggleHandler}>
        {newAccount ? 'Sign In' : 'Create Account'}
      </span>
    </>
  );
};

export default AuthForm;

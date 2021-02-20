import React, { useState } from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import { authService } from '../fbInstance';

const Auth = () => {
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
      <Col sm="12" md={{ size: 6, offset: 3 }} className="login">
        <Card>
          <CardHeader id="card-header">
            <strong>Login</strong>
          </CardHeader>
          <CardBody>
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

              <Button color="success" block className="mt-4">
                {newAccount ? 'Create Account' : 'Login'}
              </Button>
            </Form>
            <span onClick={toggleHandler}>
              {newAccount ? 'Sign In' : 'Create Account'}
            </span>
          </CardBody>
          <CardFooter>
            <Button block className="mt-4 ">
              Continue with Google
            </Button>
            <Button block className=" mb-4">
              Continue with Github
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default Auth;

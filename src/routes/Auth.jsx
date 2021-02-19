import React from 'react';
import {
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

const Auth = () => (
  <>
    <Col sm="12" md={{ size: 6, offset: 3 }} className="login">
      <Card>
        <CardHeader id="card-header">
          <strong>Login</strong>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="title">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                className="form-control mb-2"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
              />
            </FormGroup>

            <Button color="success" block className="mt-4">
              Login
            </Button>
          </Form>
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
export default Auth;

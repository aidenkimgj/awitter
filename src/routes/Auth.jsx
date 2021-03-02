import React from 'react';
import { Card, CardBody, CardFooter, Col, Button } from 'reactstrap';
import AuthForm from '../components/AuthForm';
import firebaseInstance, { authService } from '../fbInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Auth = () => {
  const onSocialClick = async e => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <>
      <div className="login-container">
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <div className="main-icon">
            <span>
              <FontAwesomeIcon icon={faAt} size="3x" />
              witter
            </span>
          </div>

          <Card>
            {/* <CardHeader id="card-header">
              <strong>Login</strong>
            </CardHeader> */}
            <CardBody>
              <AuthForm />
            </CardBody>
            <CardFooter>
              <Button
                block
                name="google"
                className="mt-4"
                onClick={onSocialClick}
              >
                Continue with Google &nbsp;
                <FontAwesomeIcon icon={faGoogle} />
              </Button>
              <Button
                block
                name="github"
                className="mb-4"
                onClick={onSocialClick}
              >
                Continue with Github &nbsp;&nbsp;
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Auth;

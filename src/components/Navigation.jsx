import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Form,
  CardImg,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { authService } from '../fbInstance';

const Navigation = ({ userObj }) => {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  return (
    <>
      <Navbar color="dark" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faAt} size="3x" />
            <span className="head">witter</span>
          </Link>
          <Nav
            className="ml-auto d-felx flex-direction-row justify-content-around"
            navbar
          >
            <Link to="/profile" className="text-white text-decoration-none">
              <img src={userObj.photoURL} width="40px" height="40px" /> &nbsp;
              <b>{userObj.displayName}'s Profile</b>
            </Link>

            <b
              className="logout"
              onClick={onLogOutClick}
              style={{ color: 'white' }}
            >
              Log Out
            </b>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

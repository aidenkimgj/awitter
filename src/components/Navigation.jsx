import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { authService } from '../fbInstance';

const Navigation = ({ userObj }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faAt} size="3x" />
            <span className="head">witter</span>
          </Link>
          <NavbarToggler onClick={handleToggle} className="me-2" />
          <Collapse color="white" isOpen={isOpen} navbar>
            <Nav
              className="ml-auto d-felx flex-direction-row justify-content-around nav-item"
              navbar
            >
              <Link to="/profile" className="text-white text-decoration-none">
                <img
                  src={userObj.photoURL}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: '50%' }}
                />{' '}
                &nbsp;
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
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;

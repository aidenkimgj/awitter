import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div id="main-footer" className="text-center p-4">
      <Row>
        <Col>
          <p>
            Copyright &copy; <span>{thisYear()}</span> Awitter
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

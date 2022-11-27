import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-header">
      <Container className="mx-auto">
        <Form>
          <Row>
            <Row>
              <Col md={12}>
                <h1 style={{fontSize:"50px",marginBottom:'40px'}}>Admin Panel</h1>
              </Col>
            </Row>
            <Row className='username-row'>
              <Col md={6}  className="border-white">
                <Form.Group style={{height:'140px;'}} className="mb-4 border-dark" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control className="rounded-pill" type="name" placeholder="UserName" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
              </Col>
              <Row>
                <Col md={12}>
                  <Button     className="mt-5 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-blue-700 transition-all duration-300
            "
            variant="primary" type="submit"> 
                    Submit
                  </Button>
                </Col>
              </Row>
            </Row>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;

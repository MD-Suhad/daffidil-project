import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Row>
      <Col md={12} xs={12}>
        <Navbar bg="dark" variant="dark" className="navigation">
          <Container>
            <Nav className="me-auto  ">
              <div className="flex justify-center">
                <div className="home-navigation">
                  <Nav.Link
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      marginTop: "146px",
                    }}
                    className=" pr-5 text-3xl shadow-lg shadow-cyan-500/50 
              font-mono
              bg-gray-200 	text-black font-bold m-9 rounded shadow border-2 bg-gray-200		
            hover:bg-transparent
            hover:text-purple-700 transition-all duration-300
            "
                    href="/home"
                  >
                    Home
                  </Nav.Link>
                </div>
                <div className="add-navigation">
                  <Nav.Link
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      marginTop: "146px",
                    }}
                    className="pr-3  text-3xl shadow-lg shadow-cyan-500/50 
                  font-mono
                  bg-gray-200 	text-black font-bold m-4 rounded shadow border-2 bg-gray-200		
                hover:bg-transparent
                hover:text-purple-700 transition-all duration-300
                "
                    href="/addcard"
                  >
                    AddCard
                  </Nav.Link>
                </div>
                <div className="user-navigation">
                  <Nav.Link
                    style={{
                      display: "flex",
                      justifyContent: "right",
                      marginTop: "146px",
                    }}
                    className=" pr-5 text-3xl shadow-lg shadow-cyan-500/50 
                     font-mono
                     bg-gray-200 	text-black font-bold m-9 rounded shadow border-2 bg-gray-200		
                   hover:bg-transparent
                   hover:text-purple-700 transition-all duration-300
                   "
                    href="#users"
                  >
                    Users
                  </Nav.Link>
                </div>
              </div>

              <div className="mt-9 flex justify-center">
                <div className="swipe-navigation">
                  <Nav.Link 
                   style={{
                    display: 'flex',
                    justifyContent:'right',
                    marginTop:'146px',
                    
                  }}
                  className=" pr-5 text-3xl shadow-lg shadow-cyan-500/50 
                  font-mono
                  bg-gray-200 	text-black font-bold m-9 rounded shadow border-2 bg-gray-200		
                hover:bg-transparent
                hover:text-purple-700 transition-all duration-300
                "
                    href="/swipe"
                  >
                    Swipe
                  </Nav.Link>
                </div>
                <div className="configure-navigation">
                  <Nav.Link 
                  style={{
                    display: 'flex',
                    justifyContent:'right',
                    marginTop:'146px',
                    
                  }}
                   className="  text-3xl shadow-lg shadow-cyan-500/50 
                   font-mono
                   bg-gray-200 	text-black font-bold m-4 rounded shadow border-2 bg-gray-200		
                 hover:bg-transparent
                 hover:text-purple-700 transition-all duration-300
                 "
                    href="/configure"
                  >
                    Configure
                  </Nav.Link>
                </div>
                {/* <Nav.Link   className="mt-5 ml-3 text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-400
            " href="#exit">Exit</Nav.Link> */}
                <div className="login-navigation">
                  <Nav.Link 
                  style={{
                    display: 'flex',
                    justifyContent:'right',
                    marginTop:'146px',
                    
                  }}
                   className=" pr-5 text-3xl shadow-lg shadow-cyan-500/50 
                   font-mono
                   bg-gray-200 	text-black font-bold m-9 rounded shadow border-2 bg-gray-200		
                 hover:bg-transparent
                 hover:text-purple-700 transition-all duration-300
                 "
                    href="/login"
                  >
                    login
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Navigation;

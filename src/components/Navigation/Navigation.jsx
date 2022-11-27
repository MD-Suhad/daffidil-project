import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';


const Navigation = () => {
   return (
      <Navbar bg="dark" variant="dark" className="navigation">
      <Container>
       
        <Nav className="me-auto  ">
          <Nav.Link   className="mt-5 text-3xl  shadow-lg shadow-cyan-500/50 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-300
            " href="#home">Home</Nav.Link>
          <Nav.Link   className="mt-5 mx-3 text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-300
            " href="/addcard">AddCard</Nav.Link>
          <Nav.Link   className="mt-5 text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-300
            " href="#users">Users</Nav.Link>
          <Nav.Link   className="mt-5 mx-3 text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-500 transition-all duration-300
            " href="/swipe">Swipe</Nav.Link>
          <Nav.Link   className="mt-5  text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-300
            " href="#configure">Configure</Nav.Link>
          {/* <Nav.Link   className="mt-5 ml-3 text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-400
            " href="#exit">Exit</Nav.Link> */}
          <Nav.Link   className="mt-5 ml-3 text-3xl 
              font-mono
              bg-blue-900 text-white font-bold py-2 px-8 rounded shadow border-2 bg-blue-900
            hover:bg-transparent
            hover:text-white-700 transition-all duration-400
            " href="/login">login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
   );
};

export default Navigation;
import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';

const Home = () => {
   return (
      <div>
      <Row>
         <Col md={12} xs={12}>
         <Navigation/>
         </Col>
      </Row>
       
      
      </div>
   );
};

export default Home;
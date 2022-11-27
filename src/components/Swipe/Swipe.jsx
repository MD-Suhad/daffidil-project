import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Swipe.css';
import cover2 from '../../images/cover.jpg'

const Swipe = () => {
   return (
      <div className="swipe-header">
         <div >
            <h1
            style={{
               border: '1px solid black',
               marginTop:"-65px",
               marginLeft:'400px',
               marginRight:'400px',
               borderRadius:'30px',
               padding:'15px',
               backgroundColor:'#fff',
               fontFamily:"cursive"
            }}
            className="text-4xl"
            >Student Info</h1>
            <div
            
            className="flex justify-center text-2xl my-5 p-4">
               <h3
                style={{
                  border:'2px solid black',
                  borderRadius:'5px',
                  marginLeft:"295px",
                  marginRight:"140px",
                  textAlign:"center",
                  backgroundColor:'#fff',
                  fontFamily:"cursive",
                  padding:'10px'
                  
                  }}>Enter Card ID/Swipe Card</h3>
               <Button
               style={{
                  backgroundColor:'#fff',
                  width:'180px',
                  borderRadius:'20px'
               }}
               >Search</Button>
            </div>
         </div>
         <div>
           <Row className="flex justify-center">
            <Col md={7}>
            <div className="grid justify-center text-center ">
        <div className="flex justify-center mb-3">
          <label
            style={{ marginRight: "10px", textAlign: "center",textSize:'555px' }}
            htmlFor=""
          >
            CARD ID:
          </label>
          <input
            style={{ borderRadius: "5px" }}
            type="number"
            name="card"
            id="card"
            //placeholder='card'
          />
        </div>
        <div className="flex justify-center mb-3">
          <label
            style={{ marginRight: "10px", textAlign: "center" }}
            htmlFor=""
          >
            Student ID:
          </label>
          <input
            style={{ borderRadius: "5px" }}
            type="number"
            name="student"
            id="student"
            //placeholder='student-id'
          />
        </div>
        <div className="flex justify-center mb-3 ">
          <label style={{ marginRight: "10px", textAlign: "start" }} htmlFor="">
            Student Name:
          </label>
          <input
            style={{ borderRadius: "5px" }}
            type="name"
            name="name"
            id="name"
            //placeholder='name'
          />
        </div>
        <div className="flex justify-center mb-3 text-start">
          <label style={{ marginRight: "10px" }} htmlFor="">
            Access:
          </label>
          <input
            style={{ borderRadius: "5px" }}
            type="name"
            name="name"
            id="name"
            //placeholder='name'
          />
        </div>
      </div>

            </Col>
            <Col md={5}>
              <img style={{height: "120px",marginLeft:'130px',borderRadius:"50%"}} src={cover2} alt="" />
            </Col>
           </Row>
         </div>
      </div>
   );
};

export default Swipe;
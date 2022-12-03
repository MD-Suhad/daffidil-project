import React, { useState } from "react";
import {v4 as uuid4 } from "uuid";

import { Button, Col, Form, Row } from "react-bootstrap";
import "./AccessZone.css";
import Axios from 'axios';



const AccessZone = () => {
  const url ="http://localhost:5000/"

    
    const [data,setData] = useState({});
    console.log(data);


   
  //  const [accessZone,setAccessZone] = useState("");
  //  const [devices,setDevices] = useState("");
   const[list,setList] = useState([]);
   // console.log(accessZone);
   // console.log(devices);

   const handleOnAccessZone = (e) =>{
   
      e.preventdefault();
      console.log(handleOnAccessZone);
      
      //  const newAccessZoneInfo = {

      //      id: uuid4(),
      //     accessZone:accessZone,
      //     devices:devices,
      //     list:list,
      //  }
      //  setAccessZone("");
      //  setDevices("");
      //  setList([...list,newAccessZoneInfo]);
      //  console.log(list);


      Axios.post(url,{

        accessZone:data.accessZone,
        devices:data.devices


      })
      .then(res=>{
        console.log(res.data);
      })


   }




  return (
    <>
      <Form 
      
        onSubmit={handleOnAccessZone}
      
      >
        <Row className="zone-header" style={{ marginTop: "200px" }}>
          <Row className="flex justify-center mt-5">
            <Col md={12} className="flex justify-center">
              <div className="flex flex-col" style={{ marginRight: "20px" }}>
                <label htmlFor="accessZone">Access Zone Name</label>
                <input
                  type="text"
                  id="accessZone"
                  name="accessZone"
                  value={data.accessZone}
                  onChange={(e) => setData(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="devices">Devices</label>
                <input
                  type="text"
                  id="devices"
                  name="devices"
                  value={data.devices}
                  onChange={(e) => setData(e.target.value)}
                  placeholder=""
                />
              </div>
            </Col>
          </Row>
      
       
               <div className="flex justify-center mt-5">
              <Button
                type="submit"
                onClick = {handleOnAccessZone}
                className="mt-5 mb-5  font-mono bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
               hover:bg-transparent
               hover:text-blue-900 transition-all duration-300
               "
              >
                Add
              </Button>

              </div>
       
        </Row>
      </Form>

     <Row>
      <Col md={12}>

      <table className="zone-table mt-5" width="50%">
        <thead style={{border:'5px solid red'}}>
          <tr className="p-1 text-white">
            <td className="font-bold font-mono pl-7">Access Zone Name</td>
            <td className="font-bold font-mono">Devices</td>
            
          </tr>
        </thead>
      </table>


      </Col>
     </Row>
    </>
  );
};

export default AccessZone;

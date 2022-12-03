import React, { useState } from "react";
import {v4 as uuid4 } from "uuid";
import { Row, Col, Button, Form } from "react-bootstrap";
import {RiChatDeleteLine} from "react-icons/ri"
import {CiEdit} from "react-icons/ci"
import "./DeviceInfo.css";

 





export default function DeviceInfo() {

   const[name,setName] = useState();
   const [ip,setIp] = useState();
   const [serial,setSerial] = useState();
   const [port,setPort] = useState();
   const [list,setList] = useState([]);

   
   const [isEditing,setIsEditing] = useState(false);













  const handleOnDevice = (e) => {
    e.preventdefault();
       
    const newDeviceInfo = {
      id: uuid4(), 
       name,
      ip,
      serial,
      port,
      list
    };
      setName(); 
      setIp();
      setSerial();
      setPort();
      setList([...list, newDeviceInfo]);
      setIsEditing(false);
      //console.log(setList);

  };

  //edit function 
//   const editRow = (id) =>{
//    const editingRow = list.find((row) => row.id ===id)
//    setList(list.filter((row) => row.id !== id))
//    setIsEditing(true);
//    setName(editingRow.name);
//    setIp(editingRow.ip);
//    setSerial(editingRow.Serial);
   
//    setPort(editingRow.port);
// } 

      //delete function

      // const deleteRow =   (id) =>{
      //    setList(list.filter((row) => row.id !== id))
      //   } 

  return (
    <>
      <Form onSubmit={handleOnDevice}>
        <div className="header-device">
          <Row className="flex justify-center mt-5">
            <Col md={12} className="flex justify-center">
              <div className="flex flex-col" style={{ marginRight: "20px" }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="ip">IP</label>
                <input
                  type="number"
                  id="ip"
                  name="ip"
                  value={ip}
                   onChange={(e) => setIp(e.target.value)}
                  placeholder=""
                />
              </div>
            </Col>
          </Row>
          <Row className="flex justify-center ">
            <Col md={12} className="flex justify-center">
              <div className="flex flex-col" style={{ marginRight: "20px" }}>
                <label htmlFor="serial">Serial</label>
                <input
                  type="number"
                  id="serial"
                  name="serial"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="port">Port</label>
                <input
                  type="number"
                  id="port"
                  name="port"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  placeholder=""
                />
              </div>
            </Col>
          </Row>
          <Row className="flex justify-center mt-5">
            <Col md={12}>
              <Button
               type="submit"
                onClick={handleOnDevice}
                className="mt-5 mb-5  font-mono bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500
               hover:bg-transparent
               hover:text-blue-900 transition-all duration-300
               "
              >
                {isEditing ? "Edit Item" : "AddDevice"}
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
      <table className="device-table mt-5" width="50%">

        <thead>
          <tr className="p-1 text-white">
            <td className="font-bold font-mono pl-7">Name</td>
            <td className="font-bold font-mono">Ip</td>
            <td className="font-bold font-mono">Serial</td>
            <td className="font-bold font-mono">Port</td>
          </tr>
        </thead>
        {list?.map(({ id, name, ip, serial, port }) => (
        <React.Fragment key={id}
        >
        <tbody>
          <tr>
            <td className="font-mono pl-7">{name}</td>
            <td className="font-mono pl-7">{ip}</td>
            <td className="font-mono pl-7">{serial}</td>
            <td className="font-mono pl-7">{port}</td>
            {/* <td><button  onClick={() =>deleteRow(id)}><RiChatDeleteLine
              className="font-bold text-red-500 text-xl"
              /></button></td>
              <td><button  onClick={() =>editRow(id)}><CiEdit
              className="font-bold text-blue-500 text-xl"
              /></button></td> */}
          </tr>
        </tbody>
        </React.Fragment>
            ))}
      </table>
    </>
  );
}

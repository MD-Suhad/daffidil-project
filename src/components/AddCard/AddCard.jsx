import React from "react";
import "./AddCard.css";

const AddCard = () => {
  return (
    <div className="addCard-header text-center">
      <h2
        style={{
          border: "1px solid black",
          marginTop: "-65px",
          marginLeft: "400px",
          marginRight: "400px",
          borderRadius: "30px",
          padding: "15px",
          backgroundColor: "#fff",
          fontFamily: "cursive",
        }}
        className=" text-4xl"
      >
        Add Card
      </h2>

      <h3
        style={{
          border: "2px solid black",
          borderRadius: "5px",
          marginLeft: "145px",
          marginRight: "140px",
          textAlign: "center",
          backgroundColor: "#fff",
          fontFamily: "cursive",
        }}
        className="text-2xl my-5 p-2"
      >
        Enter Card Id/Swipe Card
      </h3>
      <div className="grid justify-center text-center ">
        <div className="flex justify-center mb-3">
          <label
            style={{ marginRight: "10px",fontSize:'30px',color:'white' }}
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
            style={{ marginRight: "10px",fontSize:'30px',color:'white' }}
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
          <label style={{ marginRight: "10px",fontSize:'30px',color:'white' }} htmlFor="">
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
          <label style={{ marginRight: "10px",fontSize:'30px',color:'white' }} htmlFor="">
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
    </div>
  );
};

export default AddCard;

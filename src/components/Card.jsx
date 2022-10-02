import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Card = ({ data,book }) => {
  const [modalIsOpen, setIsOpen] =useState(false);
  const [cost,setCost] = useState(data.cost)

const handelChange=(e)=>{
  const {value}= e.target;
  setCost(cost*value)
}

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModalpage = () => {
    setIsOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
    setTimeout(() => {
      alert("Booked Successfully")
      const payload ={booked:true}
      axios.patch(`https://fierce-oasis-15296.herokuapp.com/hotels/${data.id}`,payload)
    .then(()=>book())
    .catch((er)=>console.log(er))
    }, 1000);
  }


  return (
    <div id="card">
      <div>
        <img src={data.image_url} alt="" />
      </div>
      <div style={{ paddingTop: "7px" }}>
        <h3>Adults : {data.no_of_person}</h3>
        <h3>Capacity : {data.capasity}</h3>
        <h3>Category : {data.category}</h3>
        <h3>Facilities : {data.type_of_room}</h3>
        <h3>Bed-Type : {data.bed_type}</h3>
        <h3>Price : $ {data.cost}/night</h3>
       {data.booked ?  <button className="btnerr" disabled="true">
         Unavailable
        </button> :  <button className="btn" onClick={openModal}>
          Book Now
        </button> }
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div id="book">
            <p style={{fontSize:"35px", color:"blue", marginBottom:"20px"}}>Please Fill The Details.</p>
            <form>
              <label>Name :</label>
              <input type="text" placeholder="Enter name"/>
              <br />
              <label>Mobile :</label>
              <input type="number" placeholder="Enter Mobile" />
              <br />
              <label>Id Proof :</label>
              <input type="text" placeholder="Enter Adhar id" />
              <br />
              <label>No of Person :</label>
              <input type="number"/>
              <br />
              <label>Day of Stay :</label>
              <input type="number" id="stay" onChange={handelChange} placeholder="1"/>
              <br />
              <label>SubTotal : {cost}</label><br />
              <label>GST : {cost*0.24 }</label><br />
              <label>Total : {(+cost + (cost*0.24)) }</label><br />
              <button onClick={closeModal} className="btn" style={{marginRight:"20px"}}>
            Submit
          </button>
          <button onClick={closeModalpage} className="btn">
            Cancel
          </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

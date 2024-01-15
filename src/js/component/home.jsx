import React from "react";

//create your first component

const Home = ({ uno, dos, tres, cuatro, cinco, seis }) => {
  return (
    <div className="allCounter">
      <div className="clock box">
        <i class="bi bi-clock-fill"></i>
      </div>
      <div className="box">{seis}</div>
      <div className="box">{cinco}</div>
      <div className="box">{cuatro}</div>
      <div className="box">{tres}</div>
      <div className="box">{dos}</div>
      <div className="box">{uno}</div>
    </div>
  );
};

export default Home;
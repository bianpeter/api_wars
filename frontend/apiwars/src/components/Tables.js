import Planet from "./Planet";
import React, { useState } from "react";
import Modaltable from "./Modaltable";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';


function Tables({ planets }) {
  const [residentUrl, setResidentUrl] = useState([]);
  const [btnClick, setBtnClick] = useState(false);

  let modale = "";

  const clickHandler = () => {
    setBtnClick(false);
  };

  if (btnClick) {
    modale = (
      <div id="modal-container">
        <div id="modal">
          <div className="modal_header">
            <h1>Residents</h1>
            <button onClick={clickHandler}>X</button>
          </div>
          <Modaltable residentsArray={residentUrl} />
          <Button onClick={clickHandler}>Close</Button>
        </div>
      </div>
    );
  } else {
    modale = "";
  }

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Surface Water Percentage</th>
            <th>Population</th>
            <th>Residents</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <Planet
              planet={planet}
              key={index}
              setResidentUrl={setResidentUrl}
              setBtnClick={setBtnClick}
            />
          ))}
        </tbody>
      </Table>
      {modale}
    </div>
  );
}

export default Tables;

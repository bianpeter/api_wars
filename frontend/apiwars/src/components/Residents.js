import React, { useState, useEffect } from "react";

const Resident = ({ residentData }) => {
  const [resident, setResident] = useState([]); //a resident már object {}

  useEffect(() => {
    fetch(residentData) //residentData még url
      .then((response) => {
        if (response.status !== 200) return;
        return response.json();
      })
      .then((json) => setResident(json)); //a responban kapott adat egy resident nevű object-be kerül {}
  }, [residentData]);

  return (
    <tr>
      <td>{resident.name}</td>
      <td>{resident.height}</td>
      <td>{resident.mass}</td>
      <td>{resident.hair_color}</td>
      <td>{resident.skin_color}</td>
      <td>{resident.eye_color}</td>
      <td>{resident.birth_year}</td>
      <td>{resident.gender}</td>
    </tr>
  );
};

export default Resident;

import Tables from "./Tables";
import { useState } from "react";
import { usePlanets } from "./fetch";

//Bootstrap
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

function PlanetList() {

  const [currentPage, setCurrentPage] = useState(1);
 

  const planets = usePlanets(currentPage);

  function nextPage() {
    planets.next !== null ? setCurrentPage(currentPage + 1) : setCurrentPage(6);
  }

  function prevPage() {
    planets.previous !== null
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(1);
  }

  if (planets.results === undefined) {
    return <h1>Loading</h1>;
  }

  return (
      <div className="table-container">
        <h1>Star Wars universe planets</h1>
        <Button className="pagebutton" variant="primary" active onClick={prevPage}>Previous</Button>
        <Button className="pagebutton" variant="primary" active onClick={nextPage}>Next</Button>
        <Tables planets={planets.results}></Tables>
      </div>
  )
}

export default PlanetList

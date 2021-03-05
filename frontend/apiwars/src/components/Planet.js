import Button from 'react-bootstrap/Button';

function Planet({ planet, setResidentUrl, setBtnClick }) {
  let residentBtn = "";

  const clickHandler = () => {
    setBtnClick(true);
    setResidentUrl(planet.residents); //a residentUrl statet írjuk át a residenseket tartalmazó objectekre
  };

  if (planet.residents.length === 0) {
    residentBtn = "No known residents";
  } else {
    residentBtn = (
      <Button id="resident_btn" variant="secondary" onClick={clickHandler}>
        {planet.residents.length} resident(s)
      </Button>
    );
  }

  return (
    <tr>
      <td>{planet.name}</td>
      <td>
        {planet.diameter === "unknown"
          ? planet.diameter
          : planet.diameter.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " km"}
      </td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>
        {planet.surface_water === "unknown"
          ? planet.surface_water
          : planet.surface_water + "%"}
      </td>
      <td>
        {planet.population === "unknown"
          ? planet.population
          : planet.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + " people"}
      </td>
      <td>{residentBtn}</td>
    </tr>
  );
}

export default Planet;

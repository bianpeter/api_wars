import Resident from "./Residents";
import Table from 'react-bootstrap/Table'


const Modaltable = ({ residentsArray }) => {
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
            <th>Skin color</th>
            <th>Eye Color</th>
            <th>Birth year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {residentsArray.map((resident, index) => (
            <Resident key={index} residentData={resident} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Modaltable;

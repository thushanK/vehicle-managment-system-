import React from 'react';
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom';
import V_CONTROLLER from '../../controllers/Vehicle.controller';

class ManageVehicle extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          vehicleList: [],
      }
  }
  
  async componentDidMount() {
      const res = await V_CONTROLLER.getAllVehicles();
      this.setState({
          vehicleList: res
      });
  }

  render(){
      const {vehicleList} = this.state;
  return (
    <div className="app" >
    <Sidebar activemenu={'VEHICLE'} submenu={'MANAGE_Vehicle'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Manage Vehicle<br></br>
                <span className="text-muted small">Manage vehicle details</span></h6>
                <table class="table borderless customtable">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">Vehicle Number</th>
                        <th className="font-08 text-dark2 ">Vehicle Type</th>
                        <th className="font-08 text-dark2 ">Vehicle Chase Number</th>
                        </tr>
                    </thead>
                    <tbody>{vehicleList && vehicleList.map((value , i) => this.renderTable(value , i))}</tbody>
                </table>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}

  renderTable = (vehicle , index) => {
      console.log(vehicle);
    return (
                        <tr key={vehicle._id}>
                            {/* <td>{`B${("00" + (index + 1)).slice(-3)}`}</td> */}
                            <td>{vehicle.vehicleNumber}</td>
                            <td>{vehicle.vehicleType}</td>
                            <td>{vehicle.vehicleChaseNumber}</td>
                            <td><Link to={"/locations/vehicles/edit/" + vehicle._id}><span className="badge badge-info rounded-0 bg-white text-success border border-secondary click font-weight-bold ">Edit</span></Link>
                            <Link to={"/locations/vehicles/delete/" + vehicle._id}><span className="badge badge-info rounded-0 bg-white text-danger border border-secondary click font-weight-bold btn-danger ml-2">Delete</span></Link>
                            </td>
                        </tr>
    )
  }
}

export default ManageVehicle;

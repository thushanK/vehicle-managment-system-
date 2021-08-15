import React from 'react';
import Sidebar from '../../components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../../components/Form'
import moment from 'moment';
import { omit } from 'lodash'
import { Link, Router } from 'react-router-dom';

import V_CONTROLLER from '../../controllers/Vehicle.controller';
import CONFIG from '../../controllers/Config.controller';

class DeleteBuilding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleNumber: '',
            vehicleType: '',
            vehicleChaseNumber: '',
            vehicleEngineNumber: '',
            manufactureDate: '',
            vehicleColor: '',
            vehiclePurchaseDate: '',
            vehicleOpenMileage: '',
            insuranceType: '',
            vehicleRegisteredDistrict: '',
            nextLicenseRenewalDate: '',
            vehiclePreviousOwner: '',
            NIC: '',
            contactNumber: '',
            address: '',
        };
    }

    async componentDidMount() {
        console.log("Building ID: ", this.props.match.params.id);
        
        const result = await V_CONTROLLER.getOne(this.props.match.params.id);

        console.log("Vehicle results: ", result.data);

        this.setState({
            vehicleNumber: this.state.vehicleNumber,
            vehicleType: this.state.vehicleType,
            vehicleChaseNumber: this.state.vehicleChaseNumber,
            vehicleEngineNumber: this.state.vehicleEngineNumber,
            manufactureDate: this.state.manufactureDate,
            vehicleColor: this.state.vehicleColor,
            vehiclePurchaseDate: this.state.vehiclePurchaseDate,
            vehicleOpenMileage: this.state.vehicleOpenMileage,
            insuranceType: this.state.insuranceType,
            vehicleRegisteredDistrict: this.state.vehicleRegisteredDistrict,
            nextLicenseRenewalDate: this.state.nextLicenseRenewalDate,
            vehiclePreviousOwner: this.state.vehiclePreviousOwner,
            NIC: this.state.NIC,
            contactNumber: this.state.contactNumber,
            address: this.state.address
        })
    }

    render(){

    return (
        <div className="app" >
        <Sidebar activemenu={'BUILDINGS'} submenu={'BUILDINGS_LIST'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Delete Vehicle<br></br>
                    <span className="text-muted small">Vehicle delete confirmation</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
    
                <div className="row mt-1 pb-3" >
                    <div className="col-md-12 mt-2" >
                    <h6 style={{fontSize : '0.9rem'}}
                        className="text-header text-danger mb-0 font-weight-bold line-hight-1">Are you sure you want to delete this Vehicle ?<br></br>
                    <span className="text-muted small">This process can't be undone, All the relevant details will be permanently deleted !</span></h6>
                    </div>
                    <div className="col-md-12 mt-3" >
                        <table class="table borderless customtable mb-0">
                            <thead>
                            <tr>
                                <th className="font-08 text-dark2 ">Vehicle Number</th>
                                <th className="font-08 text-dark2 ">Vehicle Type</th>
                                <th className="font-08 text-dark2 ">Vehicle Chase Number</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.vehicleNumber}</td>
                                    <td>{this.state.vehicleType}</td>
                                    <td>{this.state.vehicleChaseNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                    <hr className="my-2"></hr>
                            <button className="btn-danger mt-2 btn btn-sm px-3 py-1" onClick={this.onDelete}>Delete</button>
                            <Link to="/vehicle/manage"><button type="submit" id="cancelBtn" className="btn-light mt-2 btn btn-sm px-3 py-1 border mx-2">Cancel</button></Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </div>
    );}

    onDelete = async () => {
        const data = {
            id: this.state.id,
            vehicleNumber: this.state.vehicleNumber,
        }
        const result = await V_CONTROLLER.deleteVehicle(data);
        if(result == 200){
            CONFIG.showAlert("Successfully Deleted");
            document.getElementById("cancelBtn").click();
        }
        console.log(result);
    }

}

export default DeleteBuilding;

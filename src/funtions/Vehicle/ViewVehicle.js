import React from 'react';
import Sidebar from '../../components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../../components/Form'

import { Link } from 'react-router-dom';

import V_CONTROLLER from '../../controllers/Vehicle.controller';
import CONFIG from '../../controllers/Config.controller';

class EditVehicle extends React.Component {

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
            id: '',
            errors : { 
                vehicleNumber : false , 
                vehicleType : false ,
                vehicleChaseNumber : false ,
                vehicleEngineNumber : false ,
                manufactureDate : false ,
                vehicleColor : false ,
                vehiclePurchaseDate : false ,
                vehicleOpenMileage : false ,
                insuranceType : false ,
                vehicleRegisteredDistrict : false ,
                nextLicenseRenewalDate : false ,
                vehiclePreviousOwner : false ,
                NIC : false ,
                contactNumber : false ,
                address : false ,
            }
        };
    }

    async componentDidMount() {
        console.log("Vehicle ID: ", this.props.match.params.id);
        
        const result = await V_CONTROLLER.getOne(this.props.match.params.id);

        console.log("Vehicle results: ", result.data);

        this.setState({
            vehicleNumber: result.state.vehicleNumber,
            vehicleType: result.state.vehicleType,
            vehicleChaseNumber: result.state.vehicleChaseNumber,
            vehicleEngineNumber: result.state.vehicleEngineNumber,
            manufactureDate: result.state.manufactureDate,
            vehicleColor: result.state.vehicleColor,
            vehiclePurchaseDate: result.state.vehiclePurchaseDate,
            vehicleOpenMileage: result.state.vehicleOpenMileage,
            insuranceType: result.state.insuranceType,
            vehicleRegisteredDistrict: result.state.vehicleRegisteredDistrict,
            nextLicenseRenewalDate: result.state.nextLicenseRenewalDate,
            vehiclePreviousOwner: result.state.vehiclePreviousOwner,
            NIC: result.state.NIC,
            contactNumber: result.state.contactNumber,
            address: result.state.address
        })
    }

    formValueChange = (e) => {
        this.setState({[e.target.name] : e.target.value  });
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        this.validate();

        var data = {
            id: this.state.id,
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
            address: this.state.address,
        }

        const result = await V_CONTROLLER.editVehicle(data)

        console.log(result);

        if(result == 200){
            CONFIG.showAlert("Successfully Updated");
            document.getElementById("cancelBtn").click();
        }
    }

    render(){
        const {errors} = this.state;
    return (
        <div className="app" >
        <Sidebar activemenu={'BUILDINGS'} submenu={'BUILDINGS_LIST'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Edit Vehicle<br></br>
                    <span className="text-muted small">Editing vehicle details</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                <div className="row mt-1 pb-3" >
                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Number'} placeholder={'Enter Vehicle Number'} error={ errors.vehicleNumber} name="vehicleNumber" value={this.state.vehicleNumber} onChange={this.formValueChange} error_meesage={'*Vehicle Number is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormSelect label={'Vehicle Type'} options={AT_OPTIONS} error={ errors.vehicleType} selected={this.state.vehicleType} onChange={this.formValueChange} name="vehicleType" error_meesage={'*Vehicle Type is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Chase Number'} placeholder={'Enter Vehicle Chase Number'} error={ errors.vehicleChaseNumber} name="vehicleChaseNumber" value={this.state.vehicleChaseNumber} onChange={this.formValueChange} error_meesage={'*Vehicle Chase Number is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Engine Number'} placeholder={'Enter Vehicle Engine Number'} error={ errors.vehicleEngineNumber} name="vehicleEngineNumber" value={this.state.vehicleEngineNumber} onChange={this.formValueChange} error_meesage={'*vehicle Engine Number is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Manufacture Date'} input type='date' placeholder={'Enter Manufacture Date'} error={ errors.manufactureDate} name="manufactureDate" value={this.state.manufactureDate} onChange={this.formValueChange} error_meesage={'*Manufacture Date is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Color'} placeholder={'Enter Vehicle Color'} error={ errors.vehicleColor} name="vehicleColor" value={this.state.vehicleColor} onChange={this.formValueChange} error_meesage={'*Vehicle Color is required'}/>
                                </div>
                                <br></br>

                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Purchase Date'} input type='date' placeholder={'Enter Vehicle Purchase Date'} error={ errors.vehiclePurchaseDate} name="vehiclePurchaseDate" value={this.state.vehiclePurchaseDate} onChange={this.formValueChange} error_meesage={'*Vehicle Purchase Date is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Open Mileage'} placeholder={'Enter Vehicle Open Mileage'} error={ errors.vehicleOpenMileage} name="vehicleOpenMileage" value={this.state.vehicleOpenMileage} onChange={this.formValueChange} error_meesage={'*Vehicle Open Mileage is required'}/>
                                </div>

                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormSelect label={'Insurance Type'} options={IT_OPTIONS} error={ errors.insuranceType} selected={this.state.insuranceType} onChange={this.formValueChange} name="insuranceType" error_meesage={'*Insurance Type is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Registered District'} placeholder={'Enter Vehicle Registered District'} error={ errors.vehicleRegisteredDistrict} name="vehicleRegisteredDistrict" value={this.state.vehicleRegisteredDistrict} onChange={this.formValueChange} error_meesage={'*Vehicle Registered District is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Next License Renewal Date'} input type='date' placeholder={'Enter Next License Renewal Date'} error={ errors.nextLicenseRenewalDate} name="nextLicenseRenewalDate" value={this.state.nextLicenseRenewalDate} onChange={this.formValueChange} error_meesage={'*Next License Renewal Date is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Previous Owner Name'} placeholder={'Enter Vehicle Previous Owner'} error={ errors.vehiclePreviousOwner} name="vehiclePreviousOwner" value={this.state.vehiclePreviousOwner} onChange={this.formValueChange} error_meesage={'*Vehicle Previous Owner is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Previous Owner NIC'} placeholder={'Enter Vehicle Previous Owner NIC'} error={ errors.NIC} name="NIC" value={this.state.NIC} onChange={this.formValueChange} error_meesage={'*Vehicle Previous Owner NIC is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Previous Owner Contact Number'} placeholder={'Enter Vehicle Previous Owner Contact Number'} error={ errors.contactNumber} name="contactNumber" value={this.state.contactNumber} onChange={this.formValueChange} error_meesage={'*Vehicle Previous Owner contactNumber is required'}/>
                                </div>
                                <div className="col-md-6 mt-1 mb-1" >
                                    <FormInput label={'Vehicle Previous Owner address'} placeholder={'Enter Vehicle Previous Owner address'} error={ errors.address} name="address" value={this.state.address} onChange={this.formValueChange} error_meesage={'*Vehicle Previous Owner address is required'}/>
                                </div>

                    <div className="col-md-12 mt-1 mb-1" >
                            <button type="submit" className="btn-outline-primary mt-2 btn btn-sm px-2 mr-4">Update</button>
                            <Link to="/vehicle/manage/"><button id="cancelBtn" className="btn-outline-secondary mt-2 btn btn-sm px-2 ">Cancel</button></Link>
                    </div>
                </div>
                </form>
                </div>
            </div>
            </div>
        </main>
    </div>
    );}

    validate = () => {
        let { vehicleNumber,vehicleType,vehicleChaseNumber,vehicleEngineNumber,manufactureDate,vehicleColor,vehiclePurchaseDate,vehicleOpenMileage,insuranceType,vehicleRegisteredDistrict,nextLicenseRenewalDate,vehiclePreviousOwner,NIC,contactNumber, address} = this.state;
        let count = 0;
        let errors = {}

        if( vehicleNumber == ''){
            errors.vehicleNumber = true
            count++
        }else{
            errors.vehicleNumber = false 
        }

        if( vehicleType == ''){
            errors.vehicleType = true
            count++
        }else{
            errors.vehicleType = false 
        }

        if( vehicleChaseNumber == ''){
            errors.vehicleChaseNumber = true
            count++
        }else{
            errors.vehicleChaseNumber = false 
        }

        if( vehicleEngineNumber == ''){
            errors.vehicleEngineNumber = true
            count++
        }else{
            errors.vehicleEngineNumber = false 
        }

        if( manufactureDate == ''){
            errors.manufactureDate = true
            count++
        }else{
            errors.manufactureDate = false 
        }

        if( vehicleColor == ''){
            errors.vehicleColor = true
            count++
        }else{
            errors.vehicleColor = false 
        }

        if( vehiclePurchaseDate == ''){
            errors.vehiclePurchaseDate = true
            count++
        }else{
            errors.vehiclePurchaseDate = false 
        }

        if( vehicleOpenMileage == ''){
            errors.vehicleOpenMileage = true
            count++
        }else{
            errors.vehicleOpenMileage = false 
        }

        if( insuranceType == ''){
            errors.insuranceType = true
            count++
        }else{
            errors.insuranceType = false 
        }

        if( vehicleRegisteredDistrict == ''){
            errors.vehicleRegisteredDistrict = true
            count++
        }else{
            errors.vehicleRegisteredDistrict = false 
        }

        if( nextLicenseRenewalDate == ''){
            errors.nextLicenseRenewalDate = true
            count++
        }else{
            errors.nextLicenseRenewalDate = false 
        }

        if( vehiclePreviousOwner == ''){
            errors.vehiclePreviousOwner = true
            count++
        }else{
            errors.vehiclePreviousOwner = false 
        }

        if( NIC == ''){
            errors.NIC = true
            count++
        }else{
            errors.NIC = false 
        }

        // ==

        if( contactNumber == ''){
            errors.contactNumber = true
            count++
        }else{
            errors.contactNumber = false 
        }

        if( address == ''){
            errors.address = true
            count++
        }else{
            errors.address = false 
        }
       
        this.setState({errors})
        return count == 0;
    }
    ResetForm = () => {
        this.setState(
            {
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
            address: ''
            }
        )
    }
}

const AT_OPTIONS = [{ label : 'Select Vehicle Type' ,value : "" } , 
...['Car', 'Van', 'Bick', 'Lory', 'Industriyal Vehicle', 'Other'].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

const IT_OPTIONS = [{ label : 'Select Insurance Type' ,value : "" } , 
...['full option', '3rd option'].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

export default EditVehicle;

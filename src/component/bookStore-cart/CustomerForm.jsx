import React from 'react';
import '../bookStore-cart/CustomerForm.scss';
import {TextField} from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import StoreService from '../../service/StoreService';
class CustomerForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            emailId:'',
            password:'',
            id:'',
            phoneNumber:'',
            pinCode:'',
            locality:'',
            landmark:'',
            town:'',
            type:'',
            address:'',
            textError:"",
            numberError:"",
            pinCodeError:"",
            isError:'',
            isFilled:false,
        }
    }
    componentDidMount = () => {
            new StoreService().getUserById(localStorage.getItem("userId"))
             .then(responseDTO => {
                let responseData = responseDTO.data;
                this.setCustomerForm(responseData.data);
            }).catch(error => {
                console.log("Error while Fetching Data"+JSON.stringify(error));
             })
    }

    handleNameChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        let nameRegex=RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if(!nameRegex.test(e.target.value)){
          this.setState({
            textError:"Enter Valid Name e.g.:Abc abc",
            isError:true
          })
        }
        else{
          this.setState({textError:"",
          isError:false})
        }
    }

    handleNumberChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        let phoneNumberRegex=RegExp("[+]{0,1}[0-9]{1,}\\s{0,1}[1-9]{1}[0-9]{9}$");
        if(!phoneNumberRegex.test(e.target.value)){
          this.setState({
            numberError:"Enter Valid Number e.g.:917263534327",
            isError:true
          })
        }
        else{
          this.setState({numberError:"",
          isError:false});
        }
    }

    handlepinCodeChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        let pinCodeRegex=RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
        if(!pinCodeRegex.test(e.target.value)){
          this.setState({
            pinCodeError:"Enter Valid Pincode e.g.:229067",
            isError:true
          })
        }
        else{
          this.setState({pinCodeError:"",
        isError:false});
        }
    }

    handleLocalityChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCityChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleAddressChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleLandmarkChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            isFilled:true
        })
    }

    setCustomerForm = (customerData) => {
        this.setState({
            id:customerData.userId,
            name:customerData.name,
            phoneNumber:customerData.phoneNumber,
            emailId:customerData.emailId,
            password:customerData.password
        })
    }

    save = async (event) => {
        event.preventDefault();
        console.log("save button clicked");
        if(this.state.isError ||  !this.state.isFilled){
            window.alert("Please Fill correct values");
        }else{
            let customerObject = {
                userId:this.state.id,
                name:this.state.name,
                phoneNumber:this.state.phoneNumber,
                pinCode:this.state.pinCode,
                locality:this.state.locality,
                address:this.state.address,
                landMark:this.state.landmark,
                city:this.state.city,
                password:this.state.password,
                emailId:this.state.emailId,
            }
           new StoreService().updateUser(customerObject)
           .then(responseText => {
            console.log("Data updated successfully" +JSON.stringify(responseText.data));
           }).catch(error => {
               console.log("Error While Updating User",JSON.stringify(error));
           })
        }
    }

    render(){
        return(
            <div className="main-container">
                <h3 className="form-title">Customer Details</h3>
               <form className='customerform' action="#" onSubmit={(e)=>this.save(e)}>
                   <div className="form-container">
                       <div className="form-input">
                            <div className="row">
                                <TextField className="text-input" name="name" label="Name" value={this.state.name} variant='outlined' onChange={(e)=>{this.handleNameChange(e)}} style={{marginRight: '1.5%'}} size='medium'></TextField>
                                <error-output className="text-error" htmlFor="error">{this.state.textError}</error-output>                               
                                <TextField className="text-input" name="phoneNumber" type="text" value={this.state.phoneNumber} variant='outlined' onChange={(e)=>{this.handleNumberChange(e)}}  label="Phone Number" />
                                <error-output className="text-error" htmlFor="error">{this.state.numberError}</error-output>  
                            </div>
                            <div className="row">
                                <TextField className="text-input" type="text" name="pinCode" value={this.state.pinCode} label="Pincode" variant='outlined' onChange={(e)=>{this.handlepinCodeChange(e)}} style={{ marginRight: '1.5%'}}/>
                                <error-output className="text-error" htmlFor="error">{this.state.pinCodeError}</error-output>
                                <TextField className="text-input" value={this.state.locality} name="locality" type="text" label="Locality" variant='outlined' onChange={(e)=>{this.handleLocalityChange(e)}} />
                            </div>
                            <div className="row">
                                <TextField className="textarea" name="address" value={this.state.address} label="Address" variant='outlined' multiline={true} maxRows={5} onChange={(e)=>{this.handleAddressChange(e)}} />
                            </div>
                            <div className="row">
                                <TextField className="text-input" name="city" value={this.state.city} type="text" label="city/town" onChange={(e)=>{this.handleCityChange(e)}} variant='outlined' style={{ marginRight: '1.5%'}}/>
                                <TextField className="text-input" name="landmark" value={this.state.landmark} type="text" label="Landmark" variant='outlined'onChange={(e)=>{this.handleLandmarkChange(e)}} />
                            </div>
                            <div className="radio-row">
                                <label className="type-label">Type</label><br/>
                                <input className="radio-input" name="radio"type="radio"></input>
                                <label className="radio-label">Home</label>
                                <input className="radio-input radio" name="radio" type="radio"></input>
                                <label className="radio-label">Work</label>
                                <input className="radio-input radio" name="radio" type="radio"></input>
                                <label className="radio-label">Others</label>
                            </div>
                       </div>
                       <div className="button-input">
                           <button onClick={(e)=>this.props.togglePanelSummary(e)}className="continue-button"type="submit">Continue</button>
                       </div>
                   </div>
                </form> 
            </div>
        );
    }
    
}
export default CustomerForm;
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
            id:'',
            phoneNumber:'',
            pinCode:'',
            locality:'',
            landmark:'',
            town:'',
            type:'',
            address:'',
            errorMessage:false,
            textError:"",
            numberError:"",
            pinCodeError:""
        }
    }
    componentDidMount = () => {
        // let id = this.props.match.params.id;
        // if(id !== undefined && id !==''){
        //     new StoreService().getUserById(id)
        //     .then(responseDTO => {
        //         let responseData = responseDTO.data;
        //         this.setCustomerForm(responseData.data);
        //     }).catch(error => {
        //         console.log("Error while Fetching Data"+JSON.stringify(error));
        //     })
        // }
    }

    handleNameChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        let nameRegex=RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if(!nameRegex.test(e.target.value)){
          this.setState({
            textError:"Invalid Name Format",
            errorMessage:true
          })
        }
        else{
          this.setState({textError:""});
        }
      }

      handleNumberChange=(e)=>{
        this.setState({
            [e.target.phoneNumber]:e.target.value
        });
        let phoneNumberRegex=RegExp("[+]{0,1}[0-9]{1,}\\s{0,1}[1-9]{1}[0-9]{9}$");
        if(!phoneNumberRegex.test(e.target.value)){
          this.setState({
            numberError:"Invalid Phone Number",
            errorMessage:true
          })
        }
        else{
          this.setState({numberError:""});
        }
      }

      handlepinCodeChange=(e)=>{
        this.setState({
            [e.target.pinCode]:e.target.value
        });
        let pinCodeRegex=RegExp("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$");
        if(!pinCodeRegex.test(e.target.value)){
          this.setState({
            pinCodeError:"Invalid Pin Code",
            errorMessage:true
          })
        }
        else{
          this.setState({pinCodeError:""});
        }
      }

    setCustomerForm = (customerData) => {
        this.setState({
            id:customerData.id,
            name:customerData.name,
            phoneNumber:customerData.phoneNumber
        })
    }

    save = async (event) => {
        event.preventDefault();
        console.log("save button clicked");
        if(this.state.isErrorForName || this.state.isErrorForDate || this.state.isErrorForSalary){
            window.alert("Please Fill correct values");
        }else{
            let customerObject = {
                id:this.state.id,
                pinCode:this.state.pinCode,
                locality:this.state.locality,
                address:this.state.address,
                landmark:this.state.landmark,
                town:this.state.town,
                type:this.state.type
            }
            new StoreService().updateUser(customerObject)
            .then(responseText => {
                console.log("Data updated successfully" +JSON.stringify(responseText.data));
            })
            .catch(error => {
                console.log("Error While Adding Data"+JSON.stringify(error));
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
                                <TextField className="text-input"  label="Name" variant='outlined' onChange={(e)=>{this.handleNameChange(e)}} style={{marginRight: '1.5%'}} size='medium'/>
                                <error-output className="text-error" htmlFor="error">{this.state.textError}</error-output>                               
                                <TextField className="text-input" type="text" variant='outlined' onChange={(e)=>{this.handleNumberChange(e)}}  label="Phone Number" />
                                <error-output className="text-error" htmlFor="error">{this.state.numberError}</error-output>  
                            </div>
                            <div className="row">
                                <TextField className="text-input" type="text" label="Pincode" variant='outlined' onChange={(e)=>{this.handlepinCodeChange(e)}} style={{ marginRight: '1.5%'}}/>
                                <error-output className="text-error" htmlFor="error">{this.state.pinCodeError}</error-output>
                                <TextField className="text-input" type="text" label="Locality" variant='outlined'/>
                            </div>
                            <div className="row">
                                <TextField className="textarea" label="Address" variant='outlined' multiline={true} maxRows={5} />
                            </div>
                            <div className="row">
                                <TextField className="text-input" type="text" label="city/town" variant='outlined' style={{ marginRight: '1.5%'}}/>
                                <TextField className="text-input" type="text" label="Landmark" variant='outlined'/>
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
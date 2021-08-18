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
            address:''
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
                                <TextField className="text-input"  label="Name" variant='outlined' style={{marginRight: '1.5%'}} size='medium'/>
                                <TextField className="text-input" type="text" variant='outlined' label="Phone Number" />
                            </div>
                            <div className="row">
                                <TextField className="text-input" type="text" label="Pincode" variant='outlined' style={{ marginRight: '1.5%'}}/>
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
export default CustomerForm
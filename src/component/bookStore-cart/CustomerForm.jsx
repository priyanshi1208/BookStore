import React from 'react';
import '../bookStore-cart/CustomerForm.scss';
import {TextField} from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
function CustomerForm(props){
    // let textAreaStyle={
    // }
    return(
        <div className="main-container">
            <h3 className="form-title">Customer Details</h3>
           <form className='customerform' action="#">
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
                       <button onClick={(e)=>props.togglePanelSummary(e)}className="continue-button"type="submit">Continue</button>
                   </div>
               </div>
            </form> 
        </div>
    );
}
export default CustomerForm
import React from 'react';
import '../bookStore-cart/CustomerForm.scss';

function CustomerForm(props){
    return(
        <div className="main-container">
            <h3>Customer Details</h3>
           <form className='form' action="#">
               <div className="form-container">
                   <div className="form-input">
                        <div className="row">
                            <input className="text-input" type="text" placeholder="Name"></input>
                            <input className="text-input" type="text" placeholder="Phone Number"></input>
                        </div>
                        <div className="row">
                            <input className="text-input" type="text" placeholder="Pincode"></input>
                            <input className="text-input" type="text" placeholder="Locality"></input>
                        </div>
                        <div className="row">
                            <textarea className="textarea" placeholder="Address"></textarea>
                        </div>
                        <div className="row">
                            <input className="text-input" type="text" placeholder="city/town"></input>
                            <input className="text-input" type="text" placeholder="Landmark"></input>
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
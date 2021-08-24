import React from "react";
import loginImg from "../../images/login.svg";
import './Register.scss';
import StoreService from "../../service/StoreService";
import { TextField } from "@material-ui/core";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      number:"",
      email:"",
      password:"",
      errorMessage:false,
      textError:"",
      numberError:"",
      emailError:"",
      passwordError:""
  }

  this.textFieldStyle = {
    margin:'5px',
    width:'300px',
  }
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
      this.setState({textError:"",
      errorMessage:false});
    }
  }
  handleNumberChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    let numberRegex=RegExp("\\d{2}\\d{10}");
    if(!numberRegex.test(e.target.value)){
      this.setState({
      numberError:"Invalid Number Format",
      errorMessage:true
      })
    }
    else{
      this.setState({numberError:"",
      errorMessage:false});
    }
  }
  handleEmailChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    let emailRegex=RegExp("^[A-Za-z0-9-\\+]+(\\.[A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    if(!emailRegex.test(e.target.value)){
      this.setState({
      emailError:"Invalid Email Format",
      errorMessage:true
      })
    }
    else{
      this.setState({emailError:"",
      errorMessage:false});
    }
  }
  handlePasswordChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    let passwordRegex=RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*-+=()]).{8,}$");
    if(!passwordRegex.test(e.target.value)){
      this.setState({
      passwordError:"Invalid Password",
      errorMessage:true
      })
    }
    else{
      this.setState({passwordError:"",
      errorMessage:false});
    }
  }
  save=async(e)=>{
    e.preventDefault();
    if(this.state.errorMessage===true){
        window.alert("Please enter valid data");
    }
    else{
      let userObject={
          name:this.state.username,
          emailId:this.state.email,
          password:this.state.password,
          phoneNumber:this.state.phoneNumber
      }
      new StoreService().addUser(userObject)
      .then(response=>{
      console.log("Data Added Successfully"+JSON.stringify(response.data));
      window.alert("User Registered Successfully");
      })
      .catch(error=>{
      console.log("Error in Adding data"+JSON.stringify(error));
      })
    }
  }

  render() {
    return (
      <div className="bookStore-register">
      <div className="login">
        <div className="container">
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form className="form">
              <TextField label='Name' variant='outlined' color='secondary' style={this.textFieldStyle} size='small' type="text" name="username"  onChange={(e)=>{this.handleNameChange(e)}}  />
              <error-output className="text-error" htmlFor="error">{this.state.textError}</error-output>


              <TextField label='Email' variant='outlined' color='secondary' style={this.textFieldStyle} size='small' type="email" name="email"  onChange={(e)=>{this.handleEmailChange(e)}}  />
              <error-output className="email-error" htmlFor="error">{this.state.emailError}</error-output>
            
            
              <TextField label='Phone Number' variant='outlined' color='secondary' style={this.textFieldStyle} size='small' type="text" name="phoneNumber"  onChange={(e)=>{this.handleNumberChange(e)}}  />
              <error-output className="number-error" htmlFor="error">{this.state.numberError}</error-output>
            
            
              {/* <label htmlFor="password">Password</label> */}
              <TextField label='Password' variant='outlined' color='secondary' style={this.textFieldStyle} size='small' type="password" name="password"  onChange={(e)=>{this.handlePasswordChange(e)}}  />
              <error-output className="password-error" htmlFor="error">{this.state.passwordError}</error-output>
            
          </form>
        </div>
        <div className="footer-register">
          <button type="submit" onClick={(e)=>{this.save(e)}} className="btn">
            Register
          </button>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Register;
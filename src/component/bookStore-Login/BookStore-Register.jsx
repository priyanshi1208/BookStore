import React from "react";
import loginImg from "../../images/login.svg";
import './Login-Register.scss';
import StoreService from "../../service/StoreService";

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
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input type="text" name="username"  onChange={(e)=>{this.handleNameChange(e)}} placeholder="Name" />
              <error-output className="text-error" htmlFor="error">{this.state.textError}</error-output>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"  onChange={(e)=>{this.handleEmailChange(e)}} placeholder="Email" />
              <error-output className="email-error" htmlFor="error">{this.state.emailError}</error-output>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" name="phoneNumber"  onChange={(e)=>{this.handleNumberChange(e)}} placeholder="Phone Number" />
              <error-output className="number-error" htmlFor="error">{this.state.numberError}</error-output>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"  onChange={(e)=>{this.handlePasswordChange(e)}} placeholder="Password" />
              <error-output className="password-error" htmlFor="error">{this.state.passwordError}</error-output>
            </div>
          </form>
        </div>
        <div className="footer">
          <button type="submit" onClick={(e)=>{this.save(e)}} className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default Register;
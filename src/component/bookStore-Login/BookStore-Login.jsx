import React from "react";
import loginImg from "../../images/login.svg";
import './Login.scss';
import StoreService from "../../service/StoreService";
import {TextField} from '@material-ui/core';
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email:'',
      password:'',
      emailError:'',
      passwordError:'',
      isError:'',
      setMessage:''
    }
    this.textFieldStyle = {
      height: '35px',
      width:'300px',
    }
  }

  

  handleEmailChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
    let emailRegex=RegExp("^[A-Za-z0-9-\\+]+(\\.[A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    if(!emailRegex.test(e.target.value)){
      this.setState({
      emailError:"Enter Valid Mail e.g.:abc124@example.com",
      isError:true
      })
    }
    else{
      this.setState({emailError:"",
      isError:false});
    }
  }

  handlePasswordChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
    let passwordRegex=RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*-+=()]).{8,}$");
    if(!passwordRegex.test(e.target.value)){
      this.setState({
      passwordError:"Enter Valid Password e.g.:Abc123@cdf",
      isError:true
      })
    }
    else{
      this.setState({passwordError:"",
      isError:false});
    }
  }

  login = (e) => {
    if(this.state.isError===true){
      this.setState({setMessage:"Please Enter Valid Details"})
  }
  else{
    let userDetails={
        emailId:this.state.email,
        password:this.state.password
    }
    new StoreService().loginUser(userDetails)
    .then(response=>{
      let data = response.data;
      localStorage.setItem("userId",data.data);
      console.log(data.data);
      window.location.replace('/');
    })
    .catch(error=>{
    this.setState({setMessage:"User Does Not Exist"})
    console.log("Error While Login"+JSON.stringify(error));
    })
  }
  }

  render() {
    return (
      <div className="bookStore-login">
      <div className="login">
        <div className="container">
      <div className="base-container-login" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div>
              <br />
              <TextField label='Email' variant='outlined' color='secondary' style={this.textFieldStyle} size="small" type="text" name="email" required="" onChange={(e)=>{this.handleEmailChange(e)}} />
              <br />
              <error-output className="email-error" htmlFor="error">{this.state.emailError}</error-output>
            </div>
            <div>
              <TextField label='Password' color='secondary' style={this.textFieldStyle} variant='outlined' size="small" type="password" name="password" onChange={(e) => {this.handlePasswordChange(e)}}/>
              <br />
              <error-output className="password-error" htmlFor="error">{this.state.passwordError}</error-output>
            </div>
          </div>
          <div>
          <p className="register-error">{this.state.setMessage}</p>
        </div>
        </div>
        <div className="footer">
          <button type="button" onClick={(e) => {this.login(e)}} className="btn">
            Login
          </button>
          <div className="or"> OR </div>
          <Link to="/register"><button type="button" className="btn" >
          Create A New User
          </button>
          </Link>
        
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Login;
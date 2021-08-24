import React from "react";
import loginImg from "../../images/login.svg";
import './Login.scss';
import StoreService from "../../service/StoreService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      emailError:'',
      passwordError:'',
      isError:''
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
    let emailRegex=RegExp("^[A-Za-z0-9-\\+]+(\\.[A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    if(!emailRegex.test(e.target.value)){
      this.setState({
      emailError:"Invalid Email Format",
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
      passwordError:"Invalid Password",
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
      window.alert("Please enter valid data");
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
    window.alert("User Does Not Exist");
    console.log("Error While Login"+JSON.stringify(error));
    })
  }
  }

  render() {
    return (
      <div className="App">
      <div className="login">
        <div className="container">
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={(e)=>{this.handleEmailChange(e)}} />
              <error-output className="email-error" htmlFor="error">{this.state.emailError}</error-output>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={(e) => {this.handlePasswordChange(e)}}/>
              <error-output className="password-error" htmlFor="error">{this.state.passwordError}</error-output>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={(e) => {this.login(e)}} className="btn">
            Login
          </button>
        </div>
        <div>
          <h5>Or</h5>
        </div>
        <div className="">
        <button type="button" className="btn">
            Create A New User
          </button>
          </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Login;
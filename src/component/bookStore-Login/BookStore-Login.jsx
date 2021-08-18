import React from "react";
import loginImg from "../../images/login.svg";
import './Login-Register.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={(e)=>{this.handleEmailChange(e)}} placeholder="Email Address" />
              <error-output className="email-error" htmlFor="error">{this.state.emailError}</error-output>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={(e) => {this.handlePasswordChange(e)}} placeholder="password" />
              <error-output className="password-error" htmlFor="error">{this.state.passwordError}</error-output>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
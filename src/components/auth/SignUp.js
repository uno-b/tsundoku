import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    return (
      <div className="row signUp auth-wrapper valign-wrapper">
        <div className="col s12 m7 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <h5 className="white-text center-align">Sign Up</h5>
                <div className="input-field">
                  <label for="email">Email</label>
                  <input type="text" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-field">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <br />

                <div className="input-field center-align">
                  <button className="btn-large red waves-effect waves-light">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };

  render() {
    return (
      <div className="row signIn">
        <div className="col s12 m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <h5 className="white-text center-align">Sign In</h5>
                <div className="input-field">
                  <label for="email">Email</label>
                  <input type="text" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="info">
                  <p>For guests: guest@guest.com, guest</p>
                </div>

                <div className="form-field center-align">
                  <button className="btn-large red waves-effect waves-light">
                    Sign In
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

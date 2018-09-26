import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import validateInput from "../../validations/signup";
import { history } from "../../store";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        data => {
          console.log("Signup Successful");
          // debugger
          this.props.addFlashMessage({
            type: "success",
            text: "You Signed Up Successfully. Time to Sign in"
          });

          this.props.signInDialogClose();
          history.push("/");
        },
        ({ data }) => {
          // debugger
          this.setState({ errors: data });
        }
      );
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} class="register">
          <p class="form-row form-row-wide">
            <label for="username">
              username:
              <i class="im im-icon-Male" />
              <input
                type="text"
                class="input-text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </label>
            {errors.username && (
              <span style={{ color: "red" }} className="help-block">
                {errors.username}
              </span>
            )}
          </p>
          <p class="form-row form-row-wide">
            <label for="email2">
              Email Address:
              <i class="im im-icon-Mail" />
              <input
                type="text"
                class="input-text"
                name="email"
                id="email2"
                value={this.state.email}
                onChange={this.onChange}
              />
            </label>
            {errors.email && (
              <span style={{ color: "red" }} className="help-block">
                {errors.email}
              </span>
            )}
          </p>

          <p class="form-row form-row-wide">
            <label for="password">
              Password:
              <i class="im im-icon-Lock-2" />
              <input
                class="input-text"
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </label>
            {errors.password && (
              <span style={{ color: "red" }} className="help-block">
                {errors.password}
              </span>
            )}
          </p>

          <p class="form-row form-row-wide">
            <label for="passwordConfirmation">
              Repeat Password:
              <i class="im im-icon-Lock-2" />
              <input
                class="input-text"
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.onChange}
              />
            </label>
            {errors.passwordConfirmation && (
              <span style={{ color: "red" }} className="help-block">
                {errors.passwordConfirmation}
              </span>
            )}
          </p>
          <div className="form-group">
            <input
              type="submit"
              disabled={this.state.isLoading}
              class="button border fw margin-top-10"
              name="register"
              value="Register"
            />
          </div>
        </form>
      </div>
    );
  }
}

// SignUpForm.propTypes = {
//     userSignupRequest : React.propTypes.func.isRequired
// }

export default SignUpForm;

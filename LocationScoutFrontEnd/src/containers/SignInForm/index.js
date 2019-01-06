import React from "react";
import validateInput from "../../validations/login";
import classnames from "classnames";
import { history } from "../../store";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    this.setState({ errors: {}, isLoading: true });
    this.props.userLoginRequest({
      email: this.state.email,
      password: this.state.password
    });
    this.props.signInDialogClose();
    history.push("/");
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} class="login">
          <p class="form-row form-row-wide">
            <label for="email">
              email:
              <i class="im im-icon-Male" />
              <input
                type="text"
                class="input-text"
                name="email"
                id="email"
                value={this.props.email}
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
                value={this.props.password}
                onChange={this.onChange}
              />
            </label>
            {errors.password1 && (
              <span style={{ color: "red" }} className="help-block">
                {errors.password1}
              </span>
            )}
            <br />
            <span class="lost_password">
              <a href="#">Lost Your Password?</a>
            </span>
          </p>
          <div class="form-row">
            <input
              type="submit"
              disabled={this.state.isLoading}
              class="button border margin-top-5"
              name="login"
              value="Login"
            />
            <div class="checkboxes margin-top-10">
              <input id="remember-me" type="checkbox" name="check" />
              <label for="remember-me">Remember Me</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;

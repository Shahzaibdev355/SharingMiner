import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faEye,
  faEyeSlash,
  faCircle,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";
import Signup from "./Signup";
import { useState, useEffect } from "react";
import Forgotpage from "./Forgotpage";

const Signin = ({ onWelcomeClose }) => {
  let [isSignUp, setIsSignUp] = useState(false);
  let [forgotPage, setForgotPage] = useState(false);


  const [showCaptcha, setShowCaptcha] = useState(false);

  
  let [isPassType, setIsPassType] = useState("password");
  let [isPassIcon, setPassIcon] = useState(faEyeSlash);

  let addBorder = () => {
    let welEmail = document.querySelector(".welcome-row2");
    welEmail.classList.add("wel-email-border");
  };

  let removeBorder = () => {
    let welEmail = document.querySelector(".welcome-row2");
    welEmail.classList.remove("wel-email-border");
  };

  let welPassAddBorder = () => {
    let welPass = document.querySelector(".welcome-row3");
    welPass.classList.add("wel-email-border");
  };

  let welPassRemoveBorder = () => {
    let welPass = document.querySelector(".welcome-row3");
    welPass.classList.remove("wel-email-border");
  };

  const onChange = (value) => {
    if(value === ""){
      console.log("no value");
    }
    else{
      console.log("Captcha value:", value);
    }
  };

  const handlePassToggle = () => {
    if (isPassType === "password") {
      setPassIcon(faEye);
      setIsPassType("text");
    } else {
      setPassIcon(faEyeSlash);
      setIsPassType("password");
    }
  };

  let initialValues = { signInEmail: "", signInPass: "" };

  let [formValues, setFormValues] = useState(initialValues);

  let [formError, setFormError] = useState({});
  let [isSubmit, setIsSubmit] = useState(false);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);
    // console.log("pass");
  };

  useEffect(() => {
    // console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formError]);

  let emailValid = function (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  let validate = (values) => {
    let welEmail = document.querySelector(".welcome-row2");
    let welPass = document.querySelector(".welcome-row3");

    const errors = {};
    // console.log(values.userName);
    if (!values.signInEmail) {
      errors.signInEmail = "Email must not be Empty!";
      welEmail.classList.add("form-input-error");
    } else if (!emailValid(values.signInEmail)) {
      errors.signInEmail = "Email must be valid!";
      welEmail.classList.add("form-input-error");
    } else {
      welEmail.classList.add("form-input-sucess");
      welEmail.classList.remove("form-input-error");
    }

    if (!values.signInPass) {
      errors.signInPass = "password must not be Empty!";
      welPass.classList.add("form-input-error");
    } else {
      welPass.classList.add("form-input-sucess");
      welPass.classList.remove("form-input-error");
    }

    return errors;
  };

  return (
    <>
      {/* Welcome page */}
      <div
        className="animate__animated animate__fadeIn animate__delay-0.5s"
        id="welcomebg"
      >
        <div className="welcome-row">
          <div className="welcome-innerbg">
            <div className="welcome-icon-row">
              {/* <i className="fas fa-long-arrow-alt-left welcome-icon" onclick="welcomeOff()" /> */}
              <FontAwesomeIcon
                icon={faLongArrowAltLeft}
                className="welcome-icon"
                onClick={onWelcomeClose}
              />
            </div>
            <div className="welcome-column">
              <div className="welcome-heading">
                <h1>Welcome</h1>
                <p>Login to your account</p>
              </div>
              <form onSubmit={handleSubmit} id="login-form">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    className="welcome-row2"
                    onClick={addBorder}
                    onBlur={removeBorder}
                  >
                    <img src="./images/email.png" alt="" />
                    <input
                      type="text"
                      placeholder="Email"
                      className="login-email"
                      name="signInEmail"
                      value={formValues.signInEmail}
                      onChange={handleChange}
                    />
                  </div>
                  <small className="small">{formError.signInEmail}</small>
                </div>
                <div
                  style={{
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    className="welcome-row3"
                    onClick={welPassAddBorder}
                    onBlur={welPassRemoveBorder}
                  >
                    <img src="./images/lock.png" alt="" />
                    <input
                      type={isPassType}
                      placeholder="Password"
                      id="wel-password"
                      className="login-pass"
                      name="signInPass"
                      value={formValues.signInPass}
                      onChange={handleChange}
                    />
                    {/* <i style={{ alignSelf: 'center' }} className="fas fa-eye" id="wel-eye-show" />
                                        <i style={{ alignSelf: 'center' }} className="fas fa-eye-slash" id="wel-eye-hide" /> */}
                    <FontAwesomeIcon
                      style={{ alignSelf: "center" }}
                      icon={isPassIcon}
                      id="eye-show"
                      onClick={handlePassToggle}
                    />
                  </div>
                  <small className="small">{formError.signInPass}</small>
                </div>

                <a
                  href="#"
                  className="forgot-pass"
                  onClick={() => setForgotPage(true)}
                >
                  Forgot Password?
                </a>
                
                <div className="slidercaptcha-form-div">
                  <div
                    className="welcome-row4"
                    id="captcha-validate"
                    style={{ justifyContent: "space-between" }}
                    onClick={() => setShowCaptcha(true)}
                  >
                    {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
                      <FontAwesomeIcon
                        style={{ alignSelf: "center" }}
                        icon={faDotCircle}
                        id="not-check"
                      />
                      {/* <FontAwesomeIcon
                        style={{ alignSelf: "center" }}
                        icon={faCircle}
                        className="check-true"
                        id="check-true"
                      /> */}
                      <p> Click to verify </p>
                    {/* </div> */}
                    <img src="./images/welcome-logo.png" alt />
                  </div>
                  {/* <small className="captcha-small" /> */}
                </div>



                {showCaptcha && (
                  
                  <ReCAPTCHA
                    sitekey="6LdpG9kkAAAAAFGWdpiPIZV4Q4Lj6KIxVhBVRBLx"
                    onChange={onChange}
                    style={{
                        marginTop:'10px'
                    }}
                  />
                )}


                <div className="welcome-row5">
                  <button>Login</button>
                </div>
              </form>

              <p className="welcome-para">
                Don’t have an account?
                <strong onClick={() => setIsSignUp(true)}> Sign up</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {isSignUp && <Signup onClose={() => setIsSignUp(false)} />}
      {forgotPage && <Forgotpage onForgotClose={() => setForgotPage(false)} />}
    </>
  );
};

export default Signin;

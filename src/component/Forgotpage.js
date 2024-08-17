import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Forgotpage = ({onForgotClose}) => {

    let addBorder = () => {
        let welEmail = document.querySelector(".forgot-row2")
        welEmail.classList.add("forgot-email-border")
    }

    let removeBorder = () => {
        let welEmail = document.querySelector(".forgot-row2")
        welEmail.classList.remove("forgot-email-border")
    }


    let initialValues = { forgotEmail: "" }

    let [formValues, setFormValues] = useState(initialValues)

    let [formError, setFormError] = useState({})
    let [isSubmit, setIsSubmit] = useState(false)

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        setFormError(validate(formValues))
        setIsSubmit(true)
        // console.log("pass");
    }


    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formError])

    let emailValid = function (email) {
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
    }


    let validate = (values) => {

        let welEmail = document.querySelector(".forgot-row2")

        const errors = {}
        // console.log(values.userName);
        if (!values.forgotEmail) {
            errors.forgotEmail = "Email must not be Empty!"
            welEmail.classList.add("form-input-error")

        }
        else if (!emailValid(values.forgotEmail)) {
            errors.forgotEmail = "Email must be valid!"
            welEmail.classList.add("form-input-error")
        }
        else {
            welEmail.classList.add("form-input-sucess")
            welEmail.classList.remove("form-input-error")
        }



        return errors

    }





    return (
        <>
            <div className="animate__animated animate__fadeIn animate__delay-0.5s" id="forgotbg">
                <div className="forgot-row">
                    <div className="forgot-innerbg">
                        <div className="forgot-icon-row">
                            {/* <i className="fas fa-long-arrow-alt-left welcome-icon" onclick="welcomeOff()" /> */}
                            <FontAwesomeIcon icon={faLongArrowAltLeft} className="forgot-icon" onClick={onForgotClose} />
                        </div>
                        <div className="forgot-column">
                            <div className="forgot-heading">
                                <h1>Reset Your Password</h1>
                                <p>Enter your Email we will send you instructions on <br /> how to reset your password</p>
                            </div>
                            <form onSubmit={handleSubmit} id="forgot-form">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                    <div className="forgot-row2" onClick={addBorder} onBlur={removeBorder}>
                                        <img src="./images/email.png" alt="" />
                                        <input type="text" placeholder="Email"
                                            className="login-email"
                                            name="forgotEmail"
                                            value={formValues.forgotEmail}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <small className="small">{formError.forgotEmail}</small>
                                </div>




                                <div className="forgot-row5">
                                    <button>Send Email To Reset Password</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forgotpage;
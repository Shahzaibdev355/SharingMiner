import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft, faEye, faEyeSlash, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";






const Signup = ({ onClose }) => {

    let [isPassType, setIsPassType] = useState("password")
    let [isPassIcon, setPassIcon] = useState(faEyeSlash)

    let [isConPassType, setIsConPassType] = useState("password")
    let [isConPassIcon, setConPassIcon] = useState(faEyeSlash)

    const handlePassToggle = () => {
        if (isPassType === "password") {
            setPassIcon(faEye)
            setIsPassType("text")
        }
        else {
            setPassIcon(faEyeSlash)
            setIsPassType("password")
        }

    }
    const handleConPassToggle = () => {
        if (isConPassType === "password") {
            setConPassIcon(faEye)
            setIsConPassType("text")
        }
        else {
            setConPassIcon(faEyeSlash)
            setIsConPassType("password")
        }

    }


    // These are function maded to remove boder from div
    // let createPass = document.querySelector(".create-pass")
    // let confirmPass = document.querySelector(".confirm-pass")
    let addBorder = () => {
        let createPass = document.querySelector(".create-pass")
        createPass.classList.add("create-pass-border")
    }

    let removeBorder = () => {
        let createPass = document.querySelector(".create-pass")
        createPass.classList.remove("create-pass-border")
    }

    let addConfirmBorder = () => {
        let confirmPass = document.querySelector(".confirm-pass")
        confirmPass.classList.add("confirm-pass-border")
    }
    
    let removeConfirmBorder = () => {
        let confirmPass = document.querySelector(".confirm-pass")
        confirmPass.classList.remove("confirm-pass-border")
    }






    let initialValues = { firstName: "", surName: "", email: "",
                         password: "", conPassword: "", userSelect:"",
                         walInvestAmount:"", userWalletNumber:"" }

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

    let userValid = function (user) {
        return (/^[A-Za-z.]{3,22}$/.test(user));
    }
    let emailValid = function (email) {
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
    }
    let passwordValid = function (password) {
        return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/.test(password))
    }



    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formError])

    let validate = (values) => {

        let fName = document.querySelector("#fname")
        let lName = document.querySelector("#lname")
        let selectCountry = document.querySelector("#country")
        let email = document.querySelector(".email-input")
        let createPass = document.querySelector(".create-pass")
        let confirmPass = document.querySelector(".confirm-pass")
        let countryDrop = document.querySelector(".country-dropdown")
        let investAmount = document.querySelector(".invest-input")
        let walletNumber = document.querySelector(".walletNumber-input")


        const errors = {}
        // console.log(values.userName);
        if (!values.firstName) {
            errors.firstName = "Name must not be Empty!"
            fName.classList.add("form-input-error")
        }
        else if (!userValid(values.firstName)) {
            errors.firstName = "Name must be valid!"
            fName.classList.add("form-input-error")
        }
        else {
            fName.classList.add("form-input-sucess")
            fName.classList.remove("form-input-error")
        }


        if (!values.surName) {
            errors.surName = "Surname must not be Empty!"
            lName.classList.add("form-input-error")
        }
        else if (!userValid(values.surName)) {
            errors.surName = "Name must be valid!"
            lName.classList.add("form-input-error")
        }
        else if (values.firstName === values.surName) {
            errors.surName = "Name and Surname should be different"
            lName.classList.add("form-input-error")
        }
        else {
            lName.classList.add("form-input-sucess")
            lName.classList.remove("form-input-error")
        }

        if (!values.email) {
            errors.email = "Email must not be Empty!"
            email.classList.add("form-input-error")
        }
        else if (!emailValid(values.email)) {
            errors.email = "Email must be Valid!"
            email.classList.add("form-input-error")
        }
        else {
            email.classList.add("form-input-sucess")
            email.classList.remove("form-input-error")
        }


        if (!values.password) {
            errors.password = "Password must not be Empty!"
            createPass.classList.add("form-input-error")
            
        }
        else if (!passwordValid(values.password)) {
            let createPass = document.querySelector(".create-pass")
            errors.password = "Password must be Valid!"
            createPass.classList.add("form-input-error")
        }
        else{
            createPass.classList.add("form-input-sucess")
            createPass.classList.remove("form-input-error")
        }


        if (!values.conPassword) {
            errors.conPassword = "Confirm Password must not be Empty!"
            confirmPass.classList.add("form-input-error")
        }
        else if (values.password !== values.conPassword) {
            errors.conPassword = "Confirm password must match Password!"
            confirmPass.classList.add("form-input-error")
        }
        else{
            confirmPass.classList.add("form-input-sucess")
            confirmPass.classList.remove("form-input-error")
        }



        if (!values.userSelect) {
            errors.userSelect = "Please select option!"
            countryDrop.style.border = "2px solid red"
        }
        else{
            countryDrop.style.border = "2px solid green"
        }


        if (!values.walInvestAmount) {
            errors.walInvestAmount = "Amount field must not be Empty!"
            investAmount.classList.add("form-input-error")
        }
        else if (!Number.isInteger(parseInt(values.walInvestAmount))) {
            errors.walInvestAmount = "Amount must be in Number!"
            investAmount.classList.add("form-input-error")
        }
        else {
            investAmount.classList.add("form-input-sucess")
            investAmount.classList.remove("form-input-error")
        }


        
        if (!values.userWalletNumber) {
            errors.userWalletNumber = 'Wallet field must not be Empty!'
            walletNumber.classList.add("form-input-error")
        }
        else if (!Number.isInteger(parseInt(values.userWalletNumber))) {
            errors.userWalletNumber = "Wallet must be in Number!"
            walletNumber.classList.add("form-input-error")
        }
        else {
            walletNumber.classList.add("form-input-sucess")
            walletNumber.classList.remove("form-input-error")
        }

        // if (userName === "") {
        //     errors.userName='Name must not be Empty!'
        // }
        // else if (!userValid(userName)) {
        //     errors.userName="Name must be Valid"
        // }
        // else {
        //     setSuccess(fName)
        // }
        return errors

    }










    return (
        <>
            {/* signup page */}
            <div className="animate__animated animate__fadeIn animate__delay-0.5s" id="signupbg">
                <div className="signup-row">
                    <div className="signup-innerbg">
                        <div className="signup-icon-row">
                            {/* <i className="fas fa-long-arrow-alt-left signup-icon" onclick="signupOff()" /> */}
                            <FontAwesomeIcon icon={faLongArrowAltLeft} className="signup-icon" onClick={onClose} />
                        </div>
                        <div className="signup-column">
                            <div className="signup-heading">
                                <h1>Register</h1>
                                <p>Registered your account</p>
                            </div>
                            <form onSubmit={handleSubmit} id="for">
                                <div className="signup-row2">
                                    <div>
                                        <input id="fname"
                                            className="input1"
                                            type="text" placeholder="Name*"
                                            name="firstName"
                                            value={formValues.firstName}
                                            onChange={handleChange}
                                        />
                                        <small className="small">{formError.firstName}</small>

                                    </div>
                                    <div>
                                        <input id="lname"
                                            className="input2"
                                            type="text" placeholder="Surname*"
                                            name="surName"
                                            value={formValues.surName}
                                            onChange={handleChange}
                                        />
                                        <small className="small">{formError.surName}</small>
                                    </div>
                                </div>
                                <div className="signup-row2">
                                    <div>
                                        <div className="country-dropdown">
                                            <select id="country"
                                             name="userSelect"
                                             value={formValues.userSelect} 
                                             onChange={handleChange}
                                            >
                                                <option value>Select Country*</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Åland Islands">Åland Islands</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Bouvet Island">Bouvet Island</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Territory">British Indian Ocean
                                                    Territory</option>
                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic
                                                    Republic of The</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)
                                                </option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Territories">French Southern Territories
                                                </option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guernsey">Guernsey</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-bissau">Guinea-bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald
                                                    Islands</option>
                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)
                                                </option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle of Man">Isle of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jersey">Jersey</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic
                                                    People's Republic of</option>
                                                <option value="Korea, Republic of">Korea, Republic of</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Lao People's Democratic Republic">Lao People's Democratic
                                                    Republic</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macao">Macao</option>
                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The
                                                    Former Yugoslav Republic of</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia, Federated States of">Micronesia, Federated States
                                                    of</option>
                                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Palestinian Territory, Occupied">Palestinian Territory,
                                                    Occupied</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Pitcairn">Pitcairn</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russian Federation">Russian Federation</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Helena">Saint Helena</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The
                                                    Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia">Serbia</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Georgia and The South Sandwich Islands">South Georgia
                                                    and The South Sandwich Islands</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of
                                                </option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-leste">Timor-leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="United States Minor Outlying Islands">United States Minor
                                                    Outlying Islands</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Viet Nam">Viet Nam</option>
                                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                <option value="Western Sahara">Western Sahara</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                            {/* <i className="fas fa-caret-down" /> */}
                                            <FontAwesomeIcon icon={faCaretDown} className="country-dropdown-icon" />
                                        </div>
                                        {/* <small className="small">{formError.selectCount}</small> */}
                                        <small className="country-small">{formError.userSelect}</small>
                                    </div>
                                    <div>
                                        <input className="email-input"
                                            type="text" placeholder="Email*"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                        <small className="small">{formError.email}</small>
                                    </div>
                                </div>
                                <div className="signup-row2">
                                    <div>
                                        <div onClick={addBorder} onBlur={removeBorder} className="create-pass">
                                            <input className="input" type={isPassType}
                                                id="password" placeholder="Create Password*"
                                                name="password"
                                                value={formValues.password}
                                                onChange={handleChange}
                                            />
                                            {/* <i className="fas fa-eye" id="eye-show" />
                                            <i className="fas fa-eye-slash" id="eye-hide" /> */}
                                            <FontAwesomeIcon icon={isPassIcon} id="eye-show" onClick={handlePassToggle} />
                                            {/* <FontAwesomeIcon icon={faEyeSlash} id="eye-hide" /> */}
                                        </div>
                                        <small className="small">{formError.password}</small>
                                    </div>
                                    <div>
                                        <div onClick={addConfirmBorder} onBlur={removeConfirmBorder} className="confirm-pass">
                                            <input className="input" type={isConPassType}
                                                id="con-password" placeholder="Confirm Password*"
                                                name="conPassword"
                                                value={formValues.conPassword}
                                                onChange={handleChange}
                                            />
                                            {/* <i className="fas fa-eye" id="con-eye-show" />
                                            <i className="fas fa-eye-slash" id="con-eye-hide" /> */}
                                            <FontAwesomeIcon icon={isConPassIcon} id="eye-show" onClick={handleConPassToggle} />
                                        </div>
                                        <small className="small">{formError.conPassword}</small>
                                    </div>
                                </div>
                                <div className="signup-row2" style={{justifyContent: "center"}}>
                                    <div>
                                        <input className="invest-input" type="text" placeholder="Amount to Invest*"
                                        name="walInvestAmount"
                                        value={formValues.walInvestAmount}
                                        onChange={handleChange}
                                         />
                                        <small className="small">{formError.walInvestAmount}</small>
                                    </div>
                                    {/* <input className="selectPool-input" type="text" placeholder="Select Active Pool*" onkeydown="return false" /> */}
                                </div>
                                <div className="signup-row2">
                                    <div>
                                        <input className="walletNumber-input" type="text" placeholder="Wallet number (Reward)"
                                        name="userWalletNumber"
                                        value={formValues.userWalletNumber}
                                        onChange={handleChange}
                                         />
                                        <small className="small">{formError.userWalletNumber}</small>
                                    </div>
                                </div>
                                <div className="signup-row3">
                                    <button>Sign Up</button>
                                </div>
                            </form>
                            <p className="signup-para">Already have an account?<strong onClick={onClose}> Sign in</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
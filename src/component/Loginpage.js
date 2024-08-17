
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import Wallet from "./Wallet";
import Signin from "./Signin";
import { useState } from "react";

const Loginpage = ({onLoginClose}) => {

    // let [isLoginWalletOpen, setIsLoginWalletOpen]= useState(false)
    let [isWalletOpen, setIsWalletOpen]= useState(false)

    let [isWelcomeOpen,setIsWelcomeOpen] = useState(false)


    return (
        <>
            {/* login page */}
            <div className="animate__animated animate__fadeIn animate__delay-0.5s" id="loginbg">
                <div className="login-row">
                    <div className="login-innerbg">
                        <div className="login-icon-row">
                            {/* <i className="fas fa-long-arrow-alt-left login-icon" onclick="loginOff()" /> */}
                            <FontAwesomeIcon icon={faLongArrowAltLeft} className="login-icon" onClick={onLoginClose}/>
                        </div>
                        <div className="login-column">
                            <div className="login-heading">
                                <h1>LOGIN</h1>
                                <p>Login to your account</p>
                            </div>
                            <div className="login-row2" onClick={()=>setIsWalletOpen(true)}>
                                <img src="./images/Wallet.png" alt />
                                <p>Connect Wallet</p>
                            </div>
                            <div className="login-border-row">
                                <div className />
                                <p>or</p>
                                <div className />
                            </div>
                            <div className="login-row2" onClick={()=>setIsWelcomeOpen(true)}>
                                <img src="./images/email.png" alt />
                                <p>Continue with email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isWalletOpen && <Wallet onClose={()=>setIsWalletOpen(false)}/>}
            {isWelcomeOpen && <Signin onWelcomeClose={()=>(setIsWelcomeOpen(false))} />}
        </>
    );
}

export default Loginpage;
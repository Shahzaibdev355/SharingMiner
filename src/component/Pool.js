import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

import Loginpage from "./Loginpage";
import { useState } from "react";


const Pool = ({onClose}) => {

    let [isLoginOpen,setIsLoginOpen] = useState(false)

    return (
        <>
            {/* pool page */}
            <div className="animate__animated animate__fadeIn animate__delay-0.5s" id="poolbg">
                <div className="pool-row">
                    <div className="pool-innerbg">
                        <div className="pool-icon-row">
                            {/* <i className="fas fa-times-circle close-icon" onclick="poolOff()" /> */}
                            <FontAwesomeIcon icon={faTimesCircle} className="close-icon" onClick={onClose}/>
                        </div>
                        <h1 className="pool-heading">Select Pool</h1>
                        <div className="pool-column">
                            <div className="pool-row2" onClick={()=>setIsLoginOpen(true)}>
                                <p className="pool-para">1 - KADENA KD MAX</p>
                                <div className="pool-column2">
                                    {/* <p class="pool-para2">Amount to buy $8000</p> */}
                                    <img src="./images/rectangular-pool.png" alt />
                                    <p className="pool-para2">Amount to buy $8000</p>
                                    <div className="progress">
                                        <div className="bar" style={{ width: '30%' }}>
                                            <p className="percent">30%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pool-row2" onClick={()=>setIsLoginOpen(true)}>
                                <p className="pool-para">2 - KADENA KD MAX</p>
                                <div className="pool-column3">
                                    {/* <p class="pool-para2">Amount to buy $8000</p> */}
                                    <img src="./images/rectangular-pool.png" alt />
                                    <p className="pool-para2">Amount to buy $6000</p>
                                    <div className="progress">
                                        <div className="bar" style={{ width: '60%' }}>
                                            <p className="percent">60%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pool-row2" onClick={()=>setIsLoginOpen(true)}>
                                <p className="pool-para">3 - KADENA KD MAX</p>
                                <div className="pool-column4">
                                    {/* <p class="pool-para2">Amount to buy $8000</p> */}
                                    <img src="./images/rectangular-pool.png" alt />
                                    <p className="pool-para2">Amount to buy $5000</p>
                                    <div className="progress">
                                        <div className="bar" style={{ width: '20%' }}>
                                            <p className="percent">20%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {isLoginOpen && <Loginpage onLoginClose={()=>setIsLoginOpen(false)} />}
        </>
    );
}

export default Pool;
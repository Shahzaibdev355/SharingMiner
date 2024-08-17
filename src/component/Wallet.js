import { useEffect, useState, useReducer } from "react"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import { faLongArrowAltLeft, faQrcode, faSearch, faCaretDown, faCaretUp, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const Wallet = ({ onClose }) => {

    let [seeMore, setIsSeemore] = useState(true)
    let [seeLess, setSeeLess] = useState(false)
    let [flag, setFlag] = useState(false)


    let [isSearchTitle, setIsSearchTitle] = useState("")



    let [wallet, setWallet] = useState(false)






    useEffect(() => {
        console.log("testing")
         // when backend developer paste coin api here remove this fetch("http://localhost:8000/wallets") and paste his api
        fetch('http://localhost:8000/wallets')
            .then((res) => {
                // console.log(res)
                console.log("inside first then")
                if (!res.ok) {
                    throw new Error('data could not load properly')
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setWallet(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    const reducer = (state, action) => {
        if (action.type === "seeMore") {
            // console.log("reducer if cond");
            setFlag(true)
            setIsSeemore(false)
            setSeeLess(true)
        }
    }
    const [state, dispatch] = useReducer(reducer, [])



    let [isQrShow, setQrShow] = useState(false)
    function handleQrOpen() {
        setQrShow(true);
    }




    const handleClick = () => {
        setFlag(false)
        setSeeLess(false)
        setIsSeemore(true)
    };

   


    return (
        <>
            {/* connect wallet */}
            <div className="animate__animated animate__fadeIn animate__delay-0.5s" id="walletbg">
                <div className="wallet-row">
                    <div className="wallet-innerbg">
                        <div className="wallet-icon-row">
                            {/* <i className="fas fa-long-arrow-alt=""-left wallet-icon" onclick="walletOff()" /> */}
                            {/* // <FontAwesomeIcon icon="fas fa-long-arrow-alt=""-left" /> */}
                            <FontAwesomeIcon icon={faLongArrowAltLeft} className="wallet-icon" onClick={onClose} />

                        </div>
                        <h1 className="wallet-heading">Connect wallet</h1>
                        <p className="wallet-para">Connect your wallet with</p>
                        <div className="wallet-column">
                            <div className="wallet-search">
                                <input type="search" placeholder="Search Wallet"
                                    onChange={(e) => setIsSearchTitle(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faSearch} className="wallet-search-icon" />
                                {/* <i className="fas fa-search" /> */}
                            </div>
                            <div className="qr-row">
                                {/* <i className="fas fa-qrcode" /> */}
                                <FontAwesomeIcon icon={faQrcode} className="qr-icon" />
                                <p onClick={handleQrOpen}>Show QR Code</p>
                            </div>


                            {isQrShow && <div className="animate__animated animate__fadeIn animate__delay-0.5s qr-popup-bg">
                                <div className="qr-icon-row">
                                    {/* <i className="fas fa-times-circle qr-close-icon" /> */}
                                    <FontAwesomeIcon icon={faTimesCircle} className="qr-close-icon" onClick={() => setQrShow(false)} />
                                </div>
                                <div className="qr-popup-column">
                                    <img src="./images/default_qrcode.png" alt="" />
                                    <p>Scan QrCode</p>
                                </div>
                            </div>}


                            {
                                wallet &&


                                wallet

                                    .filter((value) => {
                                        if (isSearchTitle === "") {
                                            return value
                                        }
                                        else if (value.title.toLowerCase().includes(isSearchTitle.toLowerCase())) {
                                            return value
                                        }
                                    })

                                    .map((coin, index) => {

                                        if (flag) {

                                            return (
                                                <>
                                                    <div className="wallet-row2" key={coin.id}>
                                                        <img src={coin.src} alt="" />
                                                        <p>{coin.title}</p>
                                                    </div>

                                                </>

                                            )
                                        }
                                        else {

                                            if (index < 4) {
                                                return (<div className="wallet-row2" key={coin.id}>
                                                    <img src={coin.src} alt="" />
                                                    <p>{coin.title}</p>
                                                </div>)

                                            }
                                        }


                                    })

                            }





                            {
                                seeMore && <div className="wallet-row3" onClick={() => dispatch({ type: "seeMore" })}>
                                    <p>See More</p>
                                    <FontAwesomeIcon icon={faCaretDown} className="wallet-row3-icon" />
                                </div>
                            }

                            {
                                seeLess && <div className="wallet-row3" onClick={handleClick}>
                                    <p>See Less</p>
                                    {/* <i className="fas fa-caret-up" /> */}
                                    <FontAwesomeIcon icon={faCaretUp} className="wallet-row3-icon" />
                                </div>
                            }






                           

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wallet;
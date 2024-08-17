import Wallet from "./Wallet";
import { useState } from "react";
import Pool from "./Pool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faInstagram, faTwitter, faTelegram, faYoutube, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Footer from "./Footer";
import About from "./About";
import Roadmap from "./Roadmap";




const Home = () => {

    let [isWalletOpen, setIsWalletOpen] = useState(false)

    let [isPoolOpen, setIsPoolOpen] = useState(false)

    let handleWalletOpen = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        
        hamburger.classList.toggle("toggle");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        navLinks.classList.toggle("open");
        setIsWalletOpen(true)
    }

    let handlePoolOpen = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        hamburger.classList.toggle("toggle");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        navLinks.classList.toggle("open");
        setIsPoolOpen(true)
    }

    let handleLink = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    }



    let hamburgerOpen = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        console.log("hamburger");
        //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    };



    return (
        <>
            <div>
                <section id="home" className="bg-1">
                    <nav className="nav">
                        <img className="top-line" src="/images/Vector 7.png" alt="" />
                        <div className="logo">
                            <img src="./images/logo.png" alt="Logo Image" />
                        </div>
                        <div className="hamburger" onClick={hamburgerOpen}>
                            <div className="line1" />
                            <div className="line2" />
                            <div className="line3" />
                        </div>
                        <ul className="nav-links">
                            <li><a href="#home" onClick={handleLink}>HOME</a></li>
                            <li><a href="#About" onClick={handleLink}>ABOUT US</a></li>
                            <li><a href="#RoadMap" onClick={handleLink}>ROAD MAP</a></li>
                            <li><a href="#Whitepaper" onClick={handleLink}>WHITE PAPER</a></li>
                            {/* <li><a href="#">Contact Us</a></li> */}
                            <button className="pool-button" onClick={handlePoolOpen}>Active Pools</button>
                            <button className="wallet-button" onClick={handleWalletOpen}>Connect Wallet</button>
                        </ul>
                    </nav>



                    {/* pool page */}

                    {isPoolOpen && <Pool onClose={() => setIsPoolOpen(false)} />}







                    <div className="main-column1">
                        <h1>Sharing miner</h1>
                        <p>First shared mining</p>
                        {/* <div class="main-bg2"> */}
                        <a className="mine-button" onClick={() => setIsWalletOpen(true)}>
                            Let's Mine Together
                            {/* <i className="fas fa-arrow-right icon-1" /> */}
                            <FontAwesomeIcon icon={faArrowRight} className="icon-1" />
                        </a>

                        <img className="main-circle-img" src="/images/circle.png" alt="" />
                        {/* </div> */}
                        {/* <img class="main-image" src="./images/main-image.png" alt=""> */}
                    </div>
                    <div className="main-row1">
                        <img className="spot-1" src="./images/spot-2.png" alt />
                        <img className="main-image" src="./images/main-image.png" alt />
                        <img className="spot-2" src="/images/spot-2.png" alt />
                        {/* <img class="bottom-line" src="./images/Vector 8.png" alt=""> */}
                    </div>
                </section>


                <About />

                <Roadmap />


                <section id="Whitepaper" className="bg-4">
                    <div className="whitepaper-column">
                        <h1 className> <span className="whitepaper-border">W</span>hitepaper</h1>
                    </div>
                    <div className="whitepaper-row">
                        <div className="whitepaper-column2">
                            <p className="whitepaper-para">
                                Sharing miner is a community where we give each other the opportunity to share cryptocurrency
                                miners. Our team focusses mainly
                                on the world’s most efficient Kadena Kd6 miners, but in the future we intend to open up
                                opportunities to invest in other miners as
                                well. We have the conditions and experience in mining.
                            </p>
                            <br />
                            <p className="whitepaper-para">
                                We have a place (23000m2) in Central Europe with power supply and a photovoltaic farm, ideal for
                                this type of
                                mining.
                                The scheme looks like this: we collect a specific pool from users who want to share in the profits
                                from mining
                                cryptocurrencies.
                                When the crypto miner purchase pool is filled in 100%, the excavator is launched and the profits are
                                divided in
                                proportion to the
                                contribution provided. At the same time, other users can replenish the pool needed to run more
                                miners.
                            </p>
                            <br />
                            <p className="whitepaper-para">
                                A convenient and clear interface will allow you to control your profits on an ongoing basis and will
                                allow you to
                                withdraw your
                                profits at any time using a withdrawal request. The profit will be closely and unambiguously linked
                                to the current
                                exchange rate
                                of the mined currency.
                            </p>
                            <br />
                            <p className="whitepaper-para">
                                Miners will be able to be watched in real time during operation via a lin and with the help of ip
                                cameras.
                                The user will have access to parameters and performance as well as current odds synchronized with
                                world odds.
                                The team charges a commission to cover service and electricity cost.
                                We are focused on continuous development and market expansion. We follow modern trends. We only use
                                the most
                                modern equipment.
                            </p>
                            <br />
                            <p className="whitepaper-last-para">
                                On the portal in the user interface, you will be able to exchange the mined currency for USDT or
                                BNB.
                                The value of our company (sharing Miner Token) <br /> <span>(0xc01789fE07cce9aE031 <br />
                                    F41333b99Ac8EEb509cAb)</span> will increase with the
                                development of the jointly built mine.
                                Our intention is to create the largest shared cryptocurrency mine in Europe.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="bg-5">
                    <div className="footer-row">
                        <img className="img1" src="./images/footer-circle1.png" alt />
                        <img className="footer-logo" src="./images/logo.png" alt />

                        <div className="footer-column">
                            <strong>Quick Links</strong>
                            <a href="#home">Home</a>
                            <a href="#About" >About us</a>
                            <a href="#RoadMap"  >Road map</a>
                            <a href="#Whitepaper" >White paper</a>

                        </div>
                        <div className="footer-column">
                            <strong>Support</strong>
                            <a href>Help Center</a>
                            <a href>Account</a>
                            <a href>Privacy Policy</a>
                            <a href>Terms &amp; Condition</a>
                        </div>
                        <div className="footer-column2">
                            <h1>Newsletter</h1>
                            <form className>
                                <input className type="text" placeholder="Email..." />
                                <button className type="submit">Submit</button>
                            </form>
                            <div className="footer-row2">
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faTelegram} /></a>
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="#" className="footer-icon"><FontAwesomeIcon icon={faDiscord} /></a>
                            </div>
                        </div>
                        <img className="img2" src="./images/footer-circle2.png" alt />
                    </div>
                </section>
                <Footer />
            </div>


            {/* connect wallet */}

            {isWalletOpen && <Wallet onClose={() => setIsWalletOpen(false)} />}

        </>
    );
}

export default Home;
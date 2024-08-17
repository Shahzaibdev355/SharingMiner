
const Roadmap = () => {
    return (
        <section id="RoadMap" className="bg3">
            <div className="roadmap-row">
                <div className="roadmap-column">
                    <h1>RoadMap</h1>
                    <p>Our roadmap visions the upcoming developments that we
                        will merge into our ecosystem to offer the innovators and
                        investors with the wonders of DeFi they truly deserve.
                    </p>
                    <a href="#" className="roadmap-button">Let's Mine Together<i className="fas fa-arrow-right icon-1" /></a>
                </div>
                <img className="img1" src="./images/rocket.png" alt="" />
                <img className="img1-mobile" src="./images/rocket-mobile.png" alt="" />
            </div>
            <div className="roadmap-row2">
                <div className="roadmap-column2">
                    <img src="./images/Group 37018.png" alt="" />
                    <p>Q2 2023</p>
                    <div className="vertical-border" />
                    <div className="roadmap-card1">
                        <ul>
                            <li>User interface construction</li>
                            <li>Miners delivery</li>
                            <li>Creating smart contracts that <br />
                                allow you to handle profit</li>
                            <li>Marketing</li>
                            <li>Token presales</li>
                        </ul>
                    </div>
                </div>
                <div className="roadmap-column2">
                    <img src="./images/Group 37018.png" alt="" />
                    <p>Q3 2023</p>
                    <div className="vertical-border" />
                    <div className="roadmap-card1">
                        <ul>
                            <li>Advertising campaign</li>
                            <li>Cooperation with exchanges</li>
                            <li>Portal support in web3 mode</li>
                        </ul>
                    </div>
                </div>
                <div className="roadmap-column2">
                    <img src="./images/Group 37018.png" alt="" />
                    <p>Q4 2023</p>
                    <div className="vertical-border" />
                    <div className="roadmap-card1">
                        <ul>
                            <li>Extending the offer with <br />
                                other types of excavators</li>
                            <li>Creating a swap-portal</li>
                            <li>Introduction of the possibility <br />
                                of handling payments in Fiat</li>
                            <li>Introduction to the Leasing <br />
                                offer of excavators</li>
                            <li>Physical expansion of the
                                mine</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="roadmap-row3">
                <div className="roadmap-column3">
                    <img src="./images/Group 37018.png" alt="" />
                    <p>Q1 2024</p>
                </div>
                <div className="horizontal-border" />
                <div className="roadmap-card2">
                    <ul>
                        <li>Organizing a community meeting</li>
                        <li>Expansion of the mine</li>
                        <li>Broadening the activity profile</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
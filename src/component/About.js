

const About = () => {
    return (
        <section id="About" className="bg2">
            <div className="about-column">
                <h1 className> <span className="about-border">Ab</span>out Us</h1>
            </div>
            <div className="about-column2">
                <div className="about-slide1">
                    <div className="about-row2">
                        <img className="img1" src="./images/01.png" alt="" />
                        <div className="flex-column1">
                            <h4>Create Pool</h4>
                            <p>We collect sequentially a specific pool from users who want to
                                participate in the acquisition from cryptocurrency mining.</p>
                        </div>
                        <img className="img2" src="./images/si-glyph_connect-2.png" alt="" />
                    </div>
                </div>
                <div className="about-slide2">
                    <div className="slide2-row2">
                        <img className="img2" src="./images/Mask group.png" alt="" />
                        <div className="slide2-column">
                            <h4>Purchase pool</h4>
                            <p>When the crypto miner purchase pool is filled to 100% miner <br />
                                utilization and the split is taken into account in proportion to
                                the share in the contribution.</p>
                        </div>
                        <img className="img1" src="./images/02.png" alt="" />
                    </div>
                </div>
                <div className="about-slide1">
                    <div className="about-row2">
                        <img className="img1" src="./images/03.png" alt="" />
                        <div className="flex-column1">
                            <h4>Start the miners</h4>
                            <p>At the same time, the next operators can supplement the pool needed to
                                start the miners.</p>
                        </div>
                        <img className="img2" src="./images/Mask group-1.png" alt="" />
                    </div>
                </div>
                <img className="about-image" src="./images/Frame 8.png" alt="" />
                <p className="about-para1"><strong>You Can buy our token:</strong> Sharing Miner Token (SMT)</p>
                <p className="about-para2"><strong>Contract Address:</strong> 0xc01789fE07cce9aE031F41333b99Ac8EEb509cAb</p>
            </div>
        </section>
    );
}

export default About;
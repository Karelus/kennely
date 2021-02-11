function Footer( { logo } ) {

    return(
        <div className="footer">
            <div className="footer-flex-container">
                <div className="footer-logo-container">
                    <img src={logo} alt="logo" id="footer-logo-image"/>
                </div>
                <div className="footer-logo-text">
                    <h2>KENNELY</h2>
                </div>
                <div className="copyright-text">
                    <p>Copyright 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
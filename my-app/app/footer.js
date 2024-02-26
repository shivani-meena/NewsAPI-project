function Footer() {
    return (
        <div className="container-fluid">
            <div className="d-none d-lg-block footer-text ">
                <span>NewsAPI</span>
                <img className="elipse-image" src="Ellipse 1.png" />
                <span>Org is not responsible for the content of external sites</span>
            </div>
            <div className="d-block d-lg-none footer-text ">
                <span>NewsAPI</span>
                <img className="elipse-image" src="Ellipse 1.png" />
                <span>Org<br></br>is not responsible for<br></br>the content of external<br></br> sites</span>
            </div>
        </div>
    )
};
export default Footer;

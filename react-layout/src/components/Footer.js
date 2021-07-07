const Footer = () => {
    return (
    <div className="footer_container">
        <div className="logo-info">
            <div className="main-logo"></div>
            <div className="info">
                © 2018-2021, Soft-FX. Various trademarks 
                held by their respective owners:
                SOFT-FX is a software development and 
                integration company and does not provide 
                exchange, investment, investment advice or 
                brokerage services.
            </div>
        </div>

        <div className="footer-navigation">
        <div className="rmf">
            <a className="bold_item" href="#">Rating</a>
            <a className="bold_item" href="#">Master</a>
            <a className="bold_item" href="#">Follower</a>
        </div>
        <div className="ttt">
            <a className="bold_item" href="#">Top</a>
            <a className="usual_item" href="#">Top Master</a>
            <a className="usual_item" href="#">Top Follower</a>
        </div>
        <div className="arc">
            <a className="bold_item" href="#">Top</a>
            <a className="usual_item" href="#">Referrals</a>
            <a className="usual_item" href="#">Commission</a>
        </div>
        <div className="hhpp">
            <a className="bold_item" href="#">Help</a>
            <a className="usual_item" href="#">How PAMM Works</a>
            <a className="usual_item" href="#">PAMM for Masters</a>                 
            <a className="usual_item" href="#">PAMM for Followers</a>           
        </div>
        </div>
    </div>
);
}

export default Footer;
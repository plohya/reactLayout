function Footer() {
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

        {/* <div className="rmf"> */}
            {/* <a className="bold_item" href="#">Rating</a>
            <a className="bold_item" href="#">Master</a>
            <a className="bold_item" href="#">Follower</a> */}
        {/* </div> */}
            <FooterColumnLinks columnClass='rmf' secondClass='bold_item' thirdClass='bold_item' firstText='Rating' secondText='Master' thirdText='Follower' />

        {/* <div className="ttt">
            <a className="bold_item" href="#">Top</a>
            <a className="usual_item" href="#">Top Master</a>
            <a className="usual_item" href="#">Top Follower</a>
        </div> */}
        <FooterColumnLinks columnClass='ttt' firstText='Top' secondText='Top Master' thirdText='Top Follower' />

        {/* <div className="arc">
            <a className="bold_item" href="#">Top</a>
            <a className="usual_item" href="#">Referrals</a>
            <a className="usual_item" href="#">Commission</a>
        </div> */}
        <FooterColumnLinks columnClass='arc' firstText='Top' secondText='Referrals' thirdText='Commission' />

        {/* <div className="hhpp">
            <a className="bold_item" href="#">Help</a>
            <a className="usual_item" href="#">How PAMM Works</a>
            <a className="usual_item" href="#">PAMM for Masters</a>                 
            <a className="usual_item" href="#">PAMM for Followers</a>           
        </div> */}
        <FooterColumnLinks columnClass='hhpp' firstText='Help' secondText='How PAMM Works' thirdText='PAMM for Masters' forthText='PAMM for Followers' />

        
        </div>
    </div>
    );
}

function FooterColumnLinks(props) {
    return(
        <div className={props.columnClass}>
            <a className={props.firstClass} href='#'>{props.firstText}</a>
            <a className={props.secondClass} href='#'>{props.secondText}</a>
            <a className={props.thirdClass} href='#'>{props.thirdText}</a>
            <a className={props.forthClass} href='#'>{props.forthText}</a>
        </div>
    )
}

FooterColumnLinks.defaultProps = {
    firstClass:  "bold_item",
    secondClass: "usual_item",
    thirdClass:  "usual_item",
    forthClass:  "usual_item",
}

export default Footer;
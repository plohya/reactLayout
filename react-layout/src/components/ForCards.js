function ForCards() {
return (
<div className="main_for-container">
    <div className="for-items-container">
        {/* <div className="for_item">
            <div className="content-container">
                <div className="img img_person">
                </div>
                <div className="for-text">
                    For Master
                </div>
                <div className="subtitle">
                    Create an offer and generate income while 
                    protecting your trading strategy from being
                    copied. Trading results are published on 
                    PAMM website giving you visibility to gain 
                    unlimited amount of followers.
                </div>
            </div>
        </div> */}

        <Card pictureClass='img img_person' title='For Master' subtitle='Create an offer and generate income while 
                    protecting your trading strategy from being
                    copied. Trading results are published on 
                    PAMM website giving you visibility to gain 
                    unlimited amount of followers.' />

        {/* <div className="for_item">
            <div className="content-container">
                <div className="img img_bag">
                </div>
                <div className="for-text">
                    For Follower
                </div>
                <div className="subtitle">
                    Turn your capital into investment by 
                    choosing a suitable PAMM account based
                    on the results of the PAMM Master. You
                    will have full transparency in terms 
                    of performance and fees, with full 
                    flexibility to deposit and withdrawal
                    as you see fit.
                </div>
            </div>
        </div> */}

        <Card pictureClass='img img_bag' title='For Follower' subtitle='Turn your capital into investment by 
                    choosing a suitable PAMM account based
                    on the results of the PAMM Master. You
                    will have full transparency in terms 
                    of performance and fees, with full 
                    flexibility to deposit and withdrawal
                    as you see fit.' />

        {/* <div  className="for_item">
            <div className="content-container">
                <div className="img img_technology">
                </div>
                <div className="for-text">
                    Technology
                </div>
                <div className="subtitle">
                    Innovative solutions in PAMM-service 
                    technology are developed to meet the 
                    needs of masters and followers alike. 
                    Soft-FX makes this service convenient 
                    and available to use for each client.
                </div>
            </div>
        </div> */}

        <Card pictureClass='img img_technology' title='Technology' subtitle='Innovative solutions in PAMM-service 
                    technology are developed to meet the 
                    needs of masters and followers alike. 
                    Soft-FX makes this service convenient 
                    and available to use for each client.' />
        </div>
    </div>
);
}

function Card(props) {
    return(
        <div className="for_item">
            <div className="content-container">
                <div className={props.pictureClass}>
                </div>
                <div className="for-text">
                    {props.title}
                </div>
                <div className="subtitle">
                    {props.subtitle}
                </div>
            </div>
        </div>
    )
}

export default ForCards;
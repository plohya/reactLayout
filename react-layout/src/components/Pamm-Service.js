const PammService = () => {
    return (
    <div className="main_pamm-service">
    <div className="pamm-container">
        <div className="text">
            <div className="title">
                SOFT-FX PAMM Service
            </div>
            <div className="subtitle">
                The Soft-FX PAMM Service is a software 
                solution that makes possible to copy 
                trade operations from Master account to 
                one or more Slaves accounts and it helps 
                to automatize profit/loss distribution. 
                <p>Master operates his/her personal capital 
                through a given PAMM Account, and his/her 
                trading strategy is replicated on the 
                Slaves own capital. PAMM Account performance 
                can be viewed and analyzed with the help of 
                advanced analytics that provides information 
                in digital and graphic ways.</p>
            </div>
        </div>
        <div className="tableArea">
            <div className="tableArea_main-table">
                <div className="title-container">
                    <div className="title_question">
                        <div className="title">
                            Best Masters
                        </div>
                        <div className="questionMark"></div>
                    </div>
                    <div className="see_all">
                        See all
                    </div>
                </div>

                <div className="table">
                    <div className="table_titles">
                        <div className="title_item">Account</div>
                        <div className="title_item">Total Gain, %</div>
                        <div className="title_item">Daily Gain, %</div>
                        <div className="title_item">Gain Chart</div>
                    </div>
                    <div className="table_row">
                        <div className="row_element row_element_active">mt4</div>
                        <div className="row_element">113.6</div>
                        <div className="row_element">-0.04</div>
                        <div className="row_element_graph"></div>
                    </div>
                    <div className="table_row">
                        <div className="row_element row_element_active">mt4</div>
                        <div className="row_element">113.6</div>
                        <div className="row_element">-0.04</div>
                        <div className="row_element_graph"></div>
                    </div>
                    <div className="table_row">
                        <div className="row_element row_element_active">mt4</div>
                        <div className="row_element">113.6</div>
                        <div className="row_element">-0.04</div>
                        <div className="row_element_graph"></div>
                    </div>
                </div>
            </div>


                <div className="tableArea_main-table">
                    <div className="title-container">
                        <div className="title_question">
                            <div className="title">
                                Best Followers
                            </div>
                            <div className="questionMark"></div>
                        </div>
                        <div className="see_all">
                            See all
                        </div>
                    </div>

                    <div className="table">
                        <div className="table_titles">
                            <div className="title_item">Account</div>
                            <div className="title_item">Join Date</div>
                            <div className="title_item">Gain, %</div>
                            <div className="title_item">Gain Chart</div>
                        </div>
                        <div className="table_row">
                            <div className="row_element ">40000086</div>
                            <div className="row_element">10/28/2020</div>
                            <div className="row_element">72.41</div>
                            <div className="row_element_graph"></div>
                        </div>
                        <div className="table_row">
                            <div className="row_element">2000003</div>
                            <div className="row_element">10/19/2020</div>
                            <div className="row_element">62.13</div>
                            <div className="row_element_graph"></div>
                        </div>
                        <div className="table_row">
                            <div className="row_element">2000003</div>
                            <div className="row_element">10/19/2020</div>
                            <div className="row_element">62.13</div>
                            <div className="row_element_graph"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PammService;
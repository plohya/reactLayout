import React from "react";

class QF extends React.Component {
    
    leftClick(e) {
        console.log('lc');
        console.log(e);
    }
    
    rightClick(e) {
        console.log('rc');
        console.log(e);
    }

    render() {
        return(
            <div className="qualified-support-container_wrapper ">
            <div className="main_qualified-support_container">
                <div className="area">
                    
                    <div className="text">
                        <div className="title">
                            Qualified 24/5 Support
                        </div>
                        <div className="subtitle">
                            Qualified and experienced 24/5 support, 
                            backed with detailed manuals for Admin/Master/Slave
                            sections.
                        </div>
                    </div>
                    {/* <div className="img-slider">
                        <img src={keyboard} className='img' alt="keyboard">
                            <div className="slider">
                                <div className="arrow_left"></div>
                                <div className="counter">1/3</div>
                                <div className="arrow_right"></div>
                            </div>
                        </img>
                    </div> */}
                    {/* <div className="img-slider"> */}
                        {/* <img src="./img/example.png" className='img' alt="example"> */}
                            {/* <div className="slider">
                                <div className="arrow_left"></div>
                                <div className="counter">2/3</div>
                                <div className="arrow_right"></div>
                            </div> */}
                        {/* </img> */}
                    {/* </div> */}
                    {/* <div className="img-slider"> */}
                        {/* <img src="./img/exampleTwo.jpg" className='img' alt="exampleTwo"> */}
                            {/* <div className="slider">
                                <div className="arrow_left"></div>
                                <div className="counter">3/3</div>
                                <div className="arrow_right"></div> */}
                            {/* </div> */}
                        {/* </img> */}
                    {/* </div> */}
                    <div className="img-slidero">
                            <div className="slider">
                                <div className="arrow_left" onClick={(e) => this.leftClick(e)}></div>
                                <div className="counter">1/3</div>
                                <div className="arrow_right" onClick={(e) => this.rightClick(e)}></div>
                            </div>
                    </div>
                    <div className="img-slidero">
                            <div className="slider">
                            <div className="arrow_left" onClick={(e) => this.leftClick(e)}></div>
                                <div className="counter">2/3</div>
                                <div className="arrow_right" onClick={(e) => this.rightClick(e)}></div>
                            </div>
                    </div>
                    <div className="img-slidero">
                            <div className="slider">
                            <div className="arrow_left" onClick={(e) => this.leftClick(e)}></div>
                                <div className="counter">3/3</div>
                                <div className="arrow_right" onClick={(e) => this.rightClick(e)}></div>
                            </div>
                    </div>
                </div>
         </div>
    </div>
        )
    }
}

export default QF;
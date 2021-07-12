import React from "react";

class TopHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: props.theme,
        }
    }

render() {
    return (
        <div className="upper-header">
            <div className='header_top_container'>  
                <div className="header_top_container_mode-container">
                    <a className="mode_dropdown" href="#">Mode</a>
                    <a className="mode_item active" href="#">Normal</a>
                    <a className="mode_item" href="#">Advanced</a>
                    <a className='mode_item' href="#">Expert</a>
                </div>
                <div className="header_top_container_login-language-container">
                    <a className="login_item" href="#">Login</a>
                    <div className="language_change">
                        <div className='language_item' href="#">English</div>
                        <div className="arrow_btn"></div>
                    </div>
                    <div className="theme_button" onClick={() => {this.props.updateData()}} />
                </div>
            </div>
        </div>
    );
}
}

export default TopHeader;
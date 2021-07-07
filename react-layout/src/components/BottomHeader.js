import React from "react";

class BottomHeader extends React.Component {

    render(){
        return (
        <div className="lower-header">
            <div className="header_low_container">
                <div className="header_low_container_main_logo"></div>
                <input type="checkbox" id="check-menu" />

                <div className="header-navigation">
                    
                <div className="header_low_container_header_navigation">
                    <div className="nav_item">
                            <a className="nav-item_drop nav-item_drop_active" href="#">
                                Top
                            </a>
                            <div className="arrow_btn"></div>
                        <div className="dropdown-content">
                            <a href="#">First</a>
                            <a href="#">Second</a>
                            <a href="#">Third</a>
                        </div>
                    </div>
                    <div className="nav_item">
                        Rating
                    </div>
                    <div className="nav_item">
                        Master
                    </div>
                    <div className="nav_item">
                        Follower
                    </div>
                    <div className="nav_item">
                        <a className="nav-item_drop" href="#">
                            Agent
                        </a>
                        <div className="arrow_btn"></div>
                        <div className="dropdown-content">
                            <a href="#">Agent one</a>
                            <a href="#">Agent two</a>
                            <a href="#">Agent three</a>
                        </div>
                    </div>
                    <div className="nav_item">
                        <a className="nav-item_drop" href="#">
                            Help
                        </a>
                        <div className="arrow_btn"></div>
                        <div className="dropdown-content">
                            <a href="#">Help me</a>
                            <a href="#">Help for you</a>
                            <a href="#">Also help</a>
                        </div>
                    </div>
                </div>

                <div className="header_low_container_open_buttons">
                    <div className="open_buttonOne">
                        <span className="open_content">Open PAMM Account</span>
                    </div>
                    <div className="open_buttonTwo">
                        <span className="open_content">Open Investment Account</span>
                    </div>
                </div>
            </div>
            <label htmlFor="check-menu" className="burger-header_menu"></label>
            </div>
        </div>
        );
    }
}

export default BottomHeader;
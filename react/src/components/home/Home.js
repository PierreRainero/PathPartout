import React from "react";

import './Home.scss';

import Banner from './banner/Banner';
import HomeBoard from './home-board/HomeBoard';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Banner />
                <HomeBoard />
            </div>
        );
    }
}

export default Home;
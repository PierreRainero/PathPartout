import React from "react";

import './Home.scss';

import Banner from './banner/Banner';
import HomeBoard from './home-board/HomeBoard';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner title='Des balades en quelques clics'/>
                <div className="container">
                    <HomeBoard />
                </div>
            </div>
        );
    }
}

export default Home;
import React from "react";
import PropTypes from 'prop-types';

import RideList from './ride-list/RideList';
import Map from '../map/Map';

import RideService from './RideService';
import userStore from '../connection/userStore';

import './RidePage.scss';

class RidePage extends React.Component {
	constructor(props) {
		super(props);


		this.rides = RideService.getUserRides(userStore.getState().connectedUser);

		this.state = {
			selectedRide: this.rides.length>0? this.rides[0] : undefined
		};
	}

	selectRide= (ride) => {
		this.setState({selectedRide : ride});
	}


	render() {
		return (
			<div className="pure-g">
				<div className="pure-u-1 pure-u-md-1-4">
					<RideList rides={this.rides} callback={this.selectRide}/>
				</div>
				<div className="pure-u-1 pure-u-md-3-4">
					<Map
						ride={this.state.selectedRide}
						onRef={ref => (this.child = ref)}
					/>
				</div>
			</div>
		);
	}

}

RidePage.defaultProps = {
	selectedRide: undefined
};

RidePage.propTypes = {
	selectedRide: PropTypes.any
};

export default RidePage;
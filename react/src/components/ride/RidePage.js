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
		const width = window.innerWidth;
		if (width > 768) {
			this.setState({selectedRide : ride});
		}else {
			this.props.history.push({
				pathname: '/map/'+ride.id
			});
		}
	}

	createNewRide= () => {
		this.props.history.push({
			pathname: '/map',
			state: { inCreationMode: true }
		});
	}

	render() {
		return (
			<div className="pure-g">
				<div className="pure-u-1 pure-u-md-1-4">
					<RideList rides={this.rides} callbackSelectRide={this.selectRide} callbackNewRide={this.createNewRide}/>
				</div>
				<div className="pure-u-1 pure-u-md-3-4 hidden-md">
					<Map
						ride={this.state.selectedRide}
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
import React from "react";
import PropTypes from 'prop-types';

import RideItem from '../ride-item/RideItem';

import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_grids-responsive.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_buttons.scss';
import './RideList.scss';

class RideList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			callbackSelectRide: props.callbackSelectRide,
			callbackNewRide: props.callbackNewRide
		};
	}

	changeRide= (ride) => {
		this.state.callbackSelectRide(ride);
	}

	createNewRide= () => {
		this.state.callbackNewRide();
	}

	render() {
		return (
			<div>
				<div className="item first">
					<button className="pure-button button-primary center" onClick={() => this.createNewRide()}>
						<i className="fa fa-plus-circle"></i>
						<span> Créer un trajet</span>
					</button>
				</div>
				{
					this.props.rides.map(el => <div key={el.id} onClick={() => this.changeRide(el)} className="clickable"><RideItem ride={el}/></div>)
				}
            </div>
		);
	}

}

RideList.defaultProps = {
	callbackSelectRide: null,
	callbackNewRide: null
};

RideList.propTypes = {
	callbackSelectRide: PropTypes.func,
	callbackNewRide: PropTypes.func
};

export default RideList;
import React from "react";
import PropTypes from 'prop-types';

import RideItem from '../ride-item/RideItem';

import './RideList.scss';

class RideList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			callback: props.callback
		};
	}

	changeRide(ride){
		this.state.callback(ride);
	}


	render() {
		return (
			<div>
				{
					this.props.rides.map(el => <div key={el.id} onClick={() => this.changeRide(el)} className="clickable"><RideItem ride={el}/></div>)
				}
            </div>
		);
	}

}

RideList.defaultProps = {
	callback: null
};

RideList.propTypes = {
	callback: PropTypes.func
};

export default RideList;
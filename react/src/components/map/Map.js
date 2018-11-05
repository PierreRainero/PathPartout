import React from "react";
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import Ride from '../ride/Ride';

import 'css-modal/build/modal.css';
import './Map.scss';
import RideService from "../ride/RideService";

class Map extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			zoom: 15,
			center: { // Default value (Polytech'Nice) :
				lat: 43.615366,
				lng: 7.072105
			  }
		};

		this.newRide = new Ride(-1, "", "", undefined, undefined, []);

		if (props.ride === undefined) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(this.getUserPosition);
			}
		} else {
			this.updateCenter(props.ride.pois[0].lat, props.ride.pois[0].lng);
		}
	}

	getUserPosition = (position) => {
		this.userLat = position.coords.latitude;
		this.userLng = position.coords.longitude;
		this.updateCenter(this.userLat, this.userLng);
		this.setState( {center : this.center} );
	}

	updateCenter = (lat, lng) => {
		this.center = {
			lat: lat,
			lng: lng
		};
	}

	generatePath = () => {
		const poisLength = this.passedRide.pois.length;
		const path = [];
		let i = 0;

		while (i < poisLength) {
			path.push({ lat: this.passedRide.pois[i].lat, lng: this.passedRide.pois[i].lng });
			i++;
		}

		return path;
	}

	firstRenderPolylines = (map, maps) => {
		this.map = map;
		this.maps = maps;

		this.renderPolylines();
	}

	reRenderPolylines = () => {
		if (this.polyline === undefined) {
			return;
		}

		this.polyline.setMap(null);
		this.renderPolylines();
	}

	renderPolylines = () => {
		this.polyline = new this.maps.Polyline({
			path: this.generatePath(),
			geodesic: false,
			strokeColor: '#009b00',
			strokeOpacity: 1,
			strokeWeight: 3
		});
		this.polyline.setMap(this.map);
	}

	createMapOptions = (maps) => {
		return {
			panControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			styles: [{
				featureType: "poi",
				stylers: [
					{ visibility: "off" }
				]
			}
			]
		}
	}

	clickOnMap= (x, y, lat, lng, event) => {
		if(this.props.history.location.state !== undefined && this.props.history.location.state.inCreationMode){
			document.getElementById('modal-actionner').click();
		}
	}

	render() {
		if(this.props.match !== undefined){
			this.passedRide = RideService.getRideById(this.props.match.params.id);
		}

		let mapRender;
		this.passedRide = this.props.ride!==undefined? this.props.ride : this.passedRide;
		if (this.passedRide !== undefined) {
			this.updateCenter(this.passedRide.pois[0].lat, this.passedRide.pois[0].lng);
			let markers = this.passedRide.pois.map(el =>
				<Marker
					key={el.id}
					title={el.name}
					body={el.description}
					lat={el.lat}
					lng={el.lng}
				/>
			);

			this.reRenderPolylines();
			mapRender = <GoogleMapReact
				bootstrapURLKeys={{
					key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
					language: 'fr',
					region: 'fr'
				}}
				center={this.center}
				defaultZoom={this.state.zoom}
				onGoogleApiLoaded={({ map, maps }) => this.firstRenderPolylines(map, maps)}
				yesIWantToUseGoogleMapApiInternals
				options={this.createMapOptions}
			>

				{markers}

			</GoogleMapReact>;
		} else {
			mapRender = <GoogleMapReact
				bootstrapURLKeys={{
					key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
					language: 'fr',
					region: 'fr' }}
				center={this.state.center}
				defaultZoom={this.state.zoom}
				onClick={this.clickOnMap}
			>
			</GoogleMapReact>;
		}

		return (
			<div style={{ height: '100vh', width: '100%' }}>
				{mapRender}
				<section className="modal--show" id="add-marker-modal" tabIndex="-1"
						role="dialog" aria-labelledby="modal-label" aria-hidden="true">

					<div className="modal-inner">
						<header id="modal-label">Ajouter etape</header>
						<div className="modal-content">Voulez-vous ajouter une étape ici ?</div>
						<footer>
							
						</footer>
					</div>

					<a href="#!" className="modal-close" title="Close this modal" data-close="Close"
						data-dismiss="modal">?</a>
				</section>
				<a href="#add-marker-modal" id='modal-actionner' className='hidden'> </a>
			</div>
		);
	}
}

Map.defaultProps = {
    ride: undefined
};

Map.propTypes = {
    title: PropTypes.any
};

export default Map;
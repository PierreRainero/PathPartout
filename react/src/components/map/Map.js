import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

import './Map.scss';

class Map extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			zoom: 15
		};

		if (props.ride === undefined) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(this.getUserPosition);
				this.updateCenter(this.userLat, this.userLng);
			} else {
				this.updateCenter(43.6155724, 7.071719199999961);
			}
		} else {
			this.updateCenter(props.ride.pois[0].lat, props.ride.pois[0].lng);
		}
	}

	getUserPosition = (position) => {
		this.userLat = position.coords.latitude;
		this.userLng = position.coords.longitude;
	}

	updateCenter = (lat, lng) => {
		this.center = {
			lat: lat,
			lng: lng
		};
	}

	generatePath = () => {
		const poisLength = this.props.ride.pois.length;
		const path = [];
		let i = 0;

		while (i < poisLength) {
			path.push({ lat: this.props.ride.pois[i].lat, lng: this.props.ride.pois[i].lng });
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

	render() {
		this.updateCenter(this.props.ride.pois[0].lat, this.props.ride.pois[0].lng);
		let markers = this.props.ride.pois.map(el =>
			<Marker
				key={el.id}
				title={el.name}
				body={el.description}
				lat={el.lat}
				lng={el.lng}
			/>
		);

		this.reRenderPolylines();
		return (
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
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

				</GoogleMapReact>
			</div>
		);
	}
}

export default Map;

class Ride {
	constructor(id, name, description, creationDate, lastModificationDate, pois) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.creationDate = creationDate;
		this.lastModificationDate = lastModificationDate;
		this.pois = pois;
	}

	/**
	 * Calculate the distance of the ride
	 */
	getDistance(){
		const earthRadius = 6378137;

		let distance = 0.;

		const poisLength = this.pois.length;
		let i = 0;
		while(i < poisLength){
			if(i+1 < poisLength){
				const lat_a = this.convertRad(this.pois[i].lat);
				const lat_b = this.convertRad(this.pois[i+1].lat);
				const lng_a = this.convertRad(this.pois[i].lng);
				const lng_b = this.convertRad(this.pois[i+1].lng);

				const distLat = (lat_b - lat_a) / 2;
				const distLng = (lng_b - lng_a) / 2;
				
				const tmp = (Math.sin(distLat) * Math.sin(distLat)) + Math.cos(lat_a) * Math.cos(lat_b) * (Math.sin(distLng) * Math.sin(distLng));
				const absoluteDist = 2 * Math.atan2(Math.sqrt(tmp), Math.sqrt(1 - tmp));

				distance += earthRadius * absoluteDist;
			}
			i++;
		}

		return Math.round(distance*100)/100;
	}

	convertRad(input){
        return (Math.PI * input)/180;
	}
}

export default Ride;
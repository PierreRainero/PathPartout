class RideStorageMock {
	constructor(initialState) {
		this.state = initialState;
	}

	setState(state) {
		this.state = state;
	}

	getState() {
		return this.state;
	}
}

const rideStorage = new RideStorageMock([]);
export default rideStorage;  
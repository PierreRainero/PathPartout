class UserStore {
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

const userStore = new UserStore([]);
export default userStore;  
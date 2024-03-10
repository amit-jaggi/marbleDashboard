import { SET_LOAD } from '../utils/constants';

const initialState = {
	load: true
};

const indexReducer = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {
		case SET_LOAD:
			return {
				...state,
				load: payload,
			};
		default:
			return state;
	}
};

export default indexReducer;
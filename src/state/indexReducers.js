import { SET_INDEX } from '../utils/constants';

const initialState = {
	index: 0
};

const indexReducer = (state = initialState, action) => {

	const { type, payload } = action;

	switch (type) {
		case SET_INDEX:
			return {
				...state,
				index: payload,
			};
		default:
			return state;
	}
};

export default indexReducer;
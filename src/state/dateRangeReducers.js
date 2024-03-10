import { 
    SET_START_DATE,
    SET_END_DATE,
    LABELS,
} from '../utils/constants';

const initialState = {
    startDate: 0,
    endDate: LABELS.length - 1,
};

const dateRangeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_START_DATE:
            return {
                ...state,
                startDate: payload,
            }
        case SET_END_DATE:
            return {
                ...state,
                endDate: payload,
            }
        default:
            return state;
    }
};

export default dateRangeReducer;
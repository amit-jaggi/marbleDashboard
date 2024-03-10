import {
    SET_LOAD,
    SET_INDEX,
    SET_START_DATE,
    SET_END_DATE,
} from '../utils/constants';

// action-creator
export const setAppLoad = load => {
    return {
        type: SET_LOAD,
        payload: load,
    }
};

// action-creator
export const setIndex = index => {
    return {
        type: SET_INDEX,
        payload: index,
    }
};

// action-creator
export const setStartDate = startDate => {
    return {
        type: SET_START_DATE,
        payload: startDate,
    }
}

// action-creator
export const setEndDate = endDate => {
    return {
        type: SET_END_DATE,
        payload: endDate,
    }
}
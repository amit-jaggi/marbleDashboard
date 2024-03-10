import { combineReducers } from 'redux';
import indexReducer from './indexReducers';
import dateRangeReducer from './dateRangeReducers';
import appLoadRedcuers from './appLoadReducers';

const rootReducer = combineReducers({
    indexReducer,
    dateRangeReducer,
    appLoadRedcuers,
})

export default rootReducer;
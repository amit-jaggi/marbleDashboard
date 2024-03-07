import React, { useState, createContext } from 'react';
import { BUSINESS_MOCK_DATA } from '../utils/constants'; 

export const MainContext = createContext();

export const DataContext = (props) => {
	const [metrics, setMetrics] = useState({
		activeMetrics: BUSINESS_MOCK_DATA.filter((el, index) => index < 4 && el),
		inactiveMetrics: BUSINESS_MOCK_DATA.filter((el, index) => index >= 4 && el),
	});

    return (
        <>
            <MainContext.Provider value={[metrics, setMetrics]}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}
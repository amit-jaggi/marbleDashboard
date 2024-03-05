import React from 'react';
import { Paper } from '@mui/material';
import { MetricsContainer } from '../components/Metrics';
import { ChartContainer } from '../components/Chart';
import { DateFrameContainer } from '../components/DateFrame';

const MarbleDashbord = () => {
	return (
		<Paper
			sx={{
				width: '793px',
				height: '282px',
				borderRadius: '10px',
				padding: '10px 0',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<MetricsContainer />
			<ChartContainer />
			<DateFrameContainer />
		</Paper>
	)
};

export default MarbleDashbord;
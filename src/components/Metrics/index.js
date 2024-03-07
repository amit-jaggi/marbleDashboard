import React, { useState, useContext } from 'react';
import { Box } from '@mui/material';
import {
	ExpandMoreRounded,
	ExpandLessRounded,
} from '@mui/icons-material';
// import MetricsLoading from './MetricsLoading';
import MetricsData from './MetricsData';
import { MainContext } from '../../data/MainContext';


export const MetricsContainer = ({ openChart, handleChart }) => {
	const [metrics] = useContext(MainContext);

	const [activeMetric, setActiveMetric] = useState(0);

	const handleActiveMetric = index => setActiveMetric(index);
	
	return (
		<Box
			sx={{
				width: '773px',
				height: '60px',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{/* <MetricsLoading /> */}
			{
				metrics.activeMetrics !== 0 && metrics.activeMetrics.map(
					(el, index) => <MetricsData
						key={index}
						el={el}
						index={index}
						activeMetric={activeMetric}
						handleActiveMetric={handleActiveMetric}
					/>
				)
			}
			<ToggleChart
				openChart={openChart}
				handleChart={handleChart}
			/>
		</Box>
	)
}

const ToggleChart = ({ openChart, handleChart  }) => {
	return (
		<Box
			sx={{
				width: '25px',
				height: '25px',
				display: 'flex',
				alignItem: 'center',
				justifyContent: 'center',
			}}
		>
			{
				openChart
					? (
						<ExpandMoreRounded
							sx={{ color: '#616161', cursor: 'pointer' }}
							onClick={handleChart}
						/>
					)
					: (
						<ExpandLessRounded
							sx={{ color: '#616161', cursor: 'pointer' }}
							onClick={handleChart}
						/>
					)
			}

		</Box>
	)
}
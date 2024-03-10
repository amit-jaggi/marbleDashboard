import React, { useContext } from 'react';
import { Box } from '@mui/material';
import {
	ExpandMoreRounded,
	ExpandLessRounded,
} from '@mui/icons-material';
import MetricsLoading from './MetricsLoading';
import MetricsData from './MetricsData';
import { MainContext } from '../../data/MainContext';
import { useSelector } from 'react-redux';


export const MetricsContainer = ({ openChart, handleChart }) => {
	const isLoading = useSelector(state => state.appLoadRedcuers.load);
	const [metrics] = useContext(MainContext);

	return (
		<Box
			sx={{
				width: '773px',
				height: '60px',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{
				isLoading
					? [...Array(4).keys()].map((line, index) => <MetricsLoading key={index} />)
					: (<>
						{
							metrics.activeMetrics !== 0 && metrics.activeMetrics.map(
								(el, index) => <MetricsData
									key={index}
									el={el}
									index={index}
								/>
							)
						}
					</>)
			}
			<ToggleChart
				openChart={openChart}
				handleChart={handleChart}
			/>
		</Box>
	)
}

const ToggleChart = ({ openChart, handleChart }) => {
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
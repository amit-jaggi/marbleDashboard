import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { MetricsContainer } from '../components/Metrics';
import { ChartContainer } from '../components/Chart';
import { DateFrameContainer } from '../components/DateFrame';
import { useDispatch } from 'react-redux';
import { setAppLoad } from '../state/actions';

const MarbleDashbord = () => {
	const dispatch = useDispatch();
	const [showChartDialog, setShowChartDialog] = useState(true);

	const handleChartDialog = () => setShowChartDialog(prev => !prev);

	useEffect(() => {
		setTimeout(() => {
			dispatch(setAppLoad(false));
		}, 3000);
	}, [dispatch]);

	return (
		<Paper
			sx={{
				width: '793px',
				minHeight: '80px',
				borderRadius: '10px',
				padding: '10px 0',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				margin: '0 auto',
			}}
		>
			<MetricsContainer
				openChart={showChartDialog}
				handleChart={handleChartDialog}
				/>
			<ChartContainer
				openChart={showChartDialog}
				/>
			<DateFrameContainer
				openChart={showChartDialog}
			/>
		</Paper>
	)
};

export default MarbleDashbord;
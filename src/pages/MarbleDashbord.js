import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { MetricsContainer } from '../components/Metrics';
import { ChartContainer } from '../components/Chart';
import { DateFrameContainer } from '../components/DateFrame';

const MarbleDashbord = () => {
	const [showChartDialog, setShowChartDialog] = useState(true);

	const handleChartDialog = () => setShowChartDialog(prev => !prev);

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
import React from 'react';
import {
	Box,
	Skeleton,
} from '@mui/material';

const MetricsLoading = () => {
	return (
		<Box
			sx={{
				width: '183px',
				height: '54px',
				borderRadius: '10px',
				backgroundColor: '#F1F1F1',
				display: 'flex',
				flexDirection: 'column',
				padding: '7px 0 7px 9px',
				alignItems: 'left',
				justifyContent: 'space-between',
				marginRight: '4px'
			}}
		>
			<Skeleton
				sx={{
					width: '124px',
					height: '15px',
					borderRadius: '2px',
				}}
			/>
			<Skeleton
				sx={{
					width: '152px',
					height: '20px',
					borderRadius: '2px',
				}}
			/>
		</Box>
	)
}

export default MetricsLoading;
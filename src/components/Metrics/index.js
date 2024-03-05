import React from 'react';
import { Box } from '@mui/material';
import MetricsLoading from './MetricsLoading';

export const MetricsContainer = () => {
	return (
		<Box
			sx={{
				// border: '1px solid red',
				width: '773px',
				height: '60px',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<MetricsLoading />
			<MetricsLoading />
			<MetricsLoading />
			<MetricsLoading />
		</Box>
	)
}
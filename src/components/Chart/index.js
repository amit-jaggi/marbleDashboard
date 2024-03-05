import React from 'react';
import { Box } from '@mui/material';
import ChartLoading from './ChartLoading';

export const ChartContainer = () => {
	return (
		<Box
			sx={{
				// border: '1px solid blue',
				// width: '773px',
				// minHeight: '150px',
			}}
		>
			<ChartLoading />
		</Box>
	)
}
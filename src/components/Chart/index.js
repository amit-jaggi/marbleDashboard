import React from 'react';
import { Box, Collapse } from '@mui/material';
// import ChartLoading from './ChartLoading';
import ChartData from './ChartData';

export const ChartContainer = ({ openChart }) => {
	return (
		<Collapse in={openChart}>
			<Box
				sx={{
					// border: '1px solid blue',
					// width: '773px',
					// minHeight: '150px',
					margin: '10px 0',
				}}
			>
				{/* <ChartLoading /> */}
				<ChartData />
			</Box>
		</Collapse>
	)
}
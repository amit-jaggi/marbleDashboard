import React from 'react';
import { Box, Collapse } from '@mui/material';
import ChartLoading from './ChartLoading';
import ChartData from './ChartData';
import { useSelector } from 'react-redux';

export const ChartContainer = ({ openChart }) => {
	const isLoading = useSelector(state => state.appLoadRedcuers.load);
	return (
		<Collapse in={openChart}>
			<Box sx={{ margin: '10px 0' }}>
				{
					isLoading
					? <ChartLoading />
					: <ChartData />
				}
				
			</Box>
		</Collapse>
	)
}
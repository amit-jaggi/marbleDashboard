import React from 'react';
import { Skeleton } from '@mui/material';

const ChartLoading = () => {
	return (
		<Skeleton
			variant="rectangular"
			sx={{
				width: '773px',
				height: '150px',
				borderRadius: '10px',
			}}
		/>
	)
}

export default ChartLoading
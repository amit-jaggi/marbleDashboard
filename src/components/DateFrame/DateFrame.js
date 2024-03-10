import React from 'react';
import {
	Box,
	Typography,
} from '@mui/material';
import { LABELS as labels } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { formatDay } from '../../utils/function-definitions';

const DateFrame = ({ id }) => {
	const {startDate, endDate} = useSelector(state => state.dateRangeReducer);
	
	return (
		<Box
			sx={{
				width: '189px',
				height: '22px',
				borderRadius: '2px',
				padding: '5px 10px',
				marginLeft: '10px',
				backgroundColor: '#F6F6F7',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					width: '169px',
					height: '12px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				{
					id === 1
						? (<Box
							sx={{
								width: '10px',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							{
								[...Array(2).keys()].map((line, index) => <Box
									key={index}
									sx={{
										width: index === 1 ? '3.5px' : '2.25px',
										height: '2px',
										background: 'linear-gradient(#489AD2, #6FC2F3)',
									}}
								/>)
							}
							<Box
								sx={{
									width: '2px',
									height: '2px',
									background: 'linear-gradient(#489AD2, #6FC2F3)',
								}}
							/>
						</Box>)
						: (<Box
							sx={{
								width: '10px',
								height: '2px',
								background: 'linear-gradient(#489AD2, #6FC2F3)',
							}}
						/>)
				}
				<Box
					sx={{
						width: '149px',
						height: '100%',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Inter',
							fontSize: '10px',
							fontWeight: 400,
							cursor: 'default',
						}}
					>{formatDay(labels[startDate], 'start')} - {formatDay(labels[endDate], 'end')}</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default DateFrame;
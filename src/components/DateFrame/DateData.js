import React from 'react';
import {
	Box,
	Tooltip,
	IconButton,
} from '@mui/material';
import { DateRangeRounded } from '@mui/icons-material';
import DateFrame from './DateFrame';
import { useSelector } from 'react-redux';

const DateData = ({ handleClose }) => {
	const isLoading = useSelector(state => state.appLoadRedcuers.load);
	return (
		<Box
			sx={{
				width: '773px',
				height: '32px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end'
			}}
		>
			{
				isLoading
					? ''
					: (<>
						<Tooltip title='Date Picker'>
							<IconButton
								children={<DateRangeRounded
									sx={{
										fontSize: '18px',
										color: '#616161',
									}}
								/>}
								onClick={handleClose}
								sx={{ marginRight: '10px' }}
							/>
						</Tooltip>
						{
							[...Array(2).keys()].map((frame, index) => <DateFrame key={index} id={index} />)
						}
					</>)
			}
		</Box>
	)
}

export default DateData;
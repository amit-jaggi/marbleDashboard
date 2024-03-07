import React from 'react';
import {
	Box,
	Typography,
	Menu,
	MenuItem,
} from '@mui/material';
import { HelpOutlineRounded } from '@mui/icons-material';
import LineChart from '../../assets/LineChart.png';

export const MetricsMenu = ({
	anchorEl,
	open,
	handleClose,
	options,
	handleMenuItemClick
}) => {
	// console.log('options >', options)
	return (
		<Menu
			id="metrics-menu"
			anchorEl={anchorEl}
			open={open}
			onClose={handleClose}
			MenuListProps={{
				'aria-labelledby': 'metrics-menu-btn',
			}}
		>
			{options.map(({ id, title }, index) => {
				return (
					<MenuItem
						key={index}
						sx={{
							margin: index === 0
								? '-2.5px 5px 5px 5px'
								: index === options.length - 1
									? '5px 5px -2.5px 5px'
									: '5px',
							borderRadius: '3px',
						}}
						onClick={(event) => handleMenuItemClick(event, id)}
					>
						<Box
							sx={{
								// border: '1px solid red',
								width: '202px',
								height: '22px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
								<img src={LineChart} alt='line-chart' height="12px" />
								<Typography sx={{
									fontFamily: 'Inter',
									fontSize: '10px',
									fontWeight: 400,
									marginLeft: '10px',
									color: '#303030',
								}}>{title}</Typography>
							</Box>
							<HelpOutlineRounded
								sx={{
									fontSize: '14px',
									color: '#616161',
								}} />
						</Box>
					</MenuItem>
				)
			})}
		</Menu>
	)
}
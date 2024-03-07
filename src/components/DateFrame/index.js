import React, { useState } from 'react';
import {
	Box,
	Collapse,
	Typography,
	Tooltip,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
} from '@mui/material';
import { DateRangeRounded, HighlightOff } from '@mui/icons-material';

export const DateFrameContainer = ({ openChart }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(prevState => !prevState);
	return (
		<>
			<Collapse in={openChart}>
				<Box
					sx={{
						// border: '1px solid red',
						width: '773px',
						height: '32px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end'
					}}
				>
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
				</Box>
			</Collapse>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					sx: {
						maxWidth: 500,
						width: 1,
						"& .MuiInputBase-root": {
							fontSize: 14,
							borderRadius: 1,
							p: "5px 5px",
						},
						borderRadius: '10px',
					},
				}}
			>
				<DialogTitle
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Inter',
							fontWeight: 500,
							fontSize: '20px',
							cursor: 'default',
						}}
					>Select Dates</Typography>
					<Tooltip title='Close' sx={{ fontFamily: 'Inter', fontWeight: 500 }}>
						<IconButton
							children={<HighlightOff sx={{ fontSize: '18px' }}/>}
							color="inherit"
							onClick={handleClose}
						/>
					</Tooltip>
				</DialogTitle>
				<DialogContent
					sx={{
						width: '100%',
						height: 300,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',

					}}
				>
					{/* <DateRangePicker
						ranges={[calendar]}
						onChange={handleDateChange}
						minDate={new Date()}
					/> */}
				</DialogContent>
			</Dialog>
		</>
	)
}

const DateFrame = ({ id }) => {
	return (
		<Box
			sx={{
				width: '189px',
				height: '22px',
				borderRadius: '2px',
				padding: '5px 10px',
				marginLeft: '10px',
				backgroundColor: '#F6F6F7',
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
					>Oct 1, 2022 - Feb 21, 2024</Typography>
				</Box>
			</Box>
		</Box>
	)
}
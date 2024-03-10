import React, { useState } from 'react';
import {
	Box,
	Typography,
	Tooltip,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Select,
	MenuItem,
	InputAdornment,
	FormControl,
	FormHelperText
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../../state/actions';
import { HighlightOff, EditCalendarOutlined } from '@mui/icons-material';
import { LABELS as labels } from '../../utils/constants';

const selectDateInitial = {
	startDate: '',
	endDate: '',
}

const SelectDateDialog = ({ open, handleClose }) => {
	const dispatch = useDispatch();
	const [selectDate, setSelectDate] = useState(selectDateInitial);
	const { startDate, endDate } = selectDate;

	const handleDate = (start, end) => {
		dispatch(setStartDate(start));
		dispatch(setEndDate(end));
		setSelectDate(selectDateInitial);
		handleClose();
	};

	const isDisabled = () => {
		return [
			startDate,
			endDate,
			startDate === endDate
				? ''
				: startDate < endDate
					? 'good to go'
					: ''
		].includes('')
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{
				sx: {
					maxWidth: 450,
					width: 1,
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
						children={<HighlightOff sx={{ fontSize: '20px' }} />}
						color="inherit"
						onClick={handleClose}
					/>
				</Tooltip>
			</DialogTitle>

			<DialogContent
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box sx={{
					mt: 2.5,
					display: 'flex',
					flexDirection: 'column',
					alignItem: 'center',
					justifyContent: 'space-between',
				}}>
					<Box
						sx={{
							width: 300,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							mb: 2,
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Inter',
								fontWeight: 500,
								fontSize: '18px',
								cursor: 'default',
							}}
						>Start Date</Typography>
						<Select
							displayEmpty
							sx={{
								width: 200,
								height: 50,
								fontFamily: 'Inter',
								fontWeight: 500,
								fontStyle: 'non-italic',
								color: 'grey',
							}}
							value={startDate}
							onChange={(event) => setSelectDate({ ...selectDate, startDate: event.target.value })}
							startAdornment={
								<InputAdornment position="start">
									<EditCalendarOutlined />
								</InputAdornment>
							}
						>
							<MenuItem value="" sx={{
								fontFamily: 'Inter',
								fontWeight: 500,
							}} disabled>
								<em>Select</em>
							</MenuItem>
							{
								labels.map((el, index) => <MenuItem
									key={index}
									value={index}
									sx={{
										fontFamily: 'Inter',
										fontWeight: 500,
										m: '2%',
									}}
								>{el}</MenuItem>)
							}
						</Select>
					</Box>
					<Box>
						<Box
							sx={{
								width: 300,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Inter',
									fontWeight: 500,
									fontSize: '18px',
									cursor: 'default',
								}}
							>End Date</Typography>
							<FormControl error={![endDate].includes('') && startDate === endDate
								? true
								: startDate > endDate
									? true
									: false
							}>
								<Select
									displayEmpty
									sx={{
										width: 200,
										height: 50,
										fontFamily: 'Inter',
										fontWeight: 500,
										fontStyle: 'non-italic',
										color: 'grey',
									}}
									value={endDate}
									onChange={(event) => setSelectDate({ ...selectDate, endDate: event.target.value })}
									startAdornment={
										<InputAdornment position="start">
											<EditCalendarOutlined />
										</InputAdornment>
									}
								>
									<MenuItem value="" sx={{
										fontFamily: 'Inter',
										fontWeight: 500,
									}} disabled>
										<em>Select</em>
									</MenuItem>
									{
										labels.map((el, index) => <MenuItem
											key={index}
											value={index}
											sx={{
												fontFamily: 'Inter',
												fontWeight: 500,
												m: '2%',
											}}
										>{el}</MenuItem>)
									}
								</Select>
							</FormControl>
						</Box>
						{
							![startDate, endDate].includes('') && startDate === endDate
								? (<FormHelperText sx={{
									color: 'red',
									fontFamily: 'Inter',
									fontWeight: 400,
									py: 1,
									cursor: 'default',
								}}>Start Date and End Date cannot be same.</FormHelperText>)
								: ''
						}
						{
							![startDate, endDate].includes('') && startDate > endDate
								? (<FormHelperText sx={{
									color: 'red',
									fontFamily: 'Inter',
									fontWeight: 400,
									py: 1,
									cursor: 'default',
								}}>End Date cannot be less than Start Date.</FormHelperText>)
								: ''
						}
					</Box>
				</Box>
			</DialogContent>

			<DialogActions
				sx={{
					pb: 2,
					mx: 'auto',
				}}
			>
				<Button
					variant='contained'
					sx={{
						textTransform: 'capitalize',
						px: 4,
						fontFamily: 'Inter',
						fontWeight: 500,
						fontSize: '16px',
					}}
					disabled={isDisabled()}
					onClick={() => handleDate(startDate, endDate)}
				>Apply</Button>
			</DialogActions>
		</Dialog>
	)
}

export default SelectDateDialog;
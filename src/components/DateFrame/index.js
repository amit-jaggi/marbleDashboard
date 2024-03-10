import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import DateData from './DateData';
import SelectDateDialog from './SelectDateDialog';


export const DateFrameContainer = ({ openChart }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(prevState => !prevState);

	return (
		<>
			<Collapse in={openChart}>
				<DateData handleClose={handleClose} />
			</Collapse>
			<SelectDateDialog open={open} handleClose={handleClose} />
		</>
	)
}
import React, { useState, useContext } from 'react';
import {
	Box,
	Typography,
	Tooltip,
	tooltipClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
	EditRounded,
	TrendingUpRounded,
	TrendingDownRounded,
} from '@mui/icons-material';
import { useHover, interchangeMetrics } from '../../utils/function-definitions';
import { MetricsMenu } from './MetricsMenu';
import { MainContext } from '../../data/MainContext';

const MetricsData = ({ el, index, activeMetric, handleActiveMetric }) => {
	const { title, value, trend, percent } = el;

	const [hoverRef, isHovered] = useHover();
	const [metrics, setMetrics] = useContext(MainContext);
	const { activeMetrics, inactiveMetrics } = metrics;

	// drop-down menu start
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClickListItem = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuItemClick = (event, menuID) => {
		const METRIC_ID = activeMetrics[activeMetric].id;
		const updatedActiveMetrics = interchangeMetrics(activeMetrics, inactiveMetrics, METRIC_ID, menuID);
		const updatedInctiveMetrics = interchangeMetrics(inactiveMetrics, activeMetrics, menuID, METRIC_ID);
		
		setMetrics(prev => ({
			...prev,
			activeMetrics: updatedActiveMetrics,
			inactiveMetrics: updatedInctiveMetrics,
		}));
		setAnchorEl(null);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	// drop-down menu end

	return (
		<Box
			sx={{
				width: '183px',
				height: '60px',
				borderRadius: '10px',
				backgroundColor: index === activeMetric ? '#F1F1F1' : '#FFFFFF',
				padding: '5px 10px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				marginRight: '4px',
				"&:hover": {
					backgroundColor: isHovered ? "#F1F1F1" : "#FFFFFF",
				},
			}}
			ref={hoverRef}
			onClick={() => handleActiveMetric(index)}
		>
			<Box
				sx={{
					width: '163px',
					height: '23px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<MetricHeader title={title} />
				{
					index === activeMetric
						? (
							<>
								<Box
									sx={{
										// border: '0.5px solid blue',
										width: '23px',
										height: '23px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										borderRadius: '5px',
										cursor: 'pointer',
										'&:hover': {
											backgroundColor: '#CBC8C8'
										}
									}}
									id="metrics-menu-btn"
									aria-haspopup="listbox"
									aria-controls="metrics-menu"
									aria-expanded={open ? 'true' : undefined}
									onClick={handleClickListItem}
								>
									<EditRounded
										sx={{
											fontSize: '18px',
											color: '#616161',
										}}
									/>
								</Box>
								<MetricsMenu
									anchorEl={anchorEl}
									open={open}
									handleClose={handleClose}
									options={inactiveMetrics}
									handleMenuItemClick={handleMenuItemClick}
								/>
							</>
						)
						: !(index === activeMetric) && isHovered
							? (
								<>
									<Box
										sx={{
											// border: '0.5px solid blue',
											width: '23px',
											height: '23px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											borderRadius: '5px',
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: '#CBC8C8'
											}
										}}
										id="metrics-menu-btn"
										aria-haspopup="listbox"
										aria-controls="metrics-menu"
										aria-expanded={open ? 'true' : undefined}
										onClick={handleClickListItem}
									>
										<EditRounded
											sx={{
												fontSize: '18px',
												color: '#616161',
											}}
										/>
									</Box>
									<MetricsMenu
										anchorEl={anchorEl}
										open={open}
										handleClose={handleClose}
										options={inactiveMetrics}
										handleMenuItemClick={handleMenuItemClick}
									/>
								</>
							)
							: ("")
				}
			</Box>

			<Box
				sx={{
					// border: '1px solid black',
					width: '163px',
					height: '22px',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<MetricValue value={value} />
				<Box
					sx={{
						// border: '0.5px solid red',
						width: '29px',
						height: '15px',
						display: 'flex',
						alignItems: 'center',
						marginLeft: '-2px',
					}}
				>
					<MetricTrend trend={trend} />
					<MetricPercent percent={percent} />
				</Box>
			</Box>
		</Box>
	)
}

const MetricHeader = ({ title }) => {

	const HtmlTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: '#FFFFFF',
			color: '#000000',
			width: '370px',
			height: '76px',
			borderRadius: '10px',
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
			padding: '15px 10px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'left',
			justifyContent: 'space-between',
		},
	}));

	return (
		<HtmlTooltip
			title={
				<>
					<Typography
						sx={{
							fontFamily: 'Inter',
							fontSize: '14px',
							fontWeight: 600,
						}}
					>Online store sessions</Typography>
					<Typography
						sx={{
							fontFamily: 'Inter',
							fontSize: '11px',
							fontWeight: 400,
						}}
					>Your online store's traffic volume, shown in sessions.</Typography>
				</>
			}
		>
			<Typography
				sx={{
					fontFamily: 'Inter',
					fontWeight: 500,
					fontSize: '11.5px',
					borderBottom: '1px dashed #CCCCCC',
					cursor: 'default',
				}}
			>{title}</Typography>
		</HtmlTooltip>
	)
}

const MetricValue = ({ value }) => {
	return (<Typography
		sx={{
			// border: '0.5px solid red',
			fontFamily: 'Inter',
			fontWeight: 600,
			fontSize: '15px',
			marginRight: '5px',
			cursor: 'default',
		}}
	>{value}</Typography>)
}

const MetricTrend = ({ trend }) => {
	return (<>
		{
			trend
				? (
					<TrendingUpRounded
						sx={{
							fontSize: '16px',
							color: '#616161',
							marginRight: '2px',
						}}
					/>
				)
				: (
					<TrendingDownRounded
						sx={{
							fontSize: '16px',
							color: '#616161',
							marginRight: '2px',
						}}
					/>
				)
		}</>)
}

const MetricPercent = ({ percent }) => {
	return (
		<Typography
			sx={{
				fontFamily: 'Inter',
				fontWeight: 400,
				fontSize: '10px',
				color: '#616161',
				cursor: 'default',
			}}
		>{percent}%</Typography>
	)
}

export default MetricsData
import React, { useState, useContext } from 'react';
import { setIndex, setStartDate, setEndDate } from '../../state/actions';
import { useSelector, useDispatch } from 'react-redux';
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
import { useHover, interchangeMetrics, metricTrendPercent } from '../../utils/function-definitions';
import { MetricsMenu } from './MetricsMenu';
import { MainContext } from '../../data/MainContext';

const MetricsData = ({ el, index }) => {
	const { title, type, percent, dataset } = el;
	const activeMetric_index = useSelector(state => state.indexReducer.index);
	const dispatch = useDispatch();

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
		const METRIC_ID = activeMetrics[activeMetric_index].id;
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
				backgroundColor: index === activeMetric_index ? '#F1F1F1' : '#FFFFFF',
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
			onClick={() => {
				dispatch(setIndex(index));
				dispatch(setStartDate(0));
				dispatch(setEndDate(7));
			}}
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
					index === activeMetric_index
						? (
							<>
								<Box
									sx={{
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
						: !(index === activeMetric_index) && isHovered
							? (
								<>
									<Box
										sx={{
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
					width: '163px',
					height: '22px',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<MetricValue type={type} currentYearCycle={dataset.currentYearCycle} />
				<Box
					sx={{
						width: '29px',
						height: '15px',
						display: 'flex',
						alignItems: 'center',
						marginLeft: '-2px',
					}}
				>
					<MetricTrend dataset={dataset} />
					<MetricPercent percent={percent} dataset={dataset} />
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

const MetricValue = ({ type, currentYearCycle }) => {
	return (<Typography
		sx={{
			fontFamily: 'Inter',
			fontWeight: 600,
			fontSize: '15px',
			marginRight: '5px',
			cursor: 'default',
		}}
	>
		{type === 'amount' ? '$' : ''}
		{currentYearCycle[currentYearCycle.length - 1].toLocaleString()}
		{type === 'percent' ? '%' : ''}
	</Typography>)
}

const MetricTrend = ({ dataset }) => {
	const { currentYearCycle: current, previousYearCycle: previous } = dataset;
	
	return (<>{
			current[current.length - 1] > previous[previous.length - 1]
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

const MetricPercent = ({ dataset }) => {
	const { currentYearCycle: current, previousYearCycle: previous } = dataset;

	return (
		<Typography
			sx={{
				fontFamily: 'Inter',
				fontWeight: 400,
				fontSize: '10px',
				color: '#616161',
				cursor: 'default',
			}}
		>
			{Math.round(metricTrendPercent(current[current.length - 1], previous[previous.length - 1]))}%
		</Typography>
	)
}

export default MetricsData
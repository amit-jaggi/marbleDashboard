import React, { useContext } from 'react';
import { MainContext } from '../../data/MainContext';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import LineChart from './LineChart';
import { LABELS as labels } from '../../utils/constants';


const ChartData = () => {
	const activeMetric_index = useSelector(state => state.indexReducer.index);
	const { startDate, endDate } = useSelector(state => state.dateRangeReducer);
	
	const [{ activeMetrics }] = useContext(MainContext);
	const currentYearCycle = activeMetrics[activeMetric_index].dataset.currentYearCycle;
	const previousYearCycle = activeMetrics[activeMetric_index].dataset.previousYearCycle;

	const data = {
		labels: labels.filter((el, index) => index >= startDate && index <= endDate && el),
		datasets: [	
			{
				label: 'Current Year Cycle',
				data: currentYearCycle.filter((el, index) => index >= startDate && index <= endDate && el),
				borderColor: 'rgba(111, 194, 243, 1)',
				tension: 0.7,
				borderWidth: 2,
				pointRadius: 0,
				fill: false,
			},
			{
				label: 'Previous Year Cycle',
				data: previousYearCycle.filter((el, index) => index >= startDate && index <= endDate && el),
				borderColor: '#C6E4F9',
				borderDash: [7, 5],
				tension: 0.7,
				borderWidth: 2,
				pointRadius: 0,
				fill: false,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						family: 'Inter',
						size: '12px',
						weigth: 400
					},
				},
			},
			y: {
				grid: {
					display: true,
					drawTicks: false,
				},
				ticks: {
					min: activeMetrics[activeMetric_index].options.minOption.minValue,
					max: activeMetrics[activeMetric_index].options.maxOption.maxValue,
					stepSize: activeMetrics[activeMetric_index].options.stepSizeOption.stepSizeValue,
					callback: function (value, index, values) {
						if (value === activeMetrics[activeMetric_index].options.minOption.minValue) {
							return activeMetrics[activeMetric_index].options.minOption.minLabel;
						} else if (value === activeMetrics[activeMetric_index].options.maxOption.maxValue) {
							return activeMetrics[activeMetric_index].options.maxOption.maxLabel;
						} else if (value === activeMetrics[activeMetric_index].options.stepSizeOption.stepSizeValue) {
							return activeMetrics[activeMetric_index].options.stepSizeOption.stepSizeLabel;
						}
						return '';
					},
					font: {
						family: 'Inter',
						size: '12px',
						weigth: 400
					},
				}
			},
		},
	};

	return (
		<Box
			sx={{
				width: '773px',
				height: '150px',
				borderRadius: '10px',
				padding: '0 10px',
			}}
		>
			<LineChart data={data} options={options} />
		</Box>
	)
}

export default ChartData;
export const BUSINESS_MOCK_DATA = [
	{
		id: 1,
		title: 'Online Store Sessions',
		type: 'n/a',
		dataset: {
			currentYearCycle: [174534, 257863, 297863, 344567, 264534, 184537, 214565, 255581],
			previousYearCycle: [231462, 311656, 266511, 156516, 241683, 304491, 344646, 236516],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '400K',
				maxValue: 400000,
			},
			stepSizeOption: {
				stepSizeLabel: '200K',
				stepSizeValue: 200000,
			},
		}
	},
	{
		id: 2,
		title: 'Net Return Value',
		type: 'amount',
		dataset: {
			currentYearCycle: [2456.45, 8783.59, 6453.23, 9456.35, 4453.45, 2453.12, 9786.89, 1507.44],
			previousYearCycle: [7537.23, 6538.56, 1763.35, 4437.94, 5756.16, 2457.45, 9457.45, 1723.27],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '10K',
				maxValue: 10000,
			},
			stepSizeOption: {
				stepSizeLabel: '5K',
				stepSizeValue: 5000,
			},
		}
	},
	{
		id: 3,
		title: 'Total Order',
		type: 'n/a',
		dataset: {
			currentYearCycle: [31544, 36454, 16545, 10871, 21785, 32549, 26651, 10511],
			previousYearCycle: [26126, 22437, 27674, 36375, 28657, 18463, 15737, 12456],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '40K',
				maxValue: 40000,
			},
			stepSizeOption: {
				stepSizeLabel: '20K',
				stepSizeValue: 20000,
			},
		}
	},
	{
		id: 4,
		title: 'Conversion Rate',
		type: 'percent',
		dataset: {
			currentYearCycle: [4.57, 3.78, 2.12, 1.75, 0.86, 3.43, 2.46, 3.18],
			previousYearCycle: [2.04, 3.53, 0.46, 1.43, 2.35, 4.35, 3.42, 2.82],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '5%',
				maxValue: 5,
			},
			stepSizeOption: {
				stepSizeLabel: '2.5%',
				stepSizeValue: 2.5,
			},
		}
	},
	{
		id: 5,
		title: 'Average Order Value',
		type: 'amount',
		dataset: {
			currentYearCycle: [18.56, 19.50, 27.15, 35.67, 23.35, 6.67, 26.12, 16.47],
			previousYearCycle: [17.27, 13.38, 30.75, 28.25, 26.73, 5.37, 20.17, 19.18],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '40',
				maxValue: 40,
			},
			stepSizeOption: {
				stepSizeLabel: '20',
				stepSizeValue: 20,
			},
		}
	},
	{
		id: 6,
		title: 'Gross Sales',
		type: 'n/a',
		dataset: {
			currentYearCycle: [275, 226, 101, 211, 108, 318, 245, 379],
			previousYearCycle: [194, 31, 97, 129, 226, 248, 242, 351],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '400',
				maxValue: 400,
			},
			stepSizeOption: {
				stepSizeLabel: '200',
				stepSizeValue: 200,
			},
		}
	},
	{
		id: 7,
		title: 'Store Search Conversion',
		type: 'percent',
		dataset: {
			currentYearCycle: [8, 7, 5, 2, 4, 1, 3, 8],
			previousYearCycle: [7, 2, 6, 5, 8, 4, 9, 6],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '10%',
				maxValue: 10,
			},
			stepSizeOption: {
				stepSizeLabel: '5%',
				stepSizeValue: 5,
			},
		}
	},
	{
		id: 8,
		title: 'Return Rate',
		type: 'percent',
		dataset: {
			currentYearCycle: [8.15, 6.51, 2.65, 4.65, 9.35, 6.46, 5.87, 4.91],
			previousYearCycle: [1.73, 2.37, 6.53, 3.32, 8.35, 9.16, 2.38, 5.49],
		},
		options: {
			minOption: {
				minLabel: '0',
				minValue: 0,
			},
			maxOption: {
				maxLabel: '10%',
				maxValue: 10,
			},
			stepSizeOption: {
				stepSizeLabel: '5%',
				stepSizeValue: 5,
			},
		}
	},
];

export const SET_LOAD = 'SET_LOAD';
export const SET_INDEX = 'SET_INDEX';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';

export const LABELS = [
	'Oct 2022',
	'Dec 2022',
	'Feb 2023',
	'Apr 2023',
	'Jun 2023',
	'Aug 2023',
	'Oct 2023', 
	'Dec 2023'
];
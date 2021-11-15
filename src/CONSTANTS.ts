/**
 * This is a bunch of UUID stuff to allow the PM5 workouts to be "verifiable".
 */
export const SERVICES = {
	discovery: { id: 'ce060000-43e5-11e4-916c-0800200c9a66' },
	information: { id: 'ce060010-43e5-11e4-916c-0800200c9a66' },
	control: { id: 'ce060020-43e5-11e4-916c-0800200c9a66' },
	rowing: { id: 'ce060030-43e5-11e4-916c-0800200c9a66' },
};

/**
 * Like the `SERVICES`, this is used to communicate with the PM5 and understand its messages, allowing it to do many things.
 */
export const CHARACTERISTICS = {
	informationService: {
		serialNumber: {
			id: 'ce060012-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.information,
		},
		hardwareRevision: {
			id: 'ce060013-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.information,
		},
		firmwareRevision: {
			id: 'ce060014-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.information,
		},
		manufacturerName: {
			id: 'ce060015-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.information,
		},
	},
	controlService: {
		transmit: {
			id: 'ce060021-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.control,
		},
		receive: {
			id: 'ce060022-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.control,
		},
	},
	rowingService: {
		generalStatus: {
			id: 'ce060031-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		additionalStatus: {
			id: 'ce060032-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		additionalStatus2: {
			id: 'ce060033-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		generalStatusRate: {
			id: 'ce060034-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		strokeData: {
			id: 'ce060035-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		additionalStrokeData: {
			id: 'ce060036-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		splitIntervalData: {
			id: 'ce060037-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		additionalSplitIntervalData: {
			id: 'ce060038-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		endOfWorkoutSummaryData: {
			id: 'ce060039-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		additionalEndOfWorkoutSummaryData: {
			id: 'ce06003a-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		heartRateBeltInformation: {
			id: 'ce06003b-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		additionalEndOfWorkoutSummaryData2: {
			id: 'ce06003c-43e5-11e4-916c-0800200c9a66' /* multiplexed only */,
			service: SERVICES.rowing,
		},
		forceCurveData: {
			id: 'ce06003d-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
		multiplexedInformation: {
			id: 'ce060080-43e5-11e4-916c-0800200c9a66',
			service: SERVICES.rowing,
		},
	},
};

const { __ } = wp.i18n;

// Available spacing control options
const typeOptions = [
	{
		label: __( 'None' ),
		value: 'none',
	},
	{
		label: __( 'Attention' ),
		value: 'attention',
	},
	{
		label: __( 'Back Entrances' ),
		value: 'backEntrances',
	},
	{
		label: __( 'Back Exits' ),
		value: 'backExits',
	},
	{
		label: __( 'Bouncing Entrances' ),
		value: 'bouncingEntrances',
	},
	{
		label: __( 'Bouncing Exits' ),
		value: 'bouncingExits',
	},
	{
		label: __( 'Fading Entrances' ),
		value: 'fadingEntrances',
	},
	{
		label: __( 'Fading Exits' ),
		value: 'fadingExits',
	},
	{
		label: __( 'Flippers' ),
		value: 'flippers',
	},
	{
		label: __( 'Lightspeed' ),
		value: 'lightspeed',
	},
	{
		label: __( 'Specials' ),
		value: 'specials',
	},
	{
		label: __( 'Rotating Entrances' ),
		value: 'rotatingEntrances',
	},
	{
		label: __( 'Rotating Exits' ),
		value: 'rotatingExits',
	},
	{
		label: __( 'Zooming Entrances' ),
		value: 'zoomingEntrances',
	},
	{
		label: __( 'Zooming Exits' ),
		value: 'zoomingExits',
	},
	{
		label: __( 'Sliding Entrances' ),
		value: 'slidingEntrances',
	},
	{
		label: __( 'Sliding Exits' ),
		value: 'slidingExits',
	}
];

export default typeOptions;
const { __ } = wp.i18n;

// Available spacing control options
const speedOptions = [
	{
		label: __( 'Default' ),
		value: '',
	},
	{
		label: __( 'Slow' ),
		value: 'slow',
	},
	{
		label: __( 'Slower' ),
		value: 'slower',
	},
	{
		label: __( 'Fast' ),
		value: 'fast',
	},
	{
		label: __( 'Faster' ),
		value: 'faster',
	}
]

export default speedOptions;
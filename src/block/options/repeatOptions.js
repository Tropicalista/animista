const { __ } = wp.i18n;

// Available spacing control options
const repeatOptions = [
	{
		label: __( 'Default' ),
		value: '1',
	},
	{
		label: __( 'Repeat 2' ),
		value: '2',
	},
	{
		label: __( 'Repeat 3' ),
		value: '3',
	},
	{
		label: __( 'Repeat infinite' ),
		value: 'infinite',
	}
]

export default repeatOptions;
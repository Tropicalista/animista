const { __ } = wp.i18n;

// Available spacing control options
const delayOptions = [
	{
		label: __( 'Default' ),
		value: '',
	},
	{
		label: __( 'One second' ),
		value: '1',
	},
	{
		label: __( 'Two seconds' ),
		value: '2',
	},
	{
		label: __( 'Three seconds' ),
		value: '3',
	},
	{
		label: __( 'Four seconds' ),
		value: '4',
	},
	{
		label: __( 'Five seconds' ),
		value: '5',
	}
]

export default delayOptions;
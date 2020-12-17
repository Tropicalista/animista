const { __ } = wp.i18n;

// Available spacing control options
const effectOptions = {
	attention : [
		{
			label: 'Bounce',
			value: 'bounce',
		},
		{
			label: 'Flash',
			value: 'flash',
		},
		{
			label: 'Pulse',
			value: 'pulse',
		},
		{
			label: 'Rubber Band',
			value: 'rubberBand',
		},
		{
			label: 'Shake X',
			value: 'shakeX',
		},
		{
			label: 'Shake Y',
			value: 'shakeY',
		},
		{
			label: 'Head Shake',
			value: 'headShake',
		},
		{
			label: 'Swing',
			value: 'swing',
		},
		{
			label: 'Tada',
			value: 'tada',
		},
		{
			label: 'Wobble',
			value: 'wobble',
		},
		{
			label: 'Jello',
			value: 'jello',
		},
		{
			label: __( 'Heartbeat' ),
			value: 'heartBeat',
		}
	],
	backEntrances : [
		{
			label: __( 'Back In Down' ),
			value: 'backInDown',
		},
		{
			label: __( 'Back In Left' ),
			value: 'backInLeft',
		},
		{
			label: __( 'Back In Right' ),
			value: 'backInRight',
		},
		{
			label: __( 'Back In Up' ),
			value: 'backInUp',
		},
	],
	backExits : [
		{
			label: __( 'Back Out Down' ),
			value: 'backOutDown',
		},
		{
			label: __( 'Back Out Left' ),
			value: 'backOutLeft',
		},
		{
			label: __( 'Back Out Right' ),
			value: 'backOutight',
		},
		{
			label: __( 'Back Out Up' ),
			value: 'backOutUp',
		},
	],
	bouncingEntrances : [
		{
			label: __( 'Bounce In' ),
			value: 'bounceIn',
		},
		{
			label: __( 'Bounce Down' ),
			value: 'bounceInDown',
		},
		{
			label: __( 'Bounce Left' ),
			value: 'bounceInLeft',
		},
		{
			label: __( 'Bounce Right' ),
			value: 'bounceInRight',
		},
		{
			label: __( 'Bounce Up' ),
			value: 'bounceInUp',
		},
	],
	bouncingExits : [
		{
			label: __( 'Bounce Out In' ),
			value: 'bounceOut',
		},
		{
			label: __( 'Bounce Out Down' ),
			value: 'bounceOutDown',
		},
		{
			label: __( 'Bounce Out Left' ),
			value: 'bounceOutLeft',
		},
		{
			label: __( 'Bounce Out Right' ),
			value: 'bounceOutRight',
		},
		{
			label: __( 'Bounce Out Up' ),
			value: 'bounceOutUp',
		},
	],
	fadingEntrances : [
		{
			label: 'Fade In',
			value: 'fadeIn',
		},
		{
			label: 'Fade In Down',
			value: 'fadeInDown',
		},
		{
			label: 'Fade In Down Big',
			value: 'fadeInDownBig',
		},
		{
			label: 'Fade In Left',
			value: 'fadeInLeft',
		},
		{
			label: 'Fade In Left Big',
			value: 'fadeInLeftBig',
		},
		{
			label: 'Fade In Right',
			value: 'fadeInRight',
		},
		{
			label: 'Fade In Right Big',
			value: 'fadeInRightBig',
		},
		{
			label: 'Fade In Up',
			value: 'fadeInUp',
		},
		{
			label: 'Fade In Up Big',
			value: 'fadeInUpBig',
		},
		{
			label: 'Fade In Top Left',
			value: 'fadeInTopLeft',
		},
		{
			label: 'Fade In Top Right',
			value: 'fadeInTopRight',
		},
		{
			label: 'Fade In Bottom Left',
			value: 'fadeInBottomLeft',
		},
		{
			label: 'Fade In Bottom Right',
			value: 'fadeInBottomLeft',
		},
	],
	fadingExits : [
		{
			label: 'Fade Out',
			value: 'fadeOut',
		},
		{
			label: 'Fade Out Down',
			value: 'fadeOutDown',
		},
		{
			label: 'Fade Out Down Big',
			value: 'fadeOutDownBig',
		},
		{
			label: 'Fade Out Left',
			value: 'fadeOutLeft',
		},
		{
			label: 'Fade Out Left Big',
			value: 'fadeOutLeftBig',
		},
		{
			label: 'Fade Out Right',
			value: 'fadeOutRight',
		},
		{
			label: 'Fade Out Right Big',
			value: 'fadeOutRightBig',
		},
		{
			label: 'Fade Out Up',
			value: 'fadeOutUp',
		},
		{
			label: 'Fade Out Up Big',
			value: 'fadeOutUpBig',
		},
		{
			label: 'Fade Out Top Left',
			value: 'fadeOutTopLeft',
		},
		{
			label: 'Fade Out Top Right',
			value: 'fadeOutTopRight',
		},
		{
			label: 'Fade Out Bottom Left',
			value: 'fadeOutBottomLeft',
		},
		{
			label: 'Fade Out Bottom Right',
			value: 'fadeOutBottomLeft',
		},
	],
	flippers: [
		{
			label: 'Flip',
			value: 'flip',
		},
		{
			label: 'Flip In X',
			value: 'flipInX',
		},
		{
			label: 'Flip In Y',
			value: 'flipInY',
		},
		{
			label: 'Flip Out X',
			value: 'flipOutX',
		},
		{
			label: 'Flip Out Y',
			value: 'flipOutY',
		},
	],
	lightspeed: [
		{
			label: 'Light Speed In Right',
			value: 'lightSpeedInRight',
		},
		{
			label: 'Light Speed In Left',
			value: 'lightSpeedInLeft',
		},
		{
			label: 'Light Speed Out Right',
			value: 'lightSpeedOutRight',
		},
		{
			label: 'Light Speed Out Left',
			value: 'lightSpeedOutLeft',
		},
	],
	specials: [
		{
			label: 'Hinge',
			value: 'hinge',
		},
		{
			label: 'Jack In The Box',
			value: 'jackInTheBox',
		},
		{
			label: 'Roll In',
			value: 'rollIn',
		},
		{
			label: 'Roll Out',
			value: 'rollOut',
		},
	],
	rotatingEntrances: [
		{
			label: __( 'Rotate In' ),
			value: 'rotateIn',
		},
		{
			label: __( 'Rotate In Down Left' ),
			value: 'rotateInDownLeft',
		},
		{
			label: __( 'Rotate In Down Right' ),
			value: 'rotateInDownRight',
		},
		{
			label: __( 'Rotate In Up Left' ),
			value: 'rotateInUpLeft',
		},
		{
			label: __( 'Rotate In Up Right' ),
			value: 'rotateInUpRight',
		},
	],
	rotatingExits: [
		{
			label: __( 'Rotate Out' ),
			value: 'rotateOut',
		},
		{
			label: __( 'Rotate Out Down Left' ),
			value: 'rotateOutDownLeft',
		},
		{
			label: __( 'Rotate Out Down Right' ),
			value: 'rotateOutDownRight',
		},
		{
			label: __( 'Rotate Out Up Left' ),
			value: 'rotateOutUpLeft',
		},
		{
			label: __( 'Rotate Out Up Right' ),
			value: 'rotateOutUpRight',
		},
	],
	slidingEntrances: [
		{
			label: __( 'Slide In Down' ),
			value: 'slideInDown',
		},
		{
			label: __( 'Slide In Right' ),
			value: 'slideInRight',
		},
		{
			label: __( 'Slide In Left' ),
			value: 'slideInLeft',
		},
		{
			label: __( 'Slide In Up' ),
			value: 'slideInUp',
		},
	],
	slidingExits: [
		{
			label: __( 'Slide Out Down' ),
			value: 'slideOutDown',
		},
		{
			label: __( 'Slide Out Right' ),
			value: 'slideOutRight',
		},
		{
			label: __( 'Slide Out Left' ),
			value: 'slideOutLeft',
		},
		{
			label: __( 'Slide Out Up' ),
			value: 'slideOutUp',
		},
	],
	zoomingEntrances: [
		{
			label: __( 'Zoom In' ),
			value: 'zoomIn',
		},
		{
			label: __( 'Zoom In Down' ),
			value: 'zoomInDown',
		},
		{
			label: __( 'Zoom In Right' ),
			value: 'zoomInRight',
		},
		{
			label: __( 'Zoom In Left' ),
			value: 'zoomInLeft',
		},
		{
			label: __( 'Zoom In Up' ),
			value: 'zoomInUp',
		},
	],
	zoomingExits: [
		{
			label: __( 'Zoom Out' ),
			value: 'zoomOut',
		},
		{
			label: __( 'Zoom Out Down' ),
			value: 'zoomOutDown',
		},
		{
			label: __( 'Zoom Out Right' ),
			value: 'zoomOutRight',
		},
		{
			label: __( 'Zoom Out Left' ),
			value: 'zoomOutLeft',
		},
		{
			label: __( 'Zoom Out Up' ),
			value: 'zoomOutUp',
		},
	],
};

export default effectOptions;
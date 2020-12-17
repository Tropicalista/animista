import allowedBlocks from './allowedBlocks';
import assign from 'lodash.assign';

import './style.scss';

const { addFilter } = wp.hooks;

/**
 * Add animation control attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addAnimationControlAttribute = ( settings, name ) => {
	// Do nothing if it's another block than our defined ones.
	if ( ! allowedBlocks.includes( name ) ) {
		return settings;
	}

	// Use Lodash's assign to gracefully handle if attributes are undefined
	settings.attributes = assign( settings.attributes, {
		animationType: {
			type: 'string',
			default: '',
		},
		animation: {
			type: 'string',
			default: '',
		},
		speed: {
			type: 'string',
			default: '',
		},
		delay: {
			type: 'string',
			default: '',
		},
		repeat: {
			type: 'string',
			default: '',
		},
		scrollEnabled: {
			type: 'boolean',
			default: false,
		},
		scrollAddClass: {
			type: 'string',
			default: 'animate__animated',
		},
		scrollRmAfterAnimation: {
			type: 'boolean',
			default: false,
		},
		scrollRepeat: {
			type: 'boolean',
			default: false,
		},
		scrollOffset: {
			type: 'number',
			default: '100',
		},
	} );

	return settings;
};

addFilter( 'blocks.registerBlockType', 'animista/attribute', addAnimationControlAttribute );

"use strict";

import assign from 'lodash.assign';
import allowedBlocks from './allowedBlocks';

const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;

const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, TextControl, NumberControl } = wp.components;
const { __ } = wp.i18n;

// Available animation control options
import typeOptions from './options/typeOptions.js'
import effectOptions from './options/effectOptions.js'
import speedOptions from './options/speedOptions.js'
import delayOptions from './options/delayOptions.js'
import repeatOptions from './options/repeatOptions.js'

/**
 * Create HOC to add animation control to inspector controls of block.
 */
const withAnimatingControl = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {
		// Do nothing if it's another block than our defined ones.
		if ( ! allowedBlocks.includes( props.name ) ) {
			return (
				<BlockEdit { ...props } />
			);
		}

		const { 
			animationType, 
			animation,
			speed,
			delay,
			repeat,
			vpEnabled,  
			vpAddClass,
			vpRepeat,
			vpOffset,
			vpRmAfterAnimation
		} = props.attributes;

		// add animation class to block
		if ( animation.length ) {
			props.attributes.className = `animista animate__animated`;
		}else{
			props.attributes.className = '';			
		}
		if ( speed.length ) {
			props.attributes.className += ` animate__${ speed }`;
		}
		if ( delay.length ) {
			props.attributes.className += ` animate__delay-${ delay }s`;
		}
		if ( repeat.length ) {
			if ( 'infinite' == repeat ) {
				props.attributes.className += ` animate__${ repeat }`;
			}else{
				props.attributes.className += ` animate__repeat-${ repeat }`;
			}
		}

		const updateAction = (newAction) => {
			let block = document.getElementById( `block-${ props.clientId }` );
			block.style['animation-name'] = newAction
		}


		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Animations' ) }
						initialOpen={ true }
					>
						<SelectControl
							label={ __( 'Type' ) }
							value={ animationType }
							options={ typeOptions }
							key={typeOptions}
							onChange={ ( selectedAnimationType ) => {
								props.setAttributes( {
									animationType: selectedAnimationType,
									animation: ( selectedAnimationType ? effectOptions[selectedAnimationType][0].value : '' )
								} );
							} }
						/>
			            { animationType && ([
						<SelectControl
							label={ __( 'Effect' ) }
							value={ animation }
				            options={ effectOptions[animationType] }
				            key={ effectOptions[animationType] }
							onChange={ ( selectedAnimation ) => {
								updateAction(selectedAnimation)
								props.setAttributes( {
									animation: selectedAnimation
								} );
							} }
						/>,
						<ToggleControl
							label={ __( 'Animate on scroll' ) }
							key='stocazzo'
							checked={ !! vpEnabled }
							onChange={ () => props.setAttributes( {  vpEnabled: ! vpEnabled } ) }
							help={ !! vpEnabled ? __( 'Showing on mobile devices.' ) : __( 'Hidden on mobile devices.' ) }
						/>
			            ]) }

						<ToggleControl
							label={ __( 'Animate on scroll' ) }
							checked={ !! vpEnabled }
							onChange={ () => props.setAttributes( {  vpEnabled: ! vpEnabled } ) }
							help={ !! vpEnabled ? __( 'Showing on mobile devices.' ) : __( 'Hidden on mobile devices.' ) }
						/>

					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withAnimatingControl' );

addFilter( 'editor.BlockEdit', 'animista/with-animating-control', withAnimatingControl );


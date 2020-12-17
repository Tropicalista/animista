"use strict";

import assign from 'lodash.assign';
import allowedBlocks from './allowedBlocks';

const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;

const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
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
			scrollEnabled,  
			scrollAddClass,
			scrollRepeat,
			scrollOffset,
			scrollRmAfterAnimation
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
							key='animation_type'
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
				            key='animation_effect'
							onChange={ ( selectedAnimation ) => {
								updateAction(selectedAnimation)
								props.setAttributes( {
									animation: selectedAnimation
								} );
							} }
						/>,
						<SelectControl
							label={ __( 'Speed' ) }
							value={ speed }
				            options={ speedOptions }
				            key='speed'
							onChange={ ( selectedSpeed ) => {
								updateAction(selectedSpeed)
								props.setAttributes( {
									speed: selectedSpeed
								} );
							} }
						/>,
						<SelectControl
							label={ __( 'Delay' ) }
							value={ delay }
				            options={ delayOptions }
				            key='delay'
							onChange={ ( selectedDelay ) => {
								updateAction(selectedDelay)
								props.setAttributes( {
									delay: selectedDelay
								} );
							} }
						/>,
						<SelectControl
							label={ __( 'Repeating' ) }
							value={ repeat }
				            options={ repeatOptions }
				            key='repeat'
							onChange={ ( selectedRepeat ) => {
								props.setAttributes( {
									repeat: selectedRepeat
								} );
							} }
						/>,
						<ToggleControl
							key="enable_scroll"
							label={ __( 'Animate on scroll' ) }
							checked={ !! scrollEnabled }
							onChange={ () => props.setAttributes( {  scrollEnabled: ! scrollEnabled } ) }
							help={ !! scrollEnabled ? __( 'Showing on mobile devices.' ) : __( 'Hidden on mobile devices.' ) }
						/>
			            ]) }

			            { scrollEnabled && ([
			                <ToggleControl
			                    label={ __( 'Repeat' ) }
								key="repeat_on_scroll"
								onChange={ () => props.setAttributes( {  scrollRepeat: ! scrollRepeat } ) }
			                    checked={ !! scrollRepeat }
								help={ !! scrollRepeat ? __( 'Repeat on scroll.' ) : __( 'No repeat on scroll.' ) }
			                />,
							<TextControl
								key="offset"
								label={ __( 'Offset' ) }
								onChange={ (newVal) => props.setAttributes( {  scrollOffset: newVal } ) }
								value= { scrollOffset }
								help={ __( 'Number in pixel (es. 100).' ) }
							/>
			            ]) }


					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withAnimatingControl' );

addFilter( 'editor.BlockEdit', 'animista/with-animating-control', withAnimatingControl );


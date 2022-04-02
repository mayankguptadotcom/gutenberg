/**
 * WordPress dependencies
 */
import {
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import useSetting from '../../components/use-setting';

/**
 * Minimum space between letters
 *
 * @type {number}
 */
const MIN_LETTER_SPACE = 0.1;

/**
 * Maximum space between letters
 *
 * @type {number}
 */
const MAX_LETTER_SPACE = 100;

/**
 * Control for letter-spacing.
 *
 * @param {Object}                  props                      Component props.
 * @param {string}                  props.value                Currently selected letter-spacing.
 * @param {Function}                props.onChange             Handles change in letter-spacing selection.
 * @param {string|number|undefined} props.__unstableInputWidth Input width to pass through to inner UnitControl. Should be a valid CSS value.
 *
 * @return {WPElement} Letter-spacing control.
 */
export default function LetterSpacingControl( {
	value,
	onChange,
	__unstableInputWidth = '60px',
} ) {
	const units = useCustomUnits( {
		availableUnits: useSetting( 'spacing.units' ) || [ 'px', 'em', 'rem' ],
		defaultValues: { px: 2, em: 0.2, rem: 0.2 },
	} );
	return (
		<UnitControl
			label={ __( 'Letter spacing' ) }
			value={ value }
			__unstableInputWidth={ __unstableInputWidth }
			units={ units }
			onChange={ onChange }
			min={ MIN_LETTER_SPACE }
			max={ MAX_LETTER_SPACE }
		/>
	);
}

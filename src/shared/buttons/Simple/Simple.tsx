import classNames from 'classnames'
import Image from 'next/image'
import styles from './Simple.module.scss'
import PropTypes from 'prop-types';

type ButtonType = 'button' | 'reset' | 'submit'

type Props = {
    text: string
    width: number
    colorScheme: 'yellow' | 'violet' | 'yellowBlack'
    type?: ButtonType
    onClick: () => void  | null
}
export const SimpleButton = (props
    // { text, width, colorScheme, type = 'button' as ButtonType, onClick }
    ) => {

    const { text, width, colorScheme, type = 'button' as ButtonType, onClick } = props

    return (
        <button
            type={type}
            style={{
                width: width
            }}
            className={classNames(
                styles.Button,
                { [styles.Yellow]: colorScheme === 'yellow' },
                { [styles.YellowBlack]: colorScheme === 'yellowBlack' },
                { [styles.Violet]: colorScheme === 'violet' },
            )}
            onClick={onClick ? onClick : ()=>{}}
        >
            {text}
        </button>

    )
}

SimpleButton.propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    colorScheme: PropTypes.oneOf(['yellow', 'violet', 'yellowBlack']).isRequired,
    type: PropTypes.oneOf(['button' , 'reset' , 'submit']),
    onClick: PropTypes.func.isRequired,
}

SimpleButton.defaultProp = {
    text: '',
    width: 100,
    colorScheme: 'yellow',
    type:  'button',
    onClick: {},
}
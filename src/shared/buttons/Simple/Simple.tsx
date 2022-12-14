import classNames from 'classnames'
import Image from 'next/image'
import styles from './Simple.module.scss'

type ButtonType = 'button' | 'reset' | 'submit'

type Props = {
    text: string
    width: number
    colorScheme: 'yellow' | 'violet' | 'yellowBlack'
    type?: ButtonType
    onClick: () => void  | null
}
export const SimpleButton = ({ text, width, colorScheme, type = 'button' as ButtonType, onClick }) => {

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

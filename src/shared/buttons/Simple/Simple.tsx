import classNames from 'classnames'
import Image from 'next/image'
import styles from './Simple.module.scss'

type Props = {
    text: string
    width: number
    colorScheme: 'yellow'
}
export const SimpleButton = ({ text, width, colorScheme }) => {

    return (
        <button
            style={{
                width: width

            }}
            className={classNames(
                styles.Button,
                { [styles.Yellow]: colorScheme === 'yellow' },
            )}>
            {text}
        </button>

    )
}

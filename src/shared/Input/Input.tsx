import Image from 'next/image'
import styles from './Input.module.scss'

type Props = {
    type: string
    label: string
    placeholder: string
    flexDirection: 'row' | 'column'
    width: number
    height?: number
    nonActivePlaceholderColor?: string
    imageSrc?: string
}
export const InputBlock = ({ type, label, placeholder, flexDirection, width, height, nonActivePlaceholderColor = '#686868', imageSrc }) => {


    return (
        <label style={{
            display: 'flex',
            flexDirection: flexDirection
        }}>

            <span>{label}</span>
            <div className={styles.InputWrapper}>
                {imageSrc && <Image src={imageSrc} alt='icon' className={styles.SvgImage} />}
                {type === 'textarea'
                    ? <textarea
                        placeholder={placeholder}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor

                        }}
                    ></textarea>
                    : <input
                        placeholder={placeholder}
                        type={type}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor,
                            paddingLeft: imageSrc ? '40px': 'auto'

                        }} />
                }

            </div>

        </label>
    )
}

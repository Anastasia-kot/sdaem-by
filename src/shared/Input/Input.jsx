import Image from 'next/image'
import styles from './Input.module.scss'


export const InputBlock  = ({ 
    type, 
    labelRus, 
    placeholder, 
    flexDirection, 
    width, 
    height, 
    nonActivePlaceholderColor = '#686868', 
    imageSrc,

 
 }) => {


    return (
        <label
            className={styles.Label}
            style={
                labelRus
                    ?
                    {
                        display: 'flex',
                        flexDirection: flexDirection
                    }
                    : {
                        display: 'block',
                        height: 'min-content',
                        width: width


                    }

            }>

            {labelRus && <span>{labelRus}</span>}

            <div className={styles.InputWrapper}>

                {imageSrc && <Image src={imageSrc} alt='icon' className={styles.SvgImage} />}
                {type === 'textarea'
                    ? <textarea
                         className={styles.Textarea}
                        placeholder={placeholder}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor

                        }}


                         
                    ></textarea>
                    : <input 
                         className={styles.Input}
                        placeholder={placeholder}
                        type={type}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor,
                            paddingLeft: imageSrc ? '40px' : 'auto'

                        }} />
                }
            </div>

        </label>

      


    )
}

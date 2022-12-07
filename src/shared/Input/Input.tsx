import Image from 'next/image'
import { FC } from 'react'
import { Path, UseFormRegister, ValidationRule } from 'react-hook-form'
// import { AuthFormType, ContactFormKeysType, ContactFormType, RegisterFormType } from '../../../types/formTypes'
import styles from './Input.module.scss'

type Props = {
    type: string  // type of input or textarea   
    labelRus: string | null
    placeholder: string
    flexDirection: 'row' | 'column' | null
    width: number
    height?: number
    nonActivePlaceholderColor?: string
    imageSrc?: string | null

    label: any     // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    pattern?: ValidationRule<RegExp>
    register: any     // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean


}
export const InputBlock: FC<Props> = ({ 
    type, 
    labelRus, 
    placeholder, 
    flexDirection, 
    width, 
    height, 
    nonActivePlaceholderColor = '#686868', 
    imageSrc,

    label,
    register,
    pattern, 
    required
 }) => {


    return (
        <label
            className={styles.Label}
            style={
                label
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
                         {...register(label, { required })}
                        className={styles.Textarea}
                        placeholder={placeholder}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor

                        }}


                         
                    ></textarea>
                    : <input 
                         {...register(label, { required, pattern: pattern })}
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

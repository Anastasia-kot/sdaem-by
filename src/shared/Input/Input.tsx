import Image from 'next/image'
import { FC } from 'react'
import { FieldErrorsImpl, Path, UseFormRegister, ValidationRule } from 'react-hook-form'
import { RegisterFormType } from '../../../types/formTypes'
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
    defaultValue?: string
    required: boolean
    errors?: any       //Partial<FieldErrorsImpl<RegisterFormType>>
    errorPatternMessage?: string
    onChange?: (arg) => void
 


}
export const InputBlock: FC<Props> = (props: Props) => {

    const {
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
        defaultValue,
        pattern,
        required,
        errors,
        errorPatternMessage,
        onChange

    } = props;

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
                         {...register(label, { required:{required} })}
                        className={styles.Textarea}
                        placeholder={placeholder}
                        style={{
                            width: "100%",
                            maxWidth: width,
                            height: height,
                            color: nonActivePlaceholderColor
                        }}


                         
                    ></textarea>
                    : <input 
                        {...register(label, { required: "Обязательное поле", pattern: pattern })}
                        defaultValue={defaultValue}
                        className={styles.Input}
                        placeholder={placeholder}
                        type={type}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor,
                            paddingLeft: imageSrc ? '40px' : 'auto',
                            // border: (errors && errors[label]) ? '1px solid #EB5757' : '1px solid transparent' 
                        }} 
                        onChange={onChange ? (e) => onChange(e.target.value) : ()=>{}}
                        />
                }

                {errors && errors[label] &&
                <>
                    <svg className={styles.ErrorSvg} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM10.5 2C11.6 2 12.4 2.9 12.3 4L11.5 12H9.5L8.7 4C8.6 2.9 9.4 2 10.5 2ZM10.5 18C9.4 18 8.5 17.1 8.5 16C8.5 14.9 9.4 14 10.5 14C11.6 14 12.5 14.9 12.5 16C12.5 17.1 11.6 18 10.5 18Z" fill="#EB5757" />
                    </svg>
                     <div className={styles.ErrorMessage}>
                        {errors[label]?.message}
                    </div> 
                </>}
            </div>
            {/* {errors && errors[label] && errors[label].pattern && <p role="alert">{label} </p>} */}

        </label>

      


    )
}

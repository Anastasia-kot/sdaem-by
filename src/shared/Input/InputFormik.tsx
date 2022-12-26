import { FC, ReactElement } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterFormType } from '../../../types/formTypes'
import styles from './Input.module.scss'

type Props = {
    type:  'text' | 'password' | 'number'|'email'        | 'textarea' 
    value: any
    required: boolean
    name: string
    errors: any
    touched: any

    labelRus: string | null
    placeholder: string
    flexDirection: 'row' | 'column' | null
    width: number
    height?: number
    nonActivePlaceholderColor?: string
    imageSrc?: string | null
    icon: boolean 


    onChange: any
    onBlur: any
    children?: ReactElement
}

export const InputFormik: FC<Props> = (props) => {
    const {
        type,
        value,
        required,
        name,
        errors,
        touched,


        labelRus,
        placeholder,
        flexDirection,
        width,
        height,
        nonActivePlaceholderColor = '#686868',
        imageSrc,
        icon,


        onChange,
        onBlur,
        children
    } = props;
    
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
                        value={value}
                        required={required}
                        name={name}

                        className={styles.Input}
                        placeholder={placeholder}
                        type={type}
                        style={{
                            width: width,
                            height: height,
                            color: nonActivePlaceholderColor,
                            paddingLeft: imageSrc || icon ? '40px' : 'auto',
                            border: (errors && errors[name] && touched && touched[name]) ? '1px solid #EB5757' : '1px solid transparent' 


                        }} 
                        
                        
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                }
                <div className={styles.SvgImage} >{children}</div> {/* {imageSrc && <Image src={imageSrc} alt='icon' className={styles.SvgImage} />} */}

                {!!errors[name] && touched[name] && <>
                    <svg className={styles.ErrorSvg} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM10.5 2C11.6 2 12.4 2.9 12.3 4L11.5 12H9.5L8.7 4C8.6 2.9 9.4 2 10.5 2ZM10.5 18C9.4 18 8.5 17.1 8.5 16C8.5 14.9 9.4 14 10.5 14C11.6 14 12.5 14.9 12.5 16C12.5 17.1 11.6 18 10.5 18Z" fill="#EB5757" />
                    </svg>
                     
                     <div className={styles.ErrorMessage}>
                            <ErrorMessage name={name} component="div" /> 
                     </div> 
                </>}

            </div>

        </label>
    )
}

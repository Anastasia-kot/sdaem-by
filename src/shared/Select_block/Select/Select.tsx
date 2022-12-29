import classNames from 'classnames'
import Image from 'next/image'
import styles from './Select.module.scss'

type Props = {
    options:   {
        text:string
        value: string | number | null
    }[]
    label: any   // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    register: any   // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean
    onChange: (any) => void

    style: CSSStyleDeclaration 
 


}
export const Select = ({
    options,
    label,
    register,
    required,
    onChange,
 
    style,
}: Props) => {
     
    return <select
        {...register(label, required=required)}
        onChange={(e) => onChange({
            filter: label,       
            value: e.target.value     })}
        name={label}
        id={label}
        className={styles.select}
        style={{
            ...style 
           
        }}
    >
            {options.map(o =>
                <option
                    value={o.value}
                    key={options.indexOf(o)}
                >
                    {o.text}
                </option>)}
    </select>



            }
import classNames from 'classnames'
import Image from 'next/image'
import styles from './Select.module.scss'

type Props = {
    options: Array<string>
    label: any   // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    register: any   // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean
    // onChange: () => void

    style: CSSStyleDeclaration 



}
export const Select = ({
    options,
    label,
    register,
    required,
 
    style,
}) => <select
        {...register(label, required={required})}
        name={label}
        id={label}
        className={styles.select}
        style={{
            ...style 
           
        }}
    >
            {options.map(o =>
                <option
                    value={options.indexOf(o)}
                    key={options.indexOf(o)}
                >
                    {o}
                </option>)}
    </select>




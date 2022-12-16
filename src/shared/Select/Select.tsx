import classNames from 'classnames'
import Image from 'next/image'
import { useRef } from 'react'
import styles from './Select.module.scss'

type Props = {
    labelRus: string | null
    options: Array<string>


    flexDirection: 'row' | 'column' | null
    width: number
    height?: number
    backgroundColor: string
    boxShadow: string


    label: any   // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    register: any   // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean
    // onChange: ()=>void
 
}
export const SelectBlock = ({ 
    labelRus, 
    flexDirection, 
    options, 
    width, 
    height,

    backgroundColor = '#F8F8F8',
    boxShadow = 'none',
    
    label,
    register,
    required,
    // onChange,
     

}) => {


   

    return (
        <div
            className={styles.SelectBlock}
             style={{
                gridTemplateColumns: (flexDirection == 'row') ? '1fr qfr' : '1fr',
                gridTemplateRows: (flexDirection == 'column') ? '1fr qfr' : '1fr',
            }} 
        >
            {!!labelRus && 
                <span
                className={styles.LabelSelect}
                style={{
                    gridColumn: (flexDirection == 'row') ? '1/2' : 'auto',
                    gridRow: (flexDirection == 'column') ? '1/2' : 'auto',

                }}
            > {labelRus}</span>}
          
                
                
                <select
                    {...register(label)}
                    name={label} 
                    id={label} 
                    className={styles.Select}
                    style={{
                        gridColumn: (flexDirection == 'row') ? '2/3' : 'auto',
                        gridRow: (flexDirection == 'column') ? '2/3' : 'auto',
                        width: width,
                        height: height,
                    }}
                    // onChange={onChange}
                    >
                        {options.map(o =>
                            <option
                                value={options.indexOf(o)}
                                key={options.indexOf(o)}
                            >
                                {o}
                        </option>)}
                </select>
   

        </div>
    )
}

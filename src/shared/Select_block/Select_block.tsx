import { Select } from './Select/Select'
import styles from './Select_block.module.scss'

type Props = {
    options: Array<string>
    label: any   // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    register: any   // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean
    // onChange: () => void

    labelRus: {label: string, flexDirection: 'row' | 'column'} | null
    style: {
        width: string,
        height: string,
        backgroundColor? :string
        boxShadow?: string
    }  
}

export const SelectBlock = ({ 
    options,
    label,
    register,
    required, 

    style,
    labelRus,
}: Props) => <div
            className={styles.SelectBlock}
            style={{
                 gridTemplateColumns: (labelRus && labelRus.flexDirection == 'row') ? '1fr qfr' : '1fr',
                 gridTemplateRows: (labelRus && labelRus.flexDirection == 'column') ? '1fr qfr' : '1fr',
            }} 
            >
                {labelRus &&  <span
                                    className={styles.LabelSelect}
                                    style={{
                                        gridColumn: (labelRus && labelRus.flexDirection == 'row') ? '1/2' : 'auto',
                                        gridRow: (labelRus && labelRus.flexDirection == 'column') ? '1/2' : 'auto',

                                    }}> 
                                        {labelRus.label}
                                </span>
                }
            
    
            <Select 
                options={options}
                label={label}
                register={register}
                required={required}

                style={{...style,
                    gridColumn: (labelRus && labelRus.flexDirection == 'row') ? '2/3' : 'auto',
                    gridRow: (labelRus && labelRus.flexDirection == 'column') ? '2/3' : 'auto',
                    }}
            /> 
</div>
 
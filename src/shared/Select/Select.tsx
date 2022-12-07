import Image from 'next/image'
import styles from './Select.module.scss'

type Props = {
    labelRus: string | null
    flexDirection: 'row' | 'column' | null
    options: Array<string>
    width: number
    height?: number


    label: any   // label: Path<ContactFormType> | Path<AuthFormType> | Path<RegisterFormType> 
    register: any   // register: UseFormRegister<ContactFormType> | UseFormRegister<AuthFormType> | UseFormRegister<RegisterFormType>
    required: boolean

}
export const SelectBlock = ({ 
    labelRus, 
    flexDirection, 
    options, 
    width, 
    height,
    
    label,
    register,
    required

}) => {


    return (
        <div
            className={styles.SelectBlock}
            style={{
                gridTemplateColumns: (flexDirection == 'row') ? '1fr qfr' : '1fr',
                gridTemplateRows: (flexDirection == 'column') ? '1fr qfr' : '1fr',
                height: height
            }} 
        >

                <span 
                    className={styles.LabelSelect}
                style={{
                    gridColumn: (flexDirection == 'row') ? '1/2' : 'auto',
                    gridRow: (flexDirection == 'column') ? '1/2' : 'auto',
                    
                }}
                > {!!labelRus && labelRus}</span>
                
                
                <select
                    {...register(label)}
                    name={label} 
                    id={label} 
                    className={styles.Select}
                    style={{
                        gridColumn: (flexDirection == 'row') ? '2/3' : 'auto',
                        gridRow: (flexDirection == 'column') ? '2/3' : 'auto',
                        width: width
                    }}>
                        {options.map(o =>
                            <option
                                value={options.indexOf(o)}
                                key={options.indexOf(o)}
                            >
                                {o}
                        </option>)}
                </select>
       

        </div>




        // <label
        //     className={styles.Label}
        //     style={
        //         label
        //             ?
        //             {
        //                 display: 'flex',
        //                 flexDirection: flexDirection
        //             }
        //             : {
        //                 display: 'block',
        //                 height: 'min-content',
        //                 width: width


        //             }

        //     }>

        //     {label && <span>{label}</span>}

        //     <div className={styles.InputWrapper}>

        //         {imageSrc && <Image src={imageSrc} alt='icon' className={styles.SvgImage} />}
        //         {type === 'textarea'
        //             ? <textarea
        //                 className={styles.Textarea}
        //                 placeholder={placeholder}
        //                 style={{
        //                     width: width,
        //                     height: height,
        //                     color: nonActivePlaceholderColor

        //                 }}
        //             ></textarea>
        //             : <input
        //                 className={styles.Input}
        //                 placeholder={placeholder}
        //                 type={type}
        //                 style={{
        //                     width: width,
        //                     height: height,
        //                     color: nonActivePlaceholderColor,
        //                     paddingLeft: imageSrc ? '40px' : 'auto'

        //                 }} />
        //         }
        //     </div>

        // </label>




    )
}

import { UseFormRegister } from 'react-hook-form'
import { MoreOptionsModalFormType } from '../../../types/formTypes'
import { SelectBlock } from '../../shared/Select/Select'
import styles from './MoreOptionsModal.module.scss'
 
type Props = {
    register: UseFormRegister<MoreOptionsModalFormType> 
}

export const MoreOptionsModal = ({register }) => {
    const checkboxData = [
        {
            name: 'gas',
            value: 'Газовая плита'
        },
        {
            name: 'oven',
            value: 'Духовка'
        },
        {
            name: 'coffee_machine',
            value: 'Кофеварка'
        },
        {
            name: 'microwave',
            value: 'Микроволновая печь '
        },
        {
            name: 'dishes',
            value: 'Посуда '
        },
        {
            name: 'dishwasher',
            value: 'Посудомоечная машина '
        }
    ]

    return (
        <div className={styles.MoreOptionsModal}>
            <div className={styles.SelectorsList}>
                <SelectBlock
                    labelRus={'Спальные места'}
                    flexDirection={'column'}
                    options={[
                        'Выберите',
                        '1 комн.',
                        '2 комн.',
                        '3 комн.',
                        '4 комн.',
                        '5 комн.',

                    ]}
                    width={200}
                    height={37}

                    label={'sleepPlaces'}
                    register={register}
                    required={false}
                />
                <SelectBlock
                    labelRus={'Район'}
                    flexDirection={'column'}
                    options={[
                        'Выберите',
                        '1 комн.',
                        '2 комн.',
                        '3 комн.',
                        '4 комн.',
                        '5 комн.',

                    ]}
                    width={200}
                    height={37}

                    label={'district'}
                    register={register}
                    required={false}
                />

                <SelectBlock
                    labelRus={'Метро'}
                    flexDirection={'column'}
                    options={[
                        'Выберите',
                        '1 комн.',
                        '2 комн.',
                        '3 комн.',
                        '4 комн.',
                        '5 комн.',

                    ]}
                    width={200}
                    height={37}

                    label={'metro'}
                    register={register}
                    required={false}

                />

            </div>





            <ul className={styles.CheckboxList}>
                {checkboxData.map(c =>

                    <li key={checkboxData.indexOf(c)} className={styles.CheckboxItem}>
                        <input
                            {...register(c.name)} 
                            type='checkbox'
                            id={c.name}
                            name={c.name}
                            className={styles.CheckboxInput}
                        />
                        <label
                            htmlFor={c.name}
                            className={styles.CheckboxLabel} >
                            {c.value}
                        </label>

                    </li>

                )}
                {checkboxData.map(c =>

                    <li key={checkboxData.indexOf(c) + checkboxData.length} className={styles.CheckboxItem}>

                        <input
                            {...register(c.name+1)} 
                            type='checkbox'
                            id={c.name + 1}
                            name={c.name + 1}
                            className={styles.CheckboxInput}
                        />
                        <label
                            htmlFor={c.name + 1}
                            className={styles.CheckboxLabel} >
                            {c.value}
                        </label>

                    </li>

                )}
                {checkboxData.map(c =>

                    <li key={checkboxData.indexOf(c) + checkboxData.length * 2} className={styles.CheckboxItem}>

                        <input
                            {...register(c.name+2)} 
                            type='checkbox'
                            id={c.name + 2}
                            name={c.name + 2}
                            className={styles.CheckboxInput}
                        />
                        <label
                            htmlFor={c.name + 2}
                            className={styles.CheckboxLabel} >
                            {c.value}
                        </label>

                    </li>

                )}
            </ul>



        </div>
    )
}
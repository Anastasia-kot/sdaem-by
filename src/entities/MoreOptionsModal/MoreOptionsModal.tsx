import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { districtNameEngToRus, metroNameEngToRus } from '../../shared/helpers/nameConverters'
import { districtsList, districtsListRus, MetroList, MetroListRus, MoreOptionsModalFormType } from '../../../types/formTypes'
import { SelectBlock } from '../../shared/ui/Select_block/Select_block'
import styles from './MoreOptionsModal.module.scss'
 
type Props = {
    register: any //UseFormRegister<MoreOptionsModalFormType> 
    style: Object //CSSStyleDeclaration
}

export const MoreOptionsModal:  FC<Props> =  ({register, style}) => {
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


    const MoreOptionsSelect = (props) => {

        return <SelectBlock
          
            register={register}
            required={false}
            style={{
                width: '200px',
                height: '37px',
            }}
            {...props} />
    }


    return (
        <div className={styles.modal} style={style}>
            <div className={styles.SelectorsList}>
                <MoreOptionsSelect
                    options={[
                        { text: 'Выберите', value: -1 },
                        ...[1, 2, 3, 4, 5].map(i => ({ text: i + ' м.', value: i }))
                    ]}
                    label={'sleepPlaces'}
                    labelRus={{ label: 'Спальные места', flexDirection: 'column' }}
                />
                <MoreOptionsSelect
                    options={[
                        { text: 'Выберите', value: -1 },
                        ...districtsList.map(d => ({ text: districtNameEngToRus(d), value: d }))
                    ]}
                    label={'district'}
                    labelRus={{ label: 'Район', flexDirection: 'column' }}
                />

                <MoreOptionsSelect
                    options={[
                        { text: 'Выберите', value: -1 },
                        ...MetroList.map(m => ({ text: metroNameEngToRus(m), value: m }))
                    ]}
                    label={'metro'}
         
                    labelRus={{ label: 'Метро', flexDirection: 'column' }}
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

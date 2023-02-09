import styles from './CatalogueForm.module.scss'
import React, { FC, useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'

import { SelectBlock } from '../../../shared/ui/Select_block/Select_block'
import { InputBlock } from '../../../shared/ui/Input/Input'
import { MoreOptionsModal } from '../../../entities/MoreOptionsModal/MoreOptionsModal'

import { CatalogueFiltersFormType } from '../../../../types/formTypes'
import more_options from './../../../../public/images/svg/more_options.svg'
import arrow from './../../../../public/images/svg/arrow_right_white.svg'
import { inputProps, selectOptions } from '../model';
import { onSubmit } from '../lib/helpers';


export const CatalogueForm: FC = () => {

    const router = useRouter(); 
    const { handleSubmit, register, formState: { errors } } = useForm<CatalogueFiltersFormType>();

    //ui
    const [isMoreOptions, setIsMoreOptions] = useState<boolean>(false)

    return (
        <form onSubmit={handleSubmit((values)=>onSubmit(values, router))} className={styles.form}>

            <div className={styles.form__filters}>
                <div className={styles.RoomsBlockLabel}>
                    <SelectBlock {...selectOptions} register={register} />
                </div>

                <legend className={styles.PriceBlockLabel}>
                    Цена за сутки (BYN)
                    <div className={styles.InputsBlock}>
                        <InputBlock register={register} placeholder={'От'} label={'priceMin'} {...inputProps} />
                        <InputBlock register={register} placeholder={'До'} label={'priceMax'} {...inputProps} />
                    </div>
                </legend>

                <div className={classNames(  styles.MoreOptionsBlock,  { [styles.Active]: isMoreOptions }   )}  >
                    <button onClick={() => setIsMoreOptions(actual => !actual)}>
                        Больше опций
                        <Image src={more_options} alt='more_options' />
                    </button>

                </div>

                <div className={styles.ToClear}>
                    <button type="reset"> Очистить </button>
                </div>

                <div className={styles.ToShow}>
                    <button type='submit'>
                        Показать объекты
                        <Image src={arrow} alt='arrow' />
                    </button>
                </div>

            </div>


            <div className={styles.form__modal}>
                <MoreOptionsModal register={register} style={{display: isMoreOptions ? 'block' : 'none' }} />
            </div>

        </form>

    )
}
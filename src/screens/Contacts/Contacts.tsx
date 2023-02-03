import React, { FC, useState } from 'react'
import styles from './Contacts.module.scss'
import { useForm } from "react-hook-form";
import Image from 'next/image';

import { ContactFormType } from '../../../types/loginFormTypes';

import avatar from '../../../public/images/svg/avatar.svg'
import postal_envelope from '../../../public/images/svg/postal_envelope.svg'
import exclamatory from '../../../public/images/svg/exclamatory.svg'

import { SimpleButton } from '../../shared/buttons/Simple/Simple';
import { InputBlock } from '../../shared/Input/Input'

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UserDataInterface } from '../../store/authSlice';



export const Contacts: FC = () => {

    // автозаполнение формы
    const userData: UserDataInterface = useSelector((state: RootState) => state.auth.data)
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth)


    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<ContactFormType>();
    const onSubmit = values => setIsModal(true) // отправить письмо на бекенд

    //письмо отправлено
    const [isModal, setIsModal] = useState(false);

    type ContactType = {
        type: string | null
        image: string
        text: string | string[]
        additional_image: null | string[]
    }
    const contactsList: ContactType[] = [
        {
            type: null,
            image: 'navigation_icon_white.svg',
            text:'220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 ',
            additional_image: null
        },
        {
            type:'tel',
            image: 'mobile.svg',
            text:' +375 29 621-48-33',
            additional_image: ['viber.svg', 'telegram.svg','whatsapp.svg']
        },
        {
            type:'mailto',
            image: 'postal_envelope_white.svg',
            text: ' sdaem@sdaem.by',
            additional_image: null

        },
        {
            type: null,
            image: 'clock.svg',
            text: ['Режим работы: ', ' 08:00-22:00'],
            additional_image: null

        },
    
    ]
    const socialsList = [
        'instagram.svg',
        'vk.svg', 
        'facebook.svg'
    ]

    return (
        <main className={styles.contacts}>




            <address className={styles.contacts__info}>
                <h1 className={styles.info__title}>Контакты</h1>
                <p className={styles.info__description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                
                <ul className={styles.info__list}>
                    {contactsList.map(({ type, image, text, additional_image }, index) => 
                    <li key={index} className={styles.list__item}>
                        
                        <Image src={`/../../images/svg/${image}`} alt="" width={15} height={15} className={styles.item__icon} />
                        
                        {type 
                            ? <span className={styles.item__text}>
                                <a href={`${type}:${text}`}> {text}</a>
                            </span>     
                            : typeof text === 'string'
                                ? <span className={styles.item__text}> { text }  </span>                                                           
                                :  text.map((item, index) => <span key={index} className={styles.item__text_array}>{item}</span>) 
                        }
                               
                        {additional_image && <ul className={styles.messenger__list}> {additional_image.map(
                            (item, index) => 
                                <div className={styles.messenger__item} key={index}>
                                    <Image src={`/../../images/svg/socials/${item}`} alt={item} width={15} height={15} />
                                </div> )}
                        </ul>}

                    </li>)}
                </ul>
                
                <p className={styles.EntrepreneurInfo}> ИП Шушкевич   Андрей Викторович </p>
                <p className={styles.EntrepreneurInfo}> УНП 192602485 Минским горисполкомом 10.02.2016 </p>
                <div className={styles.info__alert}>
                    <Image src={exclamatory} alt='exclamation point' height={35} width={35} />
                    <p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
                </div>
            </address>

            <form className={styles.contacts__form}
                onSubmit={handleSubmit(onSubmit)}>


                <InputBlock
                    type={'text'}
                    labelRus={'Ваше имя'}
                    placeholder={'Алексей'}
                    flexDirection={'column'}
                    width={260}
                    height={50}
                    imageSrc={avatar}

                    label={'Name'}
                    register={register}
                    defaultValue={isAuth && userData?.login ? userData.login : null}
                    pattern={/^[а-яА-ЯёЁa-zA-Z]+$/i}
                    required
                />


                <InputBlock
                    type={'email'}
                    labelRus={'Ваша электронная почта'}
                    placeholder={'Введите'}
                    flexDirection={'column'}
                    width={260}
                    height={50}
                    imageSrc={postal_envelope}

                    label={'Email'}
                    register={register}
                    required
                />



                <InputBlock
                    type={'textarea'}
                    labelRus={'Ваше сообщение'}
                    placeholder={'Сообщение'}
                    flexDirection={'column'}
                    width={548}
                    height={200}
                    imageSrc={null}


                    label={'Message'}
                    register={register}
                    required
                />

                <div className={styles.SubmitButtonWrapper}>
                    <SimpleButton
                        text={'Отправить'}
                        width={200}
                        colorScheme={'violet'}
                        onClick={null}
                        type='submit'
                    />
                </div>


                {
                    isModal && 
                        <div className={styles.form__modal_background}>
                            <div className={styles.form__modal}>
                                <h2 className={styles.modal__title}> Ваше письмо отправлено! </h2>
                                <p className={styles.modal__subtitle}> 
                                    Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.
                                </p>

                                <SimpleButton
                                    text={'Закрыть окно'}
                                    width={161}
                                    colorScheme={'yellow'}
                                    onClick={() => setIsModal(false)}
                                    type='reset'
                                />

                            </div>
                          </div>
                }                
                
            </form>


            <aside className={styles.contacts__socials}>
                <ul className={styles.socials__list}>
                    {socialsList.map((item, index) => 
                        <li key={index} className={styles.socials__item}>
                            <Image src={`/../../images/svg/socials/${item}`} alt={item} width={20} height={20} />
                        </li>)}
                </ul>
            </aside>


        </main>
    )
}
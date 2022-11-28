// import Image from 'next/image'
import styles from './Objects.module.scss'
import React, { useState } from 'react'
import { CatalogueCard } from '../../../entities/CatalogueCard/CatalogueCard'
import { Pagination } from '../../../shared/Pagination/Pagination'
import { Socials_sharing } from '../../../shared/Socials_sharing/Socials_sharing'


export const Objects = () => {

    const [isListCatalogue, setIsListCatalogue] = useState(false as boolean);

    return (

        <div className={styles.Objects}>



            <ul className={styles.SettingsList}>
                <li className={styles.SettingsItem}>
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.32328 6.74139H11.4807C11.5823 6.74139 11.6647 6.65952 11.6647 6.55807V4.37278C11.6647 4.27148 11.5826 4.18945 11.4807 4.18945H7.32328C7.22199 4.18945 7.13965 4.27133 7.13965 4.37278V6.55822C7.13965 6.65952 7.22183 6.74139 7.32328 6.74139Z" fill="#7A7F86" />
                        <path d="M7.32328 3.07178H9.67264C9.77393 3.07178 9.85627 2.9896 9.85627 2.88815V0.703167C9.85627 0.601561 9.77424 0.519531 9.67264 0.519531H7.32328C7.22199 0.519531 7.13965 0.601406 7.13965 0.703167V2.88815C7.13965 2.9896 7.22183 3.07178 7.32328 3.07178Z" fill="#7A7F86" />
                        <path d="M7.32328 11.1105H13.0685C13.1696 11.1105 13.252 11.0287 13.252 10.9272V8.74223C13.252 8.64093 13.1699 8.55859 13.0685 8.55859H7.32328C7.22199 8.55859 7.13965 8.64078 7.13965 8.74223V10.9272C7.13965 11.0285 7.22183 11.1105 7.32328 11.1105Z" fill="#7A7F86" />
                        <path d="M14.6558 12.9297H7.32328C7.22199 12.9297 7.13965 13.0114 7.13965 13.1135V15.2981C7.13965 15.3994 7.22183 15.4818 7.32328 15.4818H14.656C14.7573 15.4818 14.8394 15.3996 14.8394 15.2981V13.1132C14.8393 13.0114 14.7574 12.9297 14.6558 12.9297Z" fill="#7A7F86" />
                        <path d="M6.08742 10.6908H4.84283V0.81072C4.84283 0.639047 4.70363 0.5 4.53211 0.5H2.02615C1.85464 0.5 1.71543 0.639047 1.71543 0.81072V10.6908H0.471C0.351218 10.6908 0.24231 10.7597 0.190731 10.8676C0.138996 10.9755 0.153755 11.1033 0.228639 11.1965L3.03692 15.3841C3.09596 15.4577 3.18498 15.5 3.27913 15.5C3.37328 15.5 3.46215 15.4577 3.52118 15.3841L6.32947 11.1965C6.40435 11.1032 6.41927 10.9755 6.36753 10.8676C6.31595 10.7598 6.2072 10.6908 6.08742 10.6908Z" fill="#7A7F86" />
                    </svg>

                    <select name="" id="">
                        <option value=""> По умолчанию</option>
                    </select>
                </li>
                <li className={styles.SettingsItem}>
                    <div className={styles.RadioBlock}>
                        <div className={styles.RadioGroup}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect y="0.5" width="14.5036" height="3.22302" rx="1" fill={isListCatalogue ? "#664EF9" : "#BDBDBD"} />
                                <rect y="11.2773" width="14.5036" height="3.22302" rx="1" fill={isListCatalogue ? "#664EF9" : "#BDBDBD"} />
                                <rect y="5.88867" width="14.5036" height="3.22302" rx="1" fill={isListCatalogue ? "#664EF9" : "#BDBDBD"} />



                            </svg>


                            <input type="radio" id="viewChoice1"
                                name="view" value="list"
                                onClick={() => setIsListCatalogue(true)} />

                            <label htmlFor="viewChoice1">Список</label>
                        </div>
                        <div className={styles.RadioGroup}>

                  

                             <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.00390625" width="5.44444" height="5.44444" rx="1" fill={!isListCatalogue ? "#664EF9" : "#BDBDBD"} />
                                <rect x="0.00390625" y="8.55469" width="5.44444" height="5.44444" rx="1" fill={!isListCatalogue ? "#664EF9" : "#BDBDBD"} />
                                <rect x="8.55957" width="5.44444" height="5.44444" rx="1" fill={!isListCatalogue ? "#664EF9" : "#BDBDBD"} />
                                <rect x="8.55957" y="8.55469" width="5.44444" height="5.44444" rx="1" fill={!isListCatalogue ? "#664EF9" : "#BDBDBD"} />
                            </svg>
                       

                            <input type="radio" id="viewChoice2"
                                name="view" value="tile"
                                onClick={() => setIsListCatalogue(false)} />
                            <label htmlFor="viewChoice2">Плитки</label>
                        </div>
                    </div>



                    <button>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2731 2.44186C9.24757 0.87907 7.55454 0 5.64989 0C3.76152 0 2.0685 0.87907 1.01036 2.44186C-0.0477828 3.97209 -0.291969 5.92558 0.359194 7.63488C0.538264 8.0907 0.815008 8.56279 1.17315 8.98605L5.29175 13.8372C5.38943 13.9349 5.4871 14 5.63361 14C5.78012 14 5.8778 13.9349 5.97547 13.8372L10.1104 8.98605C10.4685 8.56279 10.7615 8.10698 10.9243 7.63488C11.5755 5.92558 11.3313 3.97209 10.2731 2.44186ZM5.64989 8.20465C4.24989 8.20465 3.09408 7.04884 3.09408 5.64884C3.09408 4.24884 4.24989 3.09302 5.64989 3.09302C7.04989 3.09302 8.2057 4.24884 8.2057 5.64884C8.2057 7.04884 7.06617 8.20465 5.64989 8.20465Z" fill="#664EF9" />
                        </svg>

                        <span>Показать на карте</span>
                    </button>

                </li>


            </ul>













            <div className={styles.ResultBlock}>
                <h2>Найдено 234 результата</h2>
                <div className={isListCatalogue ? styles.ResultListListView : styles.ResultListTileView}>


                    <CatalogueCard
                        isListView={isListCatalogue}
                        isWithLikeButton={true}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='Минск, б-р Мулявина, д. 10'
                        addressFeatures={[
                            {
                                name: 'metro',
                                value: 'Грушевка'
                            },
                            {
                                name: 'district',
                                value: 'Шабаны'
                            },
                        ]}
                        roomFeatures={[
                            {
                                name: 'size as people',
                                value: '4 (2+2)'
                            },
                            {
                                name: 'roomCount',
                                value: '4 комн.'
                            },
                        ]}
                        description='Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...'
                        image=''
                    />

                    <CatalogueCard
                        isListView={isListCatalogue}
                        isWithLikeButton={true}

                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='Минск, б-р Мулявина, д. 10'
                        addressFeatures={[
                            {
                                name: 'metro',
                                value: 'Грушевка'
                            },
                            {
                                name: 'district',
                                value: 'Шабаны'
                            },
                        ]}
                        roomFeatures={[
                            {
                                name: 'size as people',
                                value: '4 (2+2)'
                            },
                            {
                                name: 'roomCount',
                                value: '4 комн.'
                            },
                        ]}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />

                    <CatalogueCard
                        isListView={isListCatalogue}
                        isWithLikeButton={true}
                        title='4-комн. апартаменты на Грушевке'
                        price={65}
                        address='Минск, б-р Мулявина, д. 10'
                        addressFeatures={[
                            {
                                name: 'metro',
                                value: 'Грушевка'
                            },
                            {
                                name: 'district',
                                value: 'Шабаны'
                            },
                        ]}
                        roomFeatures={[
                            {
                                name: 'size as people',
                                value: '4 (2+2)'
                            },
                            {
                                name: 'roomCount',
                                value: '4 комн.'
                            },
                        ]}
                        description='Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...'
                        image=''
                    />



                </div>

                <div className={styles.ResultBlockFooter}>
                    <Pagination
                        totalCount={6}
                        currentPage={1} />
                    <Socials_sharing color='' />
                </div>

            </div>






        </div>
    )
}

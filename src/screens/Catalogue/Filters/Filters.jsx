// import Image from 'next/image'
import styles from './Filters.module.scss'
import React, { useState } from 'react'
import { Breadcrumbs } from '../../../entities/Breadcrumbs/Breadcrumbs'

export const Filters = () => {

    const checkboxData = [
        {
            name: 'gas',
            value:'Газовая плита'
        },
        {
            name: 'oven',
            value:'Духовка'
        },
        {
            name: 'coffee_machine',
            value:'Кофеварка'
        },
        {
            name: 'microwave',
            value:'Микроволновая печь '
        },
        {
            name: 'dishes',
            value:'Посуда '
        },
        {
            name: 'Dishwasher',
            value:'Посудомоечная машина '
        }
    ]
    const FiltersRecommendationsList = [
        {
            name: 'cheap',
            value: 'Недорогие'
        },
        {
            name: '1room',
            value: '1-комнатные'
        },
 
        {
            name: '2room',
            value: '2-комнатные'
        },
 
        {
            name: '3room',
            value: '3-комнатные'
        },
 
        {
            name: '4room',
            value: '4-комнатные'
        },
 
        {
            name: '5room',
            value: '5-комнатные'
        },
 
        {
            name: 'factory_district',
            value: 'Заводской р.'
        },
 
 
        {
            name: 'lenin_district',
            value: 'Ленинский р.'
        },
 
 
        {
            name: 'moscow_district',
            value: 'Московский р.'
        },
 
 
        {
            name: 'october_district',
            value: 'Октябрьский р.'
        },
        {
            name: 'partizan_district',
            value: 'Партизанский р.'
        },
        {
            name: '1may_district',
            value: 'Первомайский р.'
        },
  
        {
            name: 'soviet_district',
            value: 'Советский р.'
        },
  
        {
            name: 'frunze_district',
            value: 'Фрунзенский р.'
        },
  
        {
            name: 'center_district',
            value: 'Центральный р.'
        },        
    ] 

    const [isMoreOptions, setIsMoreOptions] = useState(false)

    const onSelectChange = () => {
        // при фокусе скрываем option placeholder
        // если не было onChange, то при блюре возвращаем option placeholder
        // если был onChange, то option placeholder остается скрытым
    }

    return (
        <div className={styles.FiltersBlock}>
            <div className={styles.FiltersRecommendationsBlock}>
                <Breadcrumbs breadcrumbs={['Квартиры в Минске']} />
                <h1>Аренда квартир на сутки в Минске</h1>
                <div className={styles.FiltersRecommendations}>
                    <h2 className={styles.FiltersRecommendationsTitle}>Рекомендуем посмотреть</h2>
                    <ul className={styles.FiltersRecommendationsList}>
                        {FiltersRecommendationsList.map(i => 
                            <li key={FiltersRecommendationsList.indexOf(i)} id={i.name}>{i.value}</li>)} 
                    </ul>

                </div>
            </div>

            <div className={styles.FiltersCategoriesBlock}>
                <form onSubmit={(e)=>{e.preventDefault()}}> 
                    {isMoreOptions &&
                        <div className={styles.MoreOptionsModal}>
                            <label className={styles.SleepPlaceBlockLabel}>
                                <span>
                                    Спальные места
                                </span>
                                {/* //Прячем селект, формируем через дивы, спаны выпадающий список и при кликах на элементы этого списка в спрятаном селекте ставим выбранное значение. */}
                                <select name="" id="" placeholder='Выберите' onChange={() => { }} className={styles.RoomsSelect}>
                                    <option value="" disabled selected>Выберите</option>
                                    <option value="1">1 комн.</option>
                                    <option value="2">2 комн.</option>
                                    <option value="3">3 комн.</option>
                                    <option value="4">4 комн.</option>
                                    <option value="5">5 комн.</option>


                                </select>

                            </label>
                            <label className={styles.DistrictBlockLabel}>
                                <span>
                                    Район
                                </span>
                                {/* //Прячем селект, формируем через дивы, спаны выпадающий список и при кликах на элементы этого списка в спрятаном селекте ставим выбранное значение. */}
                                <select name="" id="" placeholder='Выберите' onChange={() => { }} className={styles.RoomsSelect}>
                                    <option value="" disabled selected>Выберите</option>
                                    <option value="1">1 комн.</option>
                                    <option value="2">2 комн.</option>
                                    <option value="3">3 комн.</option>
                                    <option value="4">4 комн.</option>
                                    <option value="5">5 комн.</option>


                                </select>

                            </label>
                            <label className={styles.MetroBlockLabel}>
                                <span>
                                    Метро
                                </span>
                                {/* //Прячем селект, формируем через дивы, спаны выпадающий список и при кликах на элементы этого списка в спрятаном селекте ставим выбранное значение. */}
                                <select name="" id="" placeholder='Выберите' onChange={() => { }} className={styles.RoomsSelect}>
                                    <option value="" disabled selected>Выберите</option>
                                    <option value="1">1 комн.</option>
                                    <option value="2">2 комн.</option>
                                    <option value="3">3 комн.</option>
                                    <option value="4">4 комн.</option>
                                    <option value="5">5 комн.</option>


                                </select>

                            </label>
                            <ul className={styles.checkboxWrapper}>
                                {checkboxData.map(c => <li key={checkboxData.indexOf(c)}>
                                    <input id={c.name} type="checkbox" />
                                    <label for={c.name}>{c.value}</label>
                                </li>)}

                                {checkboxData.map(c => <li key={checkboxData.indexOf(c) + checkboxData.length}>
                                    <input id={c.name + 1} type="checkbox" />
                                    <label for={c.name + 1}>{c.value}</label>
                                </li>)}

                                {checkboxData.map(c => <li key={checkboxData.indexOf(c) + checkboxData.length * 2}>
                                    <input id={c.name + 2} type="checkbox" />
                                    <label for={c.name + 2}>{c.value}</label>
                                </li>)}



                            </ul>



                        </div>}



                    <label className={styles.RoomsBlockLabel}>
                        <span>
                            Комнаты
                        </span>
                        {/* //Прячем селект, формируем через дивы, спаны выпадающий список и при кликах на элементы этого списка в спрятаном селекте ставим выбранное значение. */}
                        <select name="" id="" placeholder='Выберите' onChange={()=>{}} className={styles.RoomsSelect}>
                            <option value="" disabled selected>Выберите</option>
                            <option value="1">1 комн.</option>
                            <option value="2">2 комн.</option>
                            <option value="3">3 комн.</option>
                            <option value="4">4 комн.</option>
                            <option value="5">5 комн.</option>


                        </select>

                    </label>
            
                        <label className={styles.PriceBlockLabel}>
                            <span>
                                Цена за сутки (BYN)
                            </span>
                            <div className={styles.InputsBlock}>
                                <input placeholder='От'></input>
                                <input placeholder='До'></input>
                            </div>
                        </label>

                    <div className={styles.MoreOptionsBlock}>

                        <button onClick={()=>setIsMoreOptions(actual =>{return (!actual)}) }>
                            <span>
                                Больше опций
                            </span>

                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9" />
                                <path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9" />
                                <path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9" />
                            </svg>

                        </button>
                       
                    </div>

                    <div className={styles.ToClear}>
                        <button>
                            <span> 
                                Очистить
                            </span>
                        </button>
                    </div>

                    <div className={styles.ToShow}>
                        <button>
                            <span>
                                Показать объекты
                            </span>
                            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.125 11.25L5.875 6.5L1.125 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </button>
                    </div>

                </form>

            </div>
          

            {/* <div className={styles.MainHeader}>
                <h1 className={styles.MainHeaderText}>
                    Sdaem.by - у нас живут <span className={styles.yellow}>ваши объявления</span>
                </h1>
                <form className={styles.MainForm}>
                    <ul>
                        <li className={styles.active}>Квартиры на сутки</li>
                        <li>Коттеджи и усадьбы</li>
                        <li>Бани и сауны</li>
                        <li>Авто напрокат</li>
                    </ul>
                    <div className={styles.MainFormSettings}>
                        <div className={styles.CityBlock}>
                            <label className={styles.CityBlockLabel}>
                                <span className={styles.CityBlockLabelSpan}>
                                    Город
                                </span>
                                <select className={styles.CityBlockLabelSelect}>
                                    <option>Минск</option>
                                    <option>Город 2</option>
                                    <option>Город 3</option>
                                    <option>Город 4</option>
                                    <option>Город 5</option>
                                </select>
                            </label>
                        </div>

                        <div className={styles.RoomsBlock}>

                            <label className={styles.RoomsBlockLabel}>
                                <span>Комнаты</span>
                                <select>
                                    <option>1</option>
                                    <option> 2</option>
                                    <option> 3</option>
                                    <option> 4</option>
                                    <option> 5</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.PriceBlock}>

                            <label className={styles.PriceBlockLabel}>
                                <span>
                                    Цена за сутки (BYN)
                                </span>
                                <div className={styles.InputsBlock}>
                                    <input placeholder='От'></input>
                                    <input placeholder='До'></input>
                                </div>
                            </label>
                        </div>
                        <div className={styles.MoreOptionsBlock}>

                            <button>
                                <span>
                                    Больше опций
                                </span>

                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.91109 4.29814C5.91109 2.90551 4.937 1.73697 3.63453 1.4358V0.661897C3.63453 0.296309 3.33822 0 2.97264 0C2.60705 0 2.31074 0.296309 2.31074 0.661897V1.4358C1.00835 1.73689 0.0341797 2.90551 0.0341797 4.29814C0.0341797 5.69077 1.00827 6.85931 2.31074 7.16048V17.3381C2.31074 17.7037 2.60705 18 2.97264 18C3.33822 18 3.63453 17.7037 3.63453 17.3381V7.16048C4.937 6.85931 5.91109 5.69077 5.91109 4.29814ZM1.35805 4.29814C1.35805 3.40781 2.08238 2.68348 2.97271 2.68348C3.86303 2.68348 4.58737 3.40781 4.58737 4.29814C4.58737 5.18846 3.86303 5.9128 2.97271 5.9128C2.08238 5.9128 1.35805 5.18846 1.35805 4.29814Z" fill="#664EF9" />
                                    <path d="M8.66188 8.89222V0.661897C8.66188 0.296309 8.36557 0 7.99998 0C7.63439 0 7.33808 0.296309 7.33808 0.661897V8.89222C6.03569 9.19331 5.06152 10.3619 5.06152 11.7546C5.06152 13.1472 6.03562 14.3157 7.33808 14.6169V17.3381C7.33808 17.7037 7.63439 18 7.99998 18C8.36557 18 8.66188 17.7037 8.66188 17.3381V14.6169C9.96427 14.3158 10.9384 13.1472 10.9384 11.7546C10.9384 10.3619 9.96434 9.19338 8.66188 8.89222ZM6.38539 11.7546C6.38539 10.8642 7.10973 10.1399 8.00005 10.1399C8.89038 10.1399 9.61471 10.8642 9.61471 11.7546C9.61471 12.6449 8.89038 13.3692 8.00005 13.3692C7.10973 13.3692 6.38539 12.6449 6.38539 11.7546Z" fill="#664EF9" />
                                    <path d="M15.9658 7.20151C15.9658 5.80888 14.9917 4.64034 13.6892 4.33918V0.661897C13.6892 0.296309 13.3929 0 13.0273 0C12.6617 0 12.3654 0.296309 12.3654 0.661897V4.33918C11.063 4.64027 10.0889 5.80888 10.0889 7.20151C10.0889 8.59415 11.063 9.76269 12.3654 10.0639V17.3381C12.3654 17.7037 12.6617 18 13.0273 18C13.3929 18 13.6892 17.7037 13.6892 17.3381V10.0639C14.9917 9.76269 15.9658 8.59415 15.9658 7.20151ZM11.4127 7.20151C11.4127 6.31119 12.1371 5.58685 13.0274 5.58685C13.9177 5.58685 14.6421 6.31119 14.6421 7.20151C14.6421 8.09184 13.9177 8.81618 13.0274 8.81618C12.1371 8.81618 11.4127 8.09184 11.4127 7.20151Z" fill="#664EF9" />
                                </svg>

                            </button>
                        </div>

                        <div className={styles.ToMapBlock}>

                            <button>
                                <span>
                                    На карте
                                </span>

                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0069 3.11628C9.90811 1.44186 8.09415 0.5 6.05346 0.5C4.0302 0.5 2.21625 1.44186 1.08253 3.11628C-0.0511958 4.75581 -0.312824 6.84884 0.384851 8.68023C0.576711 9.1686 0.873223 9.67442 1.25694 10.1279L5.66973 15.3256C5.77439 15.4302 5.87904 15.5 6.03601 15.5C6.19299 15.5 6.29764 15.4302 6.40229 15.3256L10.8325 10.1279C11.2162 9.67442 11.5302 9.18605 11.7046 8.68023C12.4023 6.84884 12.1407 4.75581 11.0069 3.11628ZM6.05346 9.2907C4.55346 9.2907 3.31508 8.05233 3.31508 6.55233C3.31508 5.05233 4.55346 3.81395 6.05346 3.81395C7.55346 3.81395 8.79183 5.05233 8.79183 6.55233C8.79183 8.05233 7.5709 9.2907 6.05346 9.2907Z" fill="#664EF9" />
                                </svg>


                            </button>
                        </div>
                        <div className={styles.ToShowBlock}>
                            <button>
                                <span>
                                    Показать

                                </span>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.21484 10.75L5.96484 6L1.21484 1.25" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </form>
            </div> */}
        </div>


    )
}

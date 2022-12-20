import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CatalogueState {
    data: Array<CatalogueType> | null,
    totalCount: number | null,
    currentItemId: number | null,
}

export interface CatalogueType {
    id: number
    image: string | string[] | null
    gold: boolean
    title: string
    description: string
    price: number
    address: string
    addressFeatures: AddressFeaturesType
    roomFeatures: RoomFeaturesType
    roomOwner: RoomOwnerType
}
export type AddressFeaturesType = [
    {
        name: 'metro'
        value: string
    },
    {
        name: 'district'
        value: string
    },
]

export type RoomFeaturesType = [
    {
        name: 'size as people'
        value: string
    },
    {
        name: 'roomCount'
        value: number
    },
    {
        name: 'size as meters'
        value: number
    },
]

export type RoomOwnerType = {
    ownerStatus: string
    name: string
    phone: string
    email: string

}

const initialState: CatalogueState = {
    data: [
        {
            id: 0,
            image: [
                'https://s0.rbk.ru/v6_top_pics/media/img/5/60/756281458904605.jpg',
                'https://www.pufikhomes.com/wp-content/uploads/2019/06/sovremennaya-belaya-kvartira-dlya-devushki-v-starom-dome-moskvy-pufikhomes-1.jpg',
                'https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg',
                'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
                'https://n1s2.hsmedia.ru/58/65/e0/5865e06b01fea60c2ba969163769bee4/727x485_1_48b32eb3020992efb0ebe073e4f5aa3d@5000x3334_0xac120003_69286231626783910.jpg',

            ],
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    },
                    {
                        name: 'size as meters',
                        value: 179
                    },
                ],
            gold: false,
            roomOwner: {
                ownerStatus: 'Владелец',
                name: 'Dmitriy',
                phone: '+375(29) 291 - 14 - 44',
                email: 'vladimir6234@tut.by'
            }



        },
        {
            id: 1,
            image: [
                'https://s0.rbk.ru/v6_top_pics/media/img/5/60/756281458904605.jpg',
                'https://www.pufikhomes.com/wp-content/uploads/2019/06/sovremennaya-belaya-kvartira-dlya-devushki-v-starom-dome-moskvy-pufikhomes-1.jpg',
                'https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg',
                'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
                'https://n1s2.hsmedia.ru/58/65/e0/5865e06b01fea60c2ba969163769bee4/727x485_1_48b32eb3020992efb0ebe073e4f5aa3d@5000x3334_0xac120003_69286231626783910.jpg',


            ],
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], 
                gold: true, 
                roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }
        },

        {
            id: 2,
            image: 'https://novostroyki.shop/wp-content/uploads/2021/01/2250619.jpg',
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], 
            gold: false,
            roomOwner: {
                ownerStatus: 'Владелец',
                name: 'Dmitriy',
                phone: '+375(29) 291 - 14 - 44',
                email: 'vladimir6234@tut.by'
            }
        },
        {
            id: 3,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ],
                 gold: true,
            roomOwner: {
                ownerStatus: 'Владелец',
                name: 'Dmitriy',
                phone: '+375(29) 291 - 14 - 44',
                email: 'vladimir6234@tut.by'
            }

        },
        {
            id: 4,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    },
                    {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 5,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 6,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }
        },
        {
            id: 7,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }
        },
        {
            id: 8,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 9,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 10,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 11,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 12,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
        {
            id: 13,
            image: null,
            title: '4-комн. апартаменты на Грушевке',
            description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена,  ...',
            price: 65,
            address: 'Минск, б-р Мулявина, д. 10',
            addressFeatures:
                [
                    {
                        name: 'metro',
                        value: 'Грушевка'
                    },
                    {
                        name: 'district',
                        value: 'Шабаны'
                    },
                ],
            roomFeatures:
                [
                    {
                        name: 'size as people',
                        value: '4 (2+2)'
                    },
                    {
                        name: 'roomCount',
                        value: 4
                    }, {
                        name: 'size as meters',
                        value: 179
                    },
                ], gold: true, roomOwner: {
                    ownerStatus: 'Владелец',
                    name: 'Dmitriy',
                    phone: '+375(29) 291 - 14 - 44',
                    email: 'vladimir6234@tut.by'
                }

        },
    ],
    totalCount: 13,
    currentItemId: null

}

export const CatalogueSlice = createSlice({
    name: 'Catalogue',
    initialState,
    reducers: {
        setCatalogue: (state, action: PayloadAction<Array<CatalogueType>>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = action.payload
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.totalCount = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setCatalogue, setTotalCount } = CatalogueSlice.actions

export default CatalogueSlice.reducer
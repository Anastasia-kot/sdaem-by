import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CatalogueState {
    data: Array<CatalogueType> | null,
    totalCount: number | null,
    currentItemId: number | null,
}

export interface CatalogueType {
    id: number
    image: string | null
    title: string
    description: string
    price: number
    address: string
    addressFeatures: [
        {
            name: 'metro',
            value: string
        },
        {
            name: 'district',
            value: string
        }
    ]
    roomFeatures: [
        {
            name: 'size as people',
            value: string
        },
        {
            name: 'roomCount',
            value: string
        },
    ]
}


const initialState: CatalogueState = {
    data: [
        {
            id: 0,
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
                        value: '4 комн.'
                    },
                ]

        },
        {
            id: 1,
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
                        value: '4 комн.'
                    },
                ]
        },
        {
            id: 2,
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
                        value: '4 комн.'
                    },
                ]
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
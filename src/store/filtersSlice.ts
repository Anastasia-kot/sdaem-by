import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CategoryType, districtsList, DistrictType, MainFiltersFormType, MainFiltersKeysType } from '../../types/formTypes'
import { districtNameEngToRus } from '../../helpers/nameConverters';

export const FiltersRecommendationsList:
    Array<{
        value: string
        filter: FiltersPayloadType
    }> = [

        {   value: 'Недорогие',
            filter: {
                priceMax: 100,
            }
        },
        ...[1,2,3,4,5].map(n => ({
            value: n + '-комнатные',
            filter: {
                rooms: n,
            }
        })),
        ...districtsList.map(d => ({
            value: districtNameEngToRus(d),
            filter: {
                district: d,
            }
        }))
    ]



export interface FilterState extends MainFiltersFormType {
    category: CategoryType | null,
    priceMin: number | null,
    priceMax: number | null,

    city: string | null,
    district: DistrictType | null,
    metro: string | null,

    rooms: number | null,
    sleepPlaces: number | null,

    gas: boolean | null,
    oven: boolean | null,
    coffeeMachine: boolean | null,
    microwave: boolean | null,
    dishes: boolean | null,
    dishwasher: boolean | null,
}


const initialState: FilterState = {
    category: null,

    city: null,
    district: null,
    metro: null,

    rooms: null,
    priceMin: null,
    priceMax: null,

    sleepPlaces: null,

    gas: null,
    oven: null,
    coffeeMachine: null,
    microwave: null,
    dishes: null,
    dishwasher: null,
}


export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        resetFilters: (state) => {
            state.category = null;

            state.city = null;
            state.district = null;
            state.metro = null;

            state.rooms = null;
            state.priceMin = null;
            state.priceMax = null;

            state.sleepPlaces = null;

            state.gas = null;
            state.oven = null;
            state.coffeeMachine = null;
            state.microwave = null;
            state.dishes = null;
            state.dishwasher = null;

            // state = { ...initialState }


        },

        setFilters: (state, action: PayloadAction<any>) => {              // FiltersPayloadType


            state.category = action.payload.category;

            state.city = action.payload.city;
            state.district = action.payload.district;
            state.metro = action.payload.metro;

            state.rooms = action.payload.rooms;
            state.priceMin = action.payload.priceMin;
            state.priceMax = action.payload.priceMax;

            state.sleepPlaces = action.payload.sleepPlaces;

            state.gas = action.payload.gas;
            state.oven = action.payload.oven;
            state.coffeeMachine = action.payload.coffeeMachine;
            state.microwave = action.payload.microwave;
            state.dishes = action.payload.dishes;
            state.dishwasher = action.payload.dishwasher;


            // for (let key in action.payload) {
            //     state[key] = action.payload[key]
            // }


            // state = { ...state, ...action.payload}
            // state = {...action.payload}
            // state =  action.payload
            // state = {...state, ...action.payload}

        },
    },
})

// Action creators are generated for each case reducer function
export const { resetFilters, setFilters } = filterSlice.actions

export default filterSlice.reducer




















export interface FiltersPayloadType {
    category?: CategoryType | null,
    
    city?: string | null,
    district?: string | null,
    metro?: string | null,

    rooms?: number | null,
    priceMin?: number | null,
    priceMax?: number | null,

    sleepPlaces?: number | null,

    gas?: boolean | null,
    oven?: boolean | null,
    coffeeMachine?: boolean | null,
    microwave?: boolean | null,
    dishes?: boolean | null,
    dishwasher?: boolean | null,

}

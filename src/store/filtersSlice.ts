import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CategoryType, MainFiltersFormType, MainFiltersKeysType } from '../../types/formTypes'

export const citiesList = [
    'Минск',
    'Гомель',
    'Брест',
    'Витебск',
    'Гродно',
    'Могилев'
]

export interface FiltersPayloadType  {
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


export interface FilterState extends MainFiltersFormType {
    category: CategoryType | null,
    city: string | null,
    district: string | null,
    metro: string | null,

    rooms: number | null,
    priceMin: number | null,
    priceMax: number | null,

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




    gas1: null,
    oven1: null,
    coffee_machine1: null,
    microwave1: null,
    dishes1: null,
    dishwasher1: null,
    gas2: null,
    oven2: null,
    coffee_machine2: null,
    microwave2: null,
    dishes2: null,
    dishwasher2: null,


}


export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        resetFilters: (state) => {
            state = { ...initialState }
        },
 
        setFilters: (state, action: PayloadAction<FiltersPayloadType>) => {

            state.category = action.payload.category;

            state.city = action.payload.city;
            state.district =  action.payload.district;
            state.metro =  action.payload.metro;

            state.rooms =  action.payload.rooms;
            state.priceMin =  action.payload.priceMin;
            state.priceMax =  action.payload.priceMax;

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
export const { resetFilters,  setFilters } = filterSlice.actions

export default filterSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AddressFeaturesType, ComfortFeaturesType, RoomFeaturesType, CategoryType } from '../../types/formTypes'

export interface CatalogueState {
    data: CatalogueType[] | null,
    totalCount: number | null,
}

export interface CatalogueType {
    id: number
    category: CategoryType
    gold: boolean
    image: string | string[] | null

    title: string
    description: string
    price: number

    addressFeatures: AddressFeaturesType
    roomFeatures: RoomFeaturesType
    comfortFeatures: ComfortFeaturesType

    roomOwner: RoomOwnerType
}



export type RoomOwnerType = {
    ownerStatus: string
    name: string
    phone: string
    email: string
}

const initialState: CatalogueState = {
    data: null,
    totalCount: null,
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
export enum CitiesEnum  {
  Minsk =  'Минск',
  Gomel =  'Гомель',
  Brest =  'Брест',
  Vitebsk =  'Витебск',
  Grodno =  'Гродно',
  Mogilev =  'Могилев'
}
export const citiesList = [
    'Minsk' as CityType, 
    'Gomel' as CityType,
    'Brest' as CityType,
    'Vitebsk' as CityType,
    'Grodno' as CityType,
    'Mogilev' as CityType
]
export type CityType = 'Minsk' | 'Gomel' |   'Brest'|   'Vitebsk'|   'Grodno'|  'Mogilev'


export const citiesListRus = [
    'Минск',
    'Гомель',
    'Брест',
    'Витебск',
    'Гродно',
    'Могилев'
]
export type CityRusType =     'Минск'|'Гомель'|    'Брест'|    'Витебск'|    'Гродно'|    'Могилев'


export interface DistrictMetroType {
    district: string
    metro: string
}


export interface ComfortFeaturesType {
    gas: boolean  | null
    oven: boolean | null
    coffeeMachine: boolean| null
    microwave: boolean| null
    dishes: boolean | null
    dishwasher: boolean | null
}


export interface MoreOptionsModalFormType 
    extends ComfortFeaturesType, DistrictMetroType {
    sleepPlaces: number
}

export interface CatalogueFiltersFormType 
        extends MoreOptionsModalFormType {
    rooms: number
    priceMin: number
    priceMax: number

}

export type CategoryType = 'room' | 'cottage' | 'sauna' | 'auto'  

export interface MainFiltersFormType 
    extends CatalogueFiltersFormType  {
    category: CategoryType
    city: string
}

export type MainFiltersKeysType = keyof MainFiltersFormType;
 






export type AddressFeaturesType = {
    city: string,
    metro: string,
    district: string,
    address: string
}

export type RoomFeaturesType = {
    sizeAsPeople: string | number | null
    rooms: number | null
    sizeAsMeters: number | null
}

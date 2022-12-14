import { keys } from 'ts-transformer-keys';
export interface ContactFormType {
    name: string
    email: string
    message: string
}
// export type ContactFormKeysType = keyof ContactFormType;

interface LoginPasswordType {
    login: string
    password: string
}

export interface AuthFormType 
        extends LoginPasswordType {
    rememberMe: boolean
}


export interface RegisterFormType 
        extends LoginPasswordType {
    email: string
    password2: string
    captcha: boolean
}


export enum CitiesEnum  {
  Minsk =  'Минск',
  Gomel=  'Гомель',
  Brest =  'Брест',
  Vitebsk =  'Витебск',
  Grodno =  'Гродно',
  Mogilev =  'Могилев'
}

export interface DistrictMetroType {
    district: string
    metro: string
}

export interface CheckboxType {
    gas: boolean
    oven: boolean
    coffeeMachine: boolean
    microwave: boolean
    dishes: boolean
    dishwasher: boolean


    gas1: boolean | null,
    oven1: boolean | null,
    coffee_machine1: boolean | null,
    microwave1: boolean | null,
    dishes1: boolean | null,
    dishwasher1: boolean | null,
    gas2: boolean | null,
    oven2: boolean | null,
    coffee_machine2: boolean | null,
    microwave2: boolean | null,
    dishes2: boolean | null,
    dishwasher2: boolean | null,

}


export interface MoreOptionsModalFormType 
        extends CheckboxType, DistrictMetroType {
    sleepPlaces: number
}

export interface CatalogueFiltersFormType 
        extends MoreOptionsModalFormType {
    rooms: number
    priceMin: number
    priceMax: number

}

export type CategoryType = 'room' | 'cottage' | 'sauna' | 'car'

export interface MainFiltersFormType 
    extends CatalogueFiltersFormType  {
    category: CategoryType
    city: string
}

export type MainFiltersKeysType = keyof MainFiltersFormType;
// export const keysOfProps = keys<MainFiltersFormType>();
// export type MainFiltersKeysType = keysOfProps;

 


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
    captcha: boolean
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


export interface MainFiltersFormType 
    extends CatalogueFiltersFormType  {
    category: 'room' | 'cottage' | 'sauna' | 'car'
    city: string
}
 




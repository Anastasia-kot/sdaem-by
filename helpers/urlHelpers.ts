import { FiltersPayloadType } from "../src/store/filtersSlice";

export const filtersToUrlString = (filters: FiltersPayloadType): string => {
     
    
    let searchString = '' // дефолтное на случай пустого filters

    if (Object.keys(filters).length > 0) {
        searchString = '?'

        for (const [key, value] of Object.entries(filters)) {
            searchString = searchString + `${key}=${value}&`
        }

        searchString = searchString.slice(0, -1)
    }

    return searchString
}
 
export const cityNameConverters = (city: string): string => {
    let newCity: string = city; // для дефолтного возврата если входящий формат не нужно изменять     
    const lastSymbol = newCity[newCity.length - 1];
    
        switch (lastSymbol) {
            case 'о': break;                 // в Гродно
            case 'в':                        // в Могилеве
            case 'к':                        // в Минске, в Витебске 
            case 'т':                        // в Бресте
                 newCity = newCity+'е'; break; 
            case 'ь':                        // в Гомеле
                newCity = newCity.substring(0, newCity.length-1 ) + 'е'; break; 
            default: break;
        }; 
    
    return newCity;
}
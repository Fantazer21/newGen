export type InitialStateType = {
    dataCourses: courseType[]
    setFilter: setFiltersType
    dataFiltered: courseType[]
}
export type courseType = {
    name: string,
    prices: Array<number | null>
}
export type setFiltersType = {
    minPrice: number,
    maxPrice: number,
}

const initialState: InitialStateType = {
    dataCourses: [
        {name: "Courses in England", prices: [0, 100]},
        {name: "Courses in Germany", prices: [500, null]},
        {name: "Courses in Italy", prices: [100, 200]},
        {name: "Courses in Russia", prices: [null, 400]},
        {name: "Courses in China", prices: [50, 250]},
        {name: "Courses in USA", prices: [200, null]},
        {name: "Courses in Kazakhstan", prices: [56, 324]},
        {name: "Courses in France", prices: [null, null]},
    ],
    setFilter: {
        minPrice: 0,
        maxPrice: 600,
    },
    dataFiltered: []
}

enum Data {
    SET_MIN_PRICE = 'set-min-price',
    SET_MAX_PRICE = 'set-max-price',
    SET_FILTERED_DATA = 'set-filtered-data',
    SET_START_FILTERED_VALUES = 'set-start-filtered-values',
}

export const dataReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case Data.SET_MIN_PRICE:
            return {
                ...state,
                setFilter: {
                    ...state.setFilter,
                    minPrice: action.price
                } as setFiltersType
            }
        case Data.SET_MAX_PRICE:
            return {
                ...state,
                setFilter: {
                    ...state.setFilter,
                    maxPrice: action.price
                } as setFiltersType
            }
        case Data.SET_FILTERED_DATA:
            return {
                ...state,
                dataFiltered: action.dataArray
            }
        case Data.SET_START_FILTERED_VALUES:
            return {
                ...state, setFilter: {
                    ...state.setFilter,
                    minPrice: 25,
                    maxPrice: 980,
                }
            }
        default:
            return state
    }
}

//actions

export const setMinPriceAC = (price: number) => ({type: Data.SET_MIN_PRICE, price: price} as const)
type setMinPriceACType = ReturnType<typeof setMinPriceAC>

export const setMaxPriceAC = (price: number) => ({type: Data.SET_MAX_PRICE, price: price} as const)
type setMaxPriceACType = ReturnType<typeof setMaxPriceAC>

export const setFilteredDataAC = (data: courseType[]) => ({type: Data.SET_FILTERED_DATA, dataArray: data} as const)
type setFilteredFeedBacksACType = ReturnType<typeof setFilteredDataAC>

export const setStartFilteredValuesAC = () => ({type: Data.SET_START_FILTERED_VALUES} as const)
type setStartFilteredValuesACType = ReturnType<typeof setStartFilteredValuesAC>


type ActionsType = setMinPriceACType
    | setMaxPriceACType
    | setFilteredFeedBacksACType
    | setStartFilteredValuesACType




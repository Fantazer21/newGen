import {combineReducers, createStore} from "redux";
import {dataReducer} from "./reducers/data-reducer";

const rootReducer = combineReducers({
  dataCourses: dataReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

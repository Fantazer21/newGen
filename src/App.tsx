import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from './bll/store';
import s from './styles.module.css';
import SuperDoubleRange from "./UI/common/c8-SuperDoubleRange/SuperDoubleRange";
import {
    courseType, setFilteredDataAC,
} from "./bll/reducers/data-reducer";

function App() {
    const dispatch = useDispatch()
    const dataFiltered = useSelector<AppRootState, courseType[]>(state => state.dataCourses.dataFiltered)
    const data = useSelector<AppRootState, courseType[]>(state => state.dataCourses.dataCourses)

    //filter values
    const minPrice = useSelector<AppRootState, number>(state => state.dataCourses.setFilter.minPrice)
    const maxPrice = useSelector<AppRootState, number>(state => state.dataCourses.setFilter.maxPrice)

    function setFilterValues(min:number, max: number) {
        let newData = data.filter( el =>
              el.prices[0]! > min &&  el.prices[1]! < max
        )
         dispatch(setFilteredDataAC(newData))
    }

    return (
        <div className={s.box}>
            <div className={s.filters}>
                <div>
                    <h3>Set price</h3>
                    <div className={s.price}>
                    </div>
                    <div className={s.doubleInput}>
                        <SuperDoubleRange
                        />
                        <button onClick={() => setFilterValues(minPrice, maxPrice)}
                                className={s.buttonFilter}>Find
                        </button>
                        <h5>Start data:</h5>
                        {
                            data.map((el, ind) => <div key={ind}>{el.name} ||||| min.price: {el.prices[0]} ||||| max.price: {el.prices[1]}</div>)
                        }
                        <h5>Filtered data:</h5>
                        {dataFiltered.map((el, ind) =>
                            <div key={ind}>{el.name}  min.price: {el.prices[0]} max.price: {el.prices[1]}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


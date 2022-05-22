import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../bll/store";

import {setMaxPriceAC, setMinPriceAC} from "../../../bll/reducers/data-reducer";
import {useEffect} from "react";

export default function RangeSlider() {
  const dispatch = useDispatch()
  const minPrice = useSelector<AppRootState, number>(state => state.dataCourses.setFilter.minPrice)
  const maxPrice = useSelector<AppRootState, number>(state => state.dataCourses.setFilter.maxPrice)
  const [value, setValue] = React.useState([minPrice, maxPrice]);

  useEffect(() => {
    setValue([minPrice,maxPrice])
  },[minPrice,maxPrice])

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    dispatch(setMinPriceAC(value[0]))
    dispatch(setMaxPriceAC(value[1]))
  };

  return (
    <div>
      <Box sx={{width: 300}}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          min={0}
          max={600}
          defaultValue={value}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>

  );
}

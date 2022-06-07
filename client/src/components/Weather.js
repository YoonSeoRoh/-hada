import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "../actions/weather";

function Weather() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.weather.data);
  // useEffect(() => {
  //   dispatch(getWeatherThunk());
  //   console.log(data);
  // });
  // const { main, temperature } = useSelector((state) => ({
  //   main: state.weather.data,
  //   temperature: state.weather.data,
  // }));
  return <div></div>;
}

export default Weather;

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const city = "Seoul";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`;

export const getWeatherThunk = createAsyncThunk(
  "/weather/weatherload",
  async () => {
    const response = await axios.get(url);
    return response.data;
  }
);

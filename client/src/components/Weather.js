import styled from "styled-components";
import { useSelector } from "react-redux";

function Weather() {
  const { data, loading, error } = useSelector((state) => state.weather);
  return (
    <div>
      {data !== null && !loading ? (
        <div>
          {data.weather[0].main}
          {(data.main.temp - 273.15).toFixed(2)}
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather"
          />
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default Weather;

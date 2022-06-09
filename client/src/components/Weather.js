import styled from "styled-components";
import { useSelector } from "react-redux";

const WeatherContainer = styled.div`
  h1 {
    font-size: 40px;
  }
  span {
    display: block;
    margin: 5px;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray);
  }
`;

function Weather() {
  const { data, loading, error } = useSelector((state) => state.weather);
  return (
    <WeatherContainer>
      {data !== null && !loading ? (
        <div>
          <h1>{(data.main.temp - 273.15).toFixed(2)}</h1>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather"
            />
          </div>
          <h3>{data.weather[0].main}</h3>
          <span>MAX {(data.main.temp_max - 273.15).toFixed(2)}</span>
          <span>MIN {(data.main.temp_min - 273.15).toFixed(2)}</span>
        </div>
      ) : (
        "Loading"
      )}
    </WeatherContainer>
  );
}

export default Weather;

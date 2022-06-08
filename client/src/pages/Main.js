import styled from "styled-components";

import Weather from "../components/Weather";
import TodoList from "../components/TodoList";
import Clock from "../components/Clock";
import Loading from "../components/Loading";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "../actions/weather";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--white);
`;

function Main() {
  const { data, loading, error } = useSelector((state) => state.weather);
  //const [color, setColor] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (data !== null) return;
    dispatch(getWeatherThunk());
    //setColor(data.main.temp);
  }, [data, dispatch]);

  return (
    <>
      {!loading && data ? (
        <Container
          style={
            (data.main.temp - 273.15).toFixed(2) > 18
              ? { backgroundColor: "var(--orange)" }
              : { backgroundColor: "var(--purple)" }
          }
        >
          <Clock />
          <Weather />
          <TodoList />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Main;

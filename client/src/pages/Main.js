import styled from "styled-components";

import Weather from "../components/Weather";
import TodoList from "../components/TodoList";
import Clock from "../components/Clock";
import Change from "../components/Change";
import Loading from "../components/Loading";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherThunk } from "../actions/weather";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  width: ${(props) => props.width};
  height: 80vh;
  background-color: var(--white);
  margin: 20px;
  text-align: center;
`;

function Main() {
  const { data, loading, error } = useSelector((state) => state.weather);
  //const theme = useSelector((state) => state.theme.darkThemeEnabled);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data !== null) return;
    dispatch(getWeatherThunk());
  }, [data, dispatch]);

  return (
    <>
      {!loading && data ? (
        <Container>
          <Block width="30%">
            <Clock />
            <Weather />
            <Change />
          </Block>
          <Block width="60%">
            <TodoList />
          </Block>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Main;

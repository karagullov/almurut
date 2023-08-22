import React, { useState, useEffect } from "react";
import Users from "./components/Racer";
import { MainWrapper } from "./components/Racer/style";
import Loader from "./components/Common/Loader";
import { Agent } from "./api";
import { useAppDispatch } from "./store";
import { fetchRacers } from "./store/racers/actions";
import { useRacers } from "./store/racers/hooks";

function App(): JSX.Element {
  const [selected, setSelected] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const dispatch = useAppDispatch();
  const racers = useRacers();

  useEffect(() => {
    if (isLoading) return;
    if (fetching) {
      setLoading(true);
      Agent.racers.fetchRacers(currentPage).then((res) => {
        dispatch(fetchRacers([...racers, ...res.results]));
        setCurrentPage((prevState) => prevState + 1);
        setLoading(false);
        setFetching(false);
      });
    }
  }, [currentPage, fetching]);

  useEffect(() => {
    document.addEventListener("scroll", ScrollHandler);
    return function () {
      document.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  const ScrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <MainWrapper>
      {racers.map((racer, index) => (
        <Users
          key={racer.id}
          racer={racer}
          index={index}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
      {isLoading && <Loader />}
    </MainWrapper>
  );
}

export default App;

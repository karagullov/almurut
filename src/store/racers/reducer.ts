import { createReducer } from "@reduxjs/toolkit";
import { fetchRacers } from "./actions";
import { Racer } from "../../api/racer/types";

interface IRacersState {
  racers: Racer[];
}

export const initialState: IRacersState = {
  racers: [],
};

export default createReducer<IRacersState>(initialState, (buiilder) =>
  buiilder.addCase(fetchRacers, (state, { payload }) => ({
    ...state,
    racers: payload,
  }))
);

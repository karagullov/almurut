import { createAction } from "@reduxjs/toolkit";
import { Racer } from "../../api/racer/types";

export const fetchRacers = createAction<Racer[]>("racers/fetchRacers");

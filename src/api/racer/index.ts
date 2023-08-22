import { Racer } from "./types";
import { requests } from "..";

export const RacerAPI = {
  fetchRacers: (page: number) =>
    requests.get<{
      results: Racer[];
    }>(`/racers/?page=${page}`),
};

import { useAppSelector } from "..";
import { Racer } from "../../api/racer/types";

export const useRacers = (): Racer[] => {
  return useAppSelector((state) => state.racers.racers);
};

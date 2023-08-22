import React, { useEffect, useState } from "react";
import {
  Speed,
  StyledCircle,
  StyledPenaltyTime,
  StyledUserNumber,
  TimeWrapper,
  UserName,
  UserWrapper,
} from "./style";
import { Racer } from "../../api/racer/types";

function generateRandomTime() {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}.${formattedSeconds}`;
}

interface Props {
  index: number;
  selected: number;
  setSelected: (selected: number) => void;
  racer: Racer;
}

const RacerItem = ({ index, racer, selected, setSelected }: Props) => {
  const [randomTime, setRandomTime] = useState("00:00.00");
  useEffect(() => {
    setRandomTime(generateRandomTime());
  }, []);
  return (
    <UserWrapper onClick={() => setSelected(index)}>
      <StyledUserNumber selected={selected === index}>
        {index + 1}
      </StyledUserNumber>
      <StyledCircle
        selected={selected === index}
        src="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png"
        alt=""
      />
      <div>
        <UserName>{racer.name}</UserName>
        <TimeWrapper>
          {randomTime} <Speed>| {racer.speed} км/ч</Speed>
        </TimeWrapper>
        <StyledPenaltyTime selected={selected === index}>
          штрафное время {randomTime}
        </StyledPenaltyTime>
      </div>
    </UserWrapper>
  );
};

export default RacerItem;

import styled, { css } from "styled-components";

export const UserWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 2px;
  margin: 5px;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserNumber = styled.div`
  font-weight: 900;
`;

export const UserName = styled.div`
  font-weight: 600;
`;

export const Speed = styled.div`
  color: #054cf2b8;
`;

export const TimeWrapper = styled.div`
  display: flex;
  gap: 5px;
  color: #4c00ff;
`;

export const PenaltyTime = styled.div`
  color: silver;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 63px;
  border-radius: 50%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 300px;
`;

interface StyledUserNumberProps {
  selected: boolean;
}

export const StyledUserNumber = styled(UserNumber)<StyledUserNumberProps>`
  ${(props) =>
    props.selected &&
    css`
      color: #4c00ff;
    `}
`;

export const StyledPenaltyTime = styled(PenaltyTime)<StyledUserNumberProps>`
  ${(props) =>
    props.selected &&
    css`
      color: #e7e703;
    `}
`;
export const StyledCircle = styled(Img)<StyledUserNumberProps>`
  ${(props) =>
    css`
      width: 65px;
      height: 65px;
      border: 3px solid ${props.selected ? "#4c00ff" : "transparent"};
    `}
`;

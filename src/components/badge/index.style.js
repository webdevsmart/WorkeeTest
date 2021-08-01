import styled from "styled-components";

export const BadgeContainer = styled.div`
  border: 1px solid ${(props) => props.color};
  border-radius: 4px;
  font-family: SF UI Display;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.02em;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.fontColor};
  width: 34px;
  height: 24px;
`;

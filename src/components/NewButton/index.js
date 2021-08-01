import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 139px;
  height: 36px;
  background: #ffffff;
  border: 1px dashed #c8cacb;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
`;

const ButtonText = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #0a0b0b;
  margin-left: 11px;
`;

export const NewButton = ({ onClick, children }) => {
  return (
    <ButtonContainer onClick={() => onClick()}>
      <ButtonContent>
        <MdAdd size={18}></MdAdd>
        <ButtonText>{children}</ButtonText>
      </ButtonContent>
    </ButtonContainer>
  );
};

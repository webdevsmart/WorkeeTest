import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px 40px 104px 40px;
`;

export const ContactHeader = styled.div`
  display: flex;
  & h3 {
    font-color: #0a0b0b;
    font-family: Work Sans;
    font-weight: 500;
    font-size: 28px;
    margin-right: 30px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  margin-bottom: 24px;
`;

export const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  & . loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

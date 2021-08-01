import styled from "styled-components";

export const ProfileWrapper = styled.div`
  background: #f4f5f4;
  border-radius: 2px;
  margin-bottom: 12px;
  & p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #0a0b0b;
    opacity: 0.6;
  }

  :hover {
    background: white;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 20px;

  & .profile-session {
    display: flex;
    align-items: center;
    position: relative;
  }
`;

export const ProfileAvatarBody = styled.div`
  display: flex;
  align-items: center;
  & .profile-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  & .profile-name {
    font-family: Work Sans;
    font-weight: 600;
    font-size: 16px;
    color: #0a0b0b;
  }
`;

export const ProfileEditIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 22px;
  svg {
    :active {
      path {
        fill: #0a0b0b;
      }
    }
    :hover {
      path {
        fill: #0a0b0b;
      }
    }
  }
`;

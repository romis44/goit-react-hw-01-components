import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -3px 13px 8px rgb(93 161 90 / 51%);
  border-radius: 10px;
`;

export const UserBox = styled.div`
  width: 150px;
`;

export const UserAvatar = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-weight: 800;
  text-align: center;
  font-size: 20px;
`;

export const UserTag = styled.p`
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 500;
`;

export const UserLocation = styled.p`
  align-items: center;
  font-weight: 700;
`;

export const UserStats = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 15px;
  & li {
    border: 2px solid green;
    width: 100%;
    border-radius: 20px;
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 700;
`;

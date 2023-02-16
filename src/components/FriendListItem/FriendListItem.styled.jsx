import styled from '@emotion/styled';
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 50px;
  gap: 25px;
  //   border: 2px solid green;
  box-shadow: 0px 0px 4px 2px rgb(47 92 73 / 75%);
  border-radius: 10px;
  padding: 4px;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
`;
export const FriendAvatar = styled.img`
  width: 80px;
  height: 80px;
`;
export const FriendName = styled.p`
  font-weight: 800;
`;

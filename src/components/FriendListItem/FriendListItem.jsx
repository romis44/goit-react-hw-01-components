import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';
export default function FriendListItem({
  friend: { id, avatar, name, isOnline },
}) {
  return (
    <FriendItem key={id}>
      <FriendStatus
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

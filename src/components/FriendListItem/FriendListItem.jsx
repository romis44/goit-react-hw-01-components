import PropTypes from 'prop-types';

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
      />
      <FriendAvatar src={avatar} alt="User avatar" width="50" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

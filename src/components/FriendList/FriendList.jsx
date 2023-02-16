import FriendListItem from 'components/FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';
export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => {
        const { id } = friend;
        return <FriendListItem key={id} friend={friend} />;
      })}
    </Friends>
  );
}

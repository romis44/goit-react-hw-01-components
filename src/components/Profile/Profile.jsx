import {
  UserProfile,
  UserBox,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <UserProfile>
      <UserBox>
        <UserAvatar src={avatar} alt="User avatar" class="avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserBox>

      <UserStats>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </UserStats>
    </UserProfile>
  );
}

import React from 'react';
import './UserCard.scss'

interface Props {
  userTitle?: string;
  userName?: string;
  userSurname?: string;
  avatar?: string;
}

const UserCard = (
  {
    userTitle,
    userName,
    userSurname,
    avatar
  }: Props
) => {
  return <div className="user-card">
    <img
      className="user-card__avatar"
      src={avatar}/>
    <span className="user-card__full-name">{userTitle} {userName} {userSurname}</span>
  </div>
}

export default UserCard;

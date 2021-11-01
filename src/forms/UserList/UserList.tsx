import React, {useEffect, useState} from 'react';
import UserCard from "../../components/UserCard/UserCard";
import './UserList.scss'
import {UserPreview} from "../../api/dummyapi/types/response";
import UserController from '../../api/dummyapi/dumMyApi'
import Loader from "../../components/Loader/Loader";

const UserList = () => {
  const [users, setUsers] = useState([] as Array<UserPreview>)
  const [showUserLoader, setShowUserLoader] = useState(true)
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
      getUsers(0, 20)
    },
    [])

  const getUsers = (page: number, limit: number) => {
    setShowUserLoader(true)
    UserController.getList(
      {page, limit},
      (resp) => {
        setUsers(resp.data)
        setTotalUser(resp.total)
      }, () => {},
      () => setShowUserLoader(false))
  }

  return <div className="user-list">
    <h1>Пользователи:</h1>
    <div className="user-list__content">
      <Loader show={showUserLoader}/>
      {users.map(user => <UserCard
        avatar={user.picture}
        userTitle={user.title}
        userName={user.firstName}
        userSurname={user.lastName}
      />)}
    </div>
    <h2>Всего пользователей: {totalUser}</h2>
  </div>
}

export default UserList;

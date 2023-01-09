import React, { useState } from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ users, isLoading, inviteUsers, invite, updateSucces, count }) => {

  const [text, setText] = useState('');

  const changeHandler = (event) => {
    setText(event.currentTarget.value);
  }

  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder="Найти пользователя..." value={text} onChange={changeHandler}/>
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {
            users.filter(obj => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return fullName.includes(text.toLowerCase());            
            }).map(user => <User key={user.id} id={user.id} first_n={user.first_name} last_n={user.last_name} email={user.email} avatr={user.avatar} inviteUsers={inviteUsers} invite={invite}/>)
          }
        </ul>
      )}
      {
        count > 0 && (<button className="send-invite-btn" onClick={() => {updateSucces(true, 0)}}>Отправить приглашение</button>)
      }      
    </>
  );
};

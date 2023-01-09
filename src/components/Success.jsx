import React from 'react';

export const Success = ({ count, updateSucces }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn" onClick={() => {updateSucces(false, 1)}}>Назад</button>
    </div>
  );
};

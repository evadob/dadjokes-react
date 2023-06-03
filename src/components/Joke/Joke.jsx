import React, { useState } from "react";

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [countUp, setCountUp] = useState(likes);
  const [countDown, setCountDown] = useState(dislikes);

  const handleLike = () => {
    setCountUp(countUp + 1);
  };

  const handleDislike = () => {
    setCountDown(countDown + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleLike}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {countUp}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleDislike}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {countDown}
        </span>
      </div>
    </div>
  );
};

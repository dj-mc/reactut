import React from 'react';

const Avatar = ({ user }) => {
  return <img className="Avatar" src={user.avatar_url} alt={user.name} />;
};

const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
};

const Comment = ({ author, comment_text, date_posted }) => {
  return (
    <>
      <h2>Comment</h2>
      <div className="Comment">
        <UserInfo user={author} />
        <div className="Comment-text">{comment_text}</div>
        <div className="Comment-date">{date_posted}</div>
      </div>
    </>
  );
};

const comment_data = {
  date_posted: new Date().toLocaleDateString(),
  comment_text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatar_url: 'http://placekitten.com/g/64/64'
  }
};

export { Comment, comment_data };

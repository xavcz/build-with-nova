import React from 'react';

export const PostsItem = ({url, thumbnail, title, desc, user}) => (
  <div>
    <a href={url}>
      <div className="menu-item-img" style={{backgroundImage: `url(${thumbnail})`}}></div>
      <p className="menu-item-title">{title}</p>
    </a>
    <p className="menu-item-desc">{desc}</p>
    <a href={`https://twitter.com/${user}`} className="menu-item-tweep">@{user}</a>
  </div>
);

PostsItem.propTypes = {
  url: React.PropTypes.string,
  thumbnail: React.PropTypes.string,
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
  user: React.PropTypes.string,
};

PostsItem.defaultProps = {
  url: 'http://www.telescopeapp.org',
  thumbnail: 'http://www.telescopeapp.org/images/telescope-logo-square.png',
  title: 'Telescope Nova',
  desc: 'Build great products with React, GraphQL & Meteor',
  user: 'xav_cz'
};

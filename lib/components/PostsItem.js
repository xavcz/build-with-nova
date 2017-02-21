import React, { PropTypes } from 'react';
import styled from 'styled-components';

const PostsItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1rem;
`;

const PostsItemThumbnail = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

const PostsItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const PostsItemTitle = styled.a`
  color: #5d5d5d;
  margin-bottom: 0.5rem;
  text-decoration: none;
  
  &:hover {
    color: #333;
  }
`;

const PostsItemDesc = styled.p`
  color: #6c6c6c;
  opacity: 0.7;
  font-size: 0.8rem;
`;

const PostsItemUser = styled.a`
  margin-top: 0.25rem;
  color: #bfbfbf;
  font-size: 0.7rem;
  text-decoration: none;
  align-self: flex-end;
  
  &:hover {
    color: #5d5d5d;
  }
`;

export const PostsItem = ({
  url,
  thumbnailUrl,
  title,
  body,
  user: { twitterUsername  } = { twitterUsername: 'telescopeapp' }
}) =>
  <PostsItemWrapper>
    <a href={url}>
      <PostsItemThumbnail src={thumbnailUrl} />
    </a>
    <PostsItemBody>
      <PostsItemTitle href={url}>{title}</PostsItemTitle>
      <PostsItemDesc>{body}</PostsItemDesc>
      <PostsItemUser href={`https://twitter.com/${twitterUsername}`}>@{twitterUsername}</PostsItemUser>
    </PostsItemBody>
  </PostsItemWrapper>

PostsItem.propTypes = {
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  user: PropTypes.shape({
    twitterUsername: PropTypes.string,
  }),
};

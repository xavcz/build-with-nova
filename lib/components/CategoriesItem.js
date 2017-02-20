import React from 'react';
import styled from 'styled-components';

import { PostsItem } from './PostsItem';

const CategoriesItemWrapper = styled.div`
  border-bottom: 1px solid #f5f5f5;
  padding: 1rem 0;
`;

const CategoriesItemTitle = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CategoriesItemOrder = styled.span`
  border-radius: 50%;
  border: 2px solid purple;
  color: purple;
  font-size: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoriesItem = ({
  order,
  name,
  posts = ['yay'],
}) =>
  <CategoriesItemWrapper>
    <CategoriesItemTitle onClick={() => console.log('open')} >
      <CategoriesItemOrder>{order}</CategoriesItemOrder>{name}
    </CategoriesItemTitle>
    {posts.map(post => <PostsItem key={post.url} />)}
  </CategoriesItemWrapper>

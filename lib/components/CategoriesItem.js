import React from 'react';
import styled from 'styled-components';

import { PostsItem } from './PostsItem';

const CategoriesItemWrapper = styled.div`
  padding: 1rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
`;

const CategoriesItemTitle = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const CategoriesItemOrder = styled.span`
  border-radius: 50%;
  border: 2px solid purple;
  color: purple;
  font-size: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoriesItem = ({
  order,
  name,
  posts = [],
  isOpen = false,
}) =>
  <CategoriesItemWrapper>
    <CategoriesItemTitle onClick={() => console.log('open')} >
      <CategoriesItemOrder>{order}</CategoriesItemOrder>{name}
    </CategoriesItemTitle>
    {isOpen ? posts.map((post, index) => <PostsItem {...post} key={index} />) : null}
  </CategoriesItemWrapper>

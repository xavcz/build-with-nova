import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { CategoriesItem } from './CategoriesItem';
import { Loading } from './Loading';

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 360px;
  padding: 0 1rem;
`;

export const CategoriesList = ({
  categories = [],
  loading,
}) =>
  <Menu>
    { loading 
      ? <Loading />
      : categories.map(category => <CategoriesItem {...category} key={category.order}/>)
    }
    {/* <ul>
      <ListItem index={1} />
      <ListItem index={2} visited={true} title="You know dis" isOpen={true} />
    </ul> */}
  </Menu>
    // {isOpen ? "yay" : null}
    {/* { isOpen 
      ? <div className="menu-item-content">
          <div className="menu">
            <ul>
              <ItemContent />
            </ul>
          </div>
        </div>
      : null
    } */}

CategoriesList.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.bool,
};

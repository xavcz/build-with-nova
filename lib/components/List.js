import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 400px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
`;

const ListTitle = styled.h3`
  padding-top: 16px;
  padding-bottom: 16px;
  background: #2c2e34;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.2);
  border-radius: 10px 10px 0 0;
  font-stretch: normal;
  letter-spacing: 4.8px;
  text-align: center;
  text-transform: uppercase;
`;

const ListWelcome = styled.div`
  border-top: solid 1px #e5e5e5;
  border-bottom: solid 1px #e5e5e5;
  margin-bottom: 10px;
  padding: 30px 40px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 360px;
`;

import { ListItem } from './ListItem';
import { ListCallToAction } from './ListCallToAction';

export const List = ({
  title = 'This is great',
  welcome = 'Oh yeah.',
}) => 
  <Card>
    
    <ListTitle>{title}</ListTitle>

    <ListWelcome>{welcome}</ListWelcome>

    <Menu>
      {/* <ul>
        <ListItem index={1} />
        <ListItem index={2} visited={true} title="You know dis" isOpen={true} />
      </ul> */}
    </Menu>
    
    <ListCallToAction />
    
  </Card>

List.propTypes = {
  title: PropTypes.string,
  welcome: PropTypes.string,
};

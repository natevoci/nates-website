import React from 'react';
import styled from '@emotion/styled';
import { Link, useMatch } from 'react-router-dom';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import LibraryMusic from '@mui/icons-material/LibraryMusic';
import Lyrics from '@mui/icons-material/Lyrics';
import Code from '@mui/icons-material/Code';

import { ROUTES } from '../routes';

const StyledNav = styled.nav`
  min-width: 200px;
  padding: 8px 8px;
`;

const ListItem = styled.li`
  width: 100%;
  &:not(:first-of-type) {
    margin-top: 8px;
  }
`;

const StyledLink = styled(({ $match, ...props }) => (<Link {...props} />))`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${p => p.$match ? '#E5E6EA' : 'inherit'};
  color: #0e5ecd;
`;

const ReactRouterLink = (props) => {
  const match = useMatch(props.to);
  return <StyledLink $match={!!match} {...props} />;
}

export const Nav = () => (
  <StyledNav aria-label="navigation menu">
    <List>
      {Object.values(ROUTES).filter(
        ({ title }) => !!title,
      ).map(
        ({ url, Icon, title }) => (
          <ListItem
            key={url}
            disablePadding
          >
            <ReactRouterLink to={url}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ReactRouterLink>
          </ListItem>
        )
      )}
    </List>
  </StyledNav>
);

import React from 'react';
import styled from '@emotion/styled';
import { Link, useMatch } from 'react-router-dom';
import {
  List,
  ListItem,
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

const StyledLink = styled(Link)`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${p => p.$match ? '#E5E6EA' : 'inherit'};
`;

const ReactRouterLink = (props) => {
  const match = useMatch(props.to);
  console.log({ to: props.to, match: !!match });
  return <StyledLink $match={!!match} {...props} />;
}

export const Nav = () => (
  <StyledNav aria-label="navigation menu">
    <List>
      {Object.values(ROUTES).map(({ url, title }) => (
        <ReactRouterLink
          key={url}
          to={url}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        </ReactRouterLink>
      ))}
    </List>
  </StyledNav>
);

import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinkIcon from '@mui/icons-material/Link';
import { useMatch, useParams } from 'react-router-dom';

import { TextBlock } from './TextBlock';
import LinkSvg from '../images/link.svg';

const StyledCard = styled(Card)`
  margin-bottom: 16px;
`;

const StyledCardHeader = styled(CardContent)`
  background-color: #5b729b;
  color: #e3e5ed;
`;

const StyledHeader = styled.h1`
`;

const StyledAnchor = styled.a`
  cursor: pointer;
  color: inherit;

  & svg.hashIcon {
    margin-left: 16px;
    visibility: hidden;
    width: 16px;
    color: #ffffff;
    fill: #ffffff;
  }

  &:hover {
    & svg.hashIcon {
      visibility: visible;
    }
  }
`;

export const Content = styled(({ noPadding, ...props }) => (<div {...props} />))`
  padding: ${p => p.noPadding ? '0' : '16px'};
`;

export const CardItem = ({
  title,
  author,
  date,
  children,
  noPadding = false,
}) => {
  const link = title.replace(/[^0-9a-z]/gi, '-').toLowerCase();

  const match = useMatch(location.hash.slice(1));
  const params = useParams();
  // console.log({ match, params });

  React.useLayoutEffect(
    () => {
      // const hash = location.hash.slice(1).toLowerCase()
      const hash = params.anchor;
      if (hash === link) {
        const target = document.getElementById(hash);
        if (target) {
          // debugger;
          target.scrollIntoView();
        }
      }
    },
    [],
  );

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledAnchor id={link} className='hashLink' href={`${location.hash}/${link}`}>
          <StyledHeader>
          {title}
            <LinkSvg className='hashIcon' />
          </StyledHeader>
        </StyledAnchor>
        {author ? (
          <p>{author}</p>
        ) : null}
        {date ? (
          <p>{date}</p>
        ) : null}
      </StyledCardHeader>
      <Content noPadding={noPadding}>
        <TextBlock>
          {children}
        </TextBlock>
      </Content>
    </StyledCard>
  )
}

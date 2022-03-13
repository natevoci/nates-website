import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextBlock } from './TextBlock';

const StyledCard = styled(Card)`
  margin-bottom: 16px;
`;

const StyledCardHeader = styled(CardContent)`
  background-color: #5b729b;
  color: #e3e5ed;
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
  return (
    <StyledCard>
      <StyledCardHeader>
        <h1>{title}</h1>
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

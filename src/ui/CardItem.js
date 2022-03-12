import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextBlock } from './TextBlock';

const StyledCard = styled(Card)`
  margin-bottom: 32px;
`;

const StyledCardHeader = styled(CardContent)`
  background-color: #57515c;
  color: #e3e5ed;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const CardItem = ({
  title,
  date,
  author,
  children,
}) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <h1>{title}</h1>
        <p>{date}</p>
      </StyledCardHeader>
      <Content>
        <TextBlock>
          {children}
        </TextBlock>
      </Content>
    </StyledCard>
  )
}

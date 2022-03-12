import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const StyledCard = styled(Card)`
  margin-bottom: 32px;
`;

const StyledCardHeader = styled(CardContent)`
  background-color: #57515c;
  color: #e3e5ed;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  color: #727272;
`;

export const NewsItem = ({
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
        {children}
      </Content>
    </StyledCard>
  )
}

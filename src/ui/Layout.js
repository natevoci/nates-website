import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0 16px;
  gap: 16px;
`;

export const Layout = ({ children, nav }) => {
  return (
    <Wrapper>
      {nav ? (
        <>
          <NavWrapper>
            {nav}
          </NavWrapper>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </>
      ) : children}
    </Wrapper>
  )
}
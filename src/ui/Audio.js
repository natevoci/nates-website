import React from 'react';
import styled from '@emotion/styled';

const StyledAudio = styled.audio`
  margin: 0;
  width: 30em;
  height: 2em;
`;

export const Audio = ({ srcList }) => {
  return (
    <StyledAudio controls preload="none">
      {srcList.map((src, index) => (
        <source key={index} src={src} type="audio/mpeg" />
      ))}
    </StyledAudio>
  );
}
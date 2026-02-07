import React from 'react';
import styled from '@emotion/styled';

import { useOnScreen } from './useOnScreen';

const YoutubeFrame = styled.iframe`
    margin: 0.25em 0;
    width: 608px;
    height: 342px; /* 16:9 */
`;

export const Youtube = (props) => {
  const ref = React.useRef();
  const isVisible = useOnScreen(ref);

  return (
    <>
      <div ref={ref}></div>
      {isVisible ? (
        <YoutubeFrame
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          {...props}
        />
      ) : null}
    </>
  );
};

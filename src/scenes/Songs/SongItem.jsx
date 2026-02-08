import React from 'react';
import styled from '@emotion/styled';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import DownloadIcon from '@mui/icons-material/Download';

import { TextBlock, CardItem, Paragraph, Indent, Pre, useOnScreen, Youtube } from '../../ui';

const DownloadLink = styled.a`
  line-height: 40px;
  color: #1976d2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  & > svg {
    vertical-align: middle;
  }
`;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid #0000001f`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: '16px',
  },
}));

export const SongItem = ({
  title,
  author,
  date,
  description,
  videos,
  downloads,
  lyrics
}) => {
  return (
    <CardItem
      title={title}
      author={author ? `Music and Lyrics: ${author}` : ''}
      date={date ? `Written: ${date}` : ''}
      noPadding
    >
      <div>
        {description ? (
          <Accordion>
            <AccordionSummary>
              Description
            </AccordionSummary>
            <AccordionDetails>
              {description}
            </AccordionDetails>
          </Accordion>
        ) : null}

        {videos ? (
          <Accordion>
            <AccordionSummary>
              Video
            </AccordionSummary>
            <AccordionDetails>
              {videos.map(video => (
                <TextBlock key={video.youtube}>
                  <Paragraph>
                    {video.description}
                  </Paragraph>
                  <Youtube
                    src={`https://www.youtube.com/embed/${video.youtube}`}
                  ></Youtube>
                </TextBlock>
              ))}
            </AccordionDetails>
          </Accordion>
        ) : null}

        {downloads ? (
          <Accordion>
            <AccordionSummary>
              Downloads
            </AccordionSummary>
            <AccordionDetails>
              {downloads.map(download => (
                <TextBlock key={download.url}>
                  <Paragraph>
                    <DownloadLink href={download.url}>
                      <DownloadIcon />
                      {download.title}
                    </DownloadLink>
                  </Paragraph>
                </TextBlock>
              ))}
            </AccordionDetails>
          </Accordion>
        ) : null}

        {lyrics ? (
          <Accordion>
            <AccordionSummary>
              Lyrics
            </AccordionSummary>
            <AccordionDetails>
              <TextBlock>
                {lyrics.map((stanza, index) => (
                  <Paragraph key={index}>
                    <i>{stanza.name}</i><br />
                    <Indent>
                      <Pre>
                        {stanza.content}
                      </Pre>
                    </Indent>
                  </Paragraph>
                ))}
              </TextBlock>
            </AccordionDetails>
          </Accordion>
        ) : null}

      </div>
    </CardItem>
  );
};

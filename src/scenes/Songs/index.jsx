import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Nav, TextBlock, Paragraph } from '../../ui';
import { ROUTES } from '../../routes';
import { SongItem } from './SongItem';
import { songs } from './songs';

export default () => {
  return (
    <Layout
      nav={<Nav />}
    >
      <TextBlock>
        <Paragraph>
          On this page you'll find the
          links to download the sheet music in PDF format for each of my songs,
          and songs I have been involved in writing, and the lyrics. Currently
          the only sheet music format I have available is lead sheet format (melody line
          with chords written above). I have been asked for piano scores, but
          unfortunately I'm a guitarist and I don't have the time or talent to create
          such a format. If anyone wants to create piano scores for this music that would
          be most appreciated.
        </Paragraph>
        <Paragraph>
          There are also some lyric videos, and mp3s with varing degrees of quality,
          of recorded versions of some of the songs. If you
          are interested in hearing a song that doesn't currently have a sample recording
          then email me and I'll see what I can do.
        </Paragraph>
        <Paragraph>
          If you need information on copyright see <Link to={ROUTES.MUSIC.url}>this page</Link>.
        </Paragraph>
        <Paragraph>
          Enjoy!!
        </Paragraph>
      </TextBlock>

      {songs.map(song => (
        <SongItem
          key={song.title}
          title={song.title}
          author={song.author}
          date={song.date}
          description={song.description}
          videos={song.videos}
          downloads={song.downloads}
          lyrics={song.lyrics}
        />
      ))}
    </Layout>
  )
};

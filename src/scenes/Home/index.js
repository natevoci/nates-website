import React from 'react';

import { Layout, Nav, NewsItem } from '../../ui';

export default () => {
  return (
    <Layout
      nav={<Nav />}
    >
      <NewsItem title="New 'Know The Truth' recording" date="18-Nov-2020">
        <p>
        Another of my songs, <a href="/music/song.rails?song=KnowTheTruth">Know The Truth</a>, has been recorded
        by the familiy@10 band for online worship this week.
        </p>
      </NewsItem>

    </Layout>
  )
};

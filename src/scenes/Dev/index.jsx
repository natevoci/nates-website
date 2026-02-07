import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Nav, CardItem, TextBlock, Paragraph } from '../../ui';
// import { ROUTES } from '../../routes';

export default () => {
  return (
    <Layout
      nav={<Nav />}
    >
      <TextBlock>
        <Paragraph>
          On this page you'll find a summary of my development projects.
        </Paragraph>
      </TextBlock>

      <CardItem title="DigitalWatch">
        <Paragraph>
          <Link to='https://github.com/natevoci/DigitalWatch'>https://github.com/natevoci/DigitalWatch</Link>
        </Paragraph>

        <Paragraph>
          DigitalWatch is a free open source project for watching and recording DVB-T digital
				television.
        </Paragraph>

        <Paragraph>
          I started this project because I was unhappy with all the
					other applcations that were available at the time. They all lacked in
					their ability to customize many aspects of the tv watching experience,
					so i created the DigitalWatch 0.x series which was designed around the
					WinDTV SDK and ended up having BDA support tacked on the side in the 0.7x versions.
        </Paragraph>

        <Paragraph>
          It became obvious that the design I'd used to create the original version of
					DigitalWatch did not suit BDA, so I undertook a total redesign of the DigitalWatch
					archtecture which has resulted in DigitalWatch 2.x
        </Paragraph>

        <Paragraph>
          DigitalWatch is mostly oriented towards watching rather than recording
					although most versions do have recording capabilities. If you are intereted
					in scheduling your recordings then I recommended using
					<a href="http://dvb-ws.sourceforge.net/">DVB Web Scheduler</a>.
        </Paragraph>

      </CardItem>

    </Layout>
  )
};

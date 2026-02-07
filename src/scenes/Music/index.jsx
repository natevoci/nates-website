import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Nav, CardItem, Paragraph } from '../../ui';

import { ROUTES } from '../../routes';

export default () => {
  return (
    <Layout
      nav={<Nav />}
    >
      <CardItem title="About Me">
        <Paragraph>
          Hi there. My name is Nathan Creek. If you enter my name into your favorite search engine you'll soon discover that there's a band named after me in the north west of the states. Ok, so maybe they're not named after me, but having the same name means things could start to get a bit confusing if we start talking Nathan Creek's music. Good thing I have a nickname (Nate).
        </Paragraph>

        <Paragraph>
          In Mid-2005 I was getting more involved in choosing songs for worship for the Sunday evening service at our church (Doncaster East Uniting Church, formerly Wesley Deep Creek Uniting). It was in doing this that I discovered that choosing songs to go with a particular theme or message for the evening was quite difficult at times. The songs we were choosing from seemed to mostly come from a limited gene pool of themes. There are plenty of generic praise and worship songs, and don't get me wrong, a lot of these are great songs, but I was looking for more of a message in the songs than just singing a tribute to God or Jesus.
        </Paragraph>

        <Paragraph>
          I began to look for some new songs in the hope of finding some with more diverse and challenging lyrics. I paid a visit to a Christian book store and had a browse through some of the music books available there but was left very disappointed for two reasons.
          <ul>
            <li>Firstly, the lack of lyrical diversity. I love God too, but I want to sing about more than just that. I want lyrics that'll get people thinking.</li>
            <li>Secondly, most of the songs consisted of one verse and one chorus. If you didn't want to do a lot of repeating then the songs would be very short.</li>
          </ul>
        </Paragraph>

        <Paragraph>
          Realising that I wasn't getting far with the "popular" Christian worship music I decided to change tack. I started going through the songs on freepraiseandworship.org, but it's like trying to find a needle in a haystack. I spent many hours going through lyrics to songs on there and only came up with 2 or 3 songs that I liked.<br />
          Having gone through hundreds of songs I eventually got to the point where I decided it was worth me attempting to write something for myself. And that's how it started. I took a topic from the previous week's service and a few days later I had Through Your Eyes written.
        </Paragraph>
        
        <Paragraph>
          We are very lucky in our church. We are blessed with a great bunch of talented musicians making it a pleasure to turn up each week to play our part in worshiping God with song. Introducing my new music to them has been a lot of fun, and a great learning experience, and I thank everyone who has encouraged and supported me.
        </Paragraph>

        <Paragraph>
          Given the popularity of my songs, and suggestions from other people, we have decided to share our gifts so that other churches can benefit from what we have created. This site has been put together to make the songs I have written available for download. See the copyright page for conditions of use.
        </Paragraph>
      </CardItem>

      <CardItem title="Copyright">
        <Paragraph>
          These songs (both the sheet music, and the recordings) are provided free of change for use in worship services. They are provided with the hope that other churches will be able to use them in their own worship services to both challenge and encourage people.
        </Paragraph>
        <Paragraph>
          These songs are not registered with a copyright agency. If you wish to use these songs outside of a worship environment then you will need to contact me to work something out.
        </Paragraph>
        <Paragraph>
          My email address is on the sheet music.
        </Paragraph>
        <Paragraph>
          <Link to={ROUTES.MUSIC_SONGS.url}>Songs / Downloads</Link>
        </Paragraph>
      </CardItem>

      <CardItem title="Feedback">
        <Paragraph>
          If you use any of these songs in your church please email me to let me know so that I can have some idea of where and how they are being used. Information like this will be valuable for me in writing new songs in the future. If you ask I might also be able to keep you updated whenever new songs are released or if there are any changes to existing songs.
        </Paragraph>

        <Paragraph>
          Please feel free to let me know what you think of the songs. Let me know what bits you like, what bits you don't like, perhaps ask questions about the meaning of any lyrics you're not sure about. Any other comments and suggestions are also welcome.
        </Paragraph>

        <Paragraph>
          <b><font color="#FF663A">Please email me to let me know if you use any of these songs.</font></b>
        </Paragraph>

        <Paragraph>
          I don't want crawlers getting my email address, so I won't put it here, but my email address is on the sheet music.
        </Paragraph>

        <Paragraph>
          <Link to={ROUTES.MUSIC_SONGS.url}>Songs / Downloads</Link>
        </Paragraph>
      </CardItem>

    </Layout>
  )
};

import React from 'react';

import { Layout, Nav, CardItem, Paragraph, Audio, BlockQuote } from '../../ui';

import audioRainLive from 'url:../../Downloads/Music/Rain_(live).mp3';
import audioWeHaveASaviour from 'url:../../Downloads/Music/17 - Deep Creek - We Have A Saviour.mp3';
import audioAmazing from 'url:../../Downloads/Music/16 - Deep Creek - Amazing.mp3';
import audioFollowTheSigns from 'url:../../Downloads/Music/15 - Deep Creek - Follow The Signs.mp3';
import audioIllGo from 'url:../../Downloads/Music/14 - Deep Creek - I\'ll Go.mp3';
import audioYourKingdom from 'url:../../Downloads/Music/13 - Deep Creek - Your Kingdom.mp3';

import imageTSFileSource from '../../images/screenshot-tsnowandnext1.png';
import imageKeyboardRedirector from '../../images/screenshot-keyboardredirector.png';

export default () => {
  return (
    <Layout
      nav={<Nav />}
    >
      <CardItem title="New 'Know The Truth' recording" date="18-Nov-2020">
        <Paragraph>
        Another of my songs, <a href="/music/song.rails?song=KnowTheTruth">Know The Truth</a>, has been recorded
        by the familiy@10 band for online worship this week.
        </Paragraph>
      </CardItem>

      <CardItem title="Online Worship" date="27-Oct-2020" author="Nate">
        <Paragraph>
        With the COVID situation we have not been worshipping on site this year since March, and instead
        we're <a href="http://manninghamuc.org/online/">worshipping online</a>. to contribute to these services
        our band have been recording two songs each week. This involves the individuals recording their parts in
        their homes and then mixing it all together.
        </Paragraph>
        <Paragraph>
        During that time we have recorded nearly a dozen of my songs, and I have now uploaded them to youtube and
        added them to the <a href="/music/songs.rails">songs / downloads</a> page.
        </Paragraph>
        <Paragraph>
        You're free to use any of these in your own worship. If you do I'd love to hear about it, and 
        maybe share some resources for online worship.
        </Paragraph>
        <Paragraph>
        For more information on copyright see <a href="/music/">this page</a>.
        </Paragraph>
      </CardItem>

      <CardItem title="Rain" date="05-Aug-2015" author="Nate">
        <Paragraph>
        During Lent this year I had the opportunity to write another new song, <a href="/music/song.rails?song=Rain">Rain</a>. You can download the
        music and a live recording from church from the <a href="/music/songs.rails">songs / downloads</a> page.
        </Paragraph>
        <Audio srcList={[audioRainLive]} />
        <aside>
        You can check out my other music on the <a href="/music/songs.rails">songs&nbsp;/&nbsp;downloads</a> page.
        </aside>
        <Paragraph>
        Rain was mostly written at the quiet day that was one of the lent events.
        That day we explored one of the bible readings where Jesus calmed the storm.
        This got me thinking about water, and the different symbolic meanings it can have.
        </Paragraph>
        <Paragraph>
        In verse 1, the first 4 lines use the idea of flowing water. Our thoughts and actions
        form a river which naturally wants to carry you along its well-worn course.
        </Paragraph>
        <Paragraph>
        The last 2 lines of the verse are my favourite part of the song.
        </Paragraph>
        <BlockQuote>
          "Wash away the castles we make, Giving life, giving love".
        </BlockQuote>
        <Paragraph>
        This has several different meanings to me, and has developed a few more since I wrote it.
        I guess the main meaning relates to the parable of the rich fool (Luke 12:13-21). Storing
        up wealth is something our culture do quite well, both in terms of possessions, and in
        terms of social needs. We become members of communities where we feel safe and comfortable.
        Like we've built ourselves a social mansion, with everything we could ever want, to the
        point where we remove any need to leave the house. The problem is, Jesus calls us to
        connect with the outcast, and they're not in our social mansion.
        Sometimes we need to pull down our mansions so that we can build new relationships of
        life and love with those outside.
        </Paragraph>
        <Paragraph>
        I find that the older I get, the less and less I need to deal with change. When I was
        young, things changed often. Different subjects at school each term, students arriving
        and leaving each year, trying out different things, sports, music, hobbies. Life was
        constantly changing. Now days changes are much less frequent. I've been in the same job
        for 11 years, same church for as long, and although it's had some restructuring I have
        many of the same friends. All in all my life is pretty comfortable, which is great, but
        troubling at the same time. Someone once told me
        </Paragraph>
        <BlockQuote>
          "If you're a Christian, and you're comfortable, then you're not doing it right".
        </BlockQuote>
        <Paragraph>
        I don't entirely agree, but I take the point that much of what Jesus calls us to do is
        not comfortable. Visiting sick and imprisoned, helping the homeless, standing up
        against injustice.
        </Paragraph>
        <Paragraph>
        Speaking of injustice, that brings me to the latest meaning those last two lines of
        the verse have had for me. Substitute "castles" with "border protection policies".
        This meaning came to me when I was hearing about the things Lucas has been doing with
        the "Love Makes A Way" group and their non-violent direct actions. It has added a whole
        new dimension to the song for me.
        </Paragraph>
        <Paragraph>
        Looking at the chorus.
        </Paragraph>
        <BlockQuote>
          "After the rain falls down, I might swim or I might drown".
        </BlockQuote>
        <Paragraph>
        This reminds me of the story of Jesus walking on the water, where he calls out to Peter
        to walk out with him. Peter is willing to give it a go even though he doesn't have the
        faith he needs to achieve it. He starts to drown, but then Jesus reaches out and helps
        him. I think we can all have similar experiences when we try something new. We don't
        know if it's going to work or not, but we are willing to give it a go.
        </Paragraph>
        <Paragraph>
        Looking at the 2nd Verse, this verse talks about the life giving nature of rain.
        Growing up on a farm I was all too aware of the need for rain for plants to grow.
        A farmer's livelihood relies on the variations in the weather. You need times of rain,
        and you need times of Sun. But even though we know this, sometimes we still find rain
        inconvenient and make statements like "I hope it doesn't rain on the weekend".
        A fact of life is that sometimes things are going to annoy us, but if we can get through
        that then we might find that it allowed something new to grow.
        </Paragraph>
      </CardItem>

      <CardItem title="New version of TSFileSource" date="22-Apr-2012" author="Nate">
        <Paragraph>
          I've uploaded <a href="/dev/tsfilesource.rails">TSFileSource 2.2.1.172</a>. This new version
          mostly bug fixes. See the <a href="/dev/tsfilesource.rails?history=true#TSFS2.2.1.172">History</a>
          for more details about the changes.
        </Paragraph>
        <Paragraph>
          It's not ready yet, but I have also been working on replacing
          the ts parsing code in TSFileSource with the parser I wrote for TSNowAndNext.
          This new parser will mean files with PCR rollovers will work correctly, and seeking will be more
          accurate, however it's a complicated process so it's taking a while and I'm only implementing it for
          TS mpeg files (188 byte packets) to begin with. I'll leave PS mpeg files (2048 byte packets) for later.
        </Paragraph>
      </CardItem>

      <CardItem title="TSNowAndNext - using Now and Next data to create a ProjectX cut file" date="07-Nov-2011" author="Nate">
        <Paragraph>
          While experimenting with Comskip I discovered that the large pre and post padding i
          use with my recordings so that I don't miss stuff when the networks run late was
          causing a lot of unnecessary processing. I originally had the idea that using the
          now and next information should be added to Comskip, and to help out with that I
          set out to write some code to see how well it could be implemented. This is the result.
        </Paragraph>
        <Paragraph>
          TSNowAndNext is a command line tool that creates a ProjectX cut file from the now
          and next information contained within the transport stream.
        </Paragraph>
        <Paragraph>
          <a href="/dev/tsnowandnext.rails">TSNowAndNext</a>
        </Paragraph>
        <Paragraph>
          <img src={imageTSFileSource} />
        </Paragraph>
      </CardItem>

      <CardItem title="We Have A Saviour" date="12-May-2011" author="Nate">
        <Paragraph>
        I got inspired over the last few days and as a result I have
        another new song. It's called We Have A Saviour and is themed
        around the purpose of Easter, which I'm nearly a month late for,
        but oh well.
        </Paragraph>
        <Paragraph>
          <Audio srcList={[audioWeHaveASaviour]} />
        </Paragraph>
        <Paragraph>
        You can download the music and a recording from
        the <a href="/music/songs.rails">songs / downloads</a> page.
        </Paragraph>
      </CardItem>

      <CardItem title="Amazing" date="03-Sep-2010" author="Nate">
        <Paragraph>
        It's taken me a while to get this up on the website, but the music and recording
        of my latest song Amazing is now available
        from the <a href="/music/songs.rails">songs / downloads</a> page.
        </Paragraph>
        <Paragraph>
        We've played this a bit at church and I've some good positive feedback about it.
        It's proved fairly popular.
        </Paragraph>
        <Paragraph>
          <Audio srcList={[audioAmazing]} />
        </Paragraph>
      </CardItem>

      <CardItem title="Keyboard Redirector - for remapping your keyboards" date="02-Dec-2009" author="Nate">
        <Paragraph>
          <img src={imageKeyboardRedirector} width="223" height="200" />
        </Paragraph>
        <Paragraph>
          I've been setting up my new HTPC lately and came across the need to remap the keys
          on my remote controls. Problem was, the remotes I have are HID keyboard devices,
          so pressing keys on the remote is just like pressing keys on the keyboard, and all
          the key handling applications I tried were unable to tell the difference between the
          remote controls and the main keyboard (which I still wanted to be able to use).
        </Paragraph>
        <Paragraph>
          So what do you do when you can't find an an application to do what you need?
          You write your own of course.
        </Paragraph>
        <Paragraph>
          <a href="/dev/keyboardredirector.rails">Keyboard Redirector</a>
        </Paragraph>
      </CardItem>

      <CardItem title="New website with built in music player" date="4-Jul-2009" author="Nate">
        <Paragraph>
          It's been a long time coming, but I finally got around to completing the
          new website.
        </Paragraph>
        <Paragraph>
          Aside from the different look, the main differences are:
          <ol><li>I embedded a flash music player in the
              <a href="/music/songs.rails">songs / downloads</a> page
              so that people don't have to muck around downloading mp3s to play them.</li>
            <li>The content is all taken from easy to edit xml files which makes
              it much easier to make simple changes, like adding this post.</li>
          </ol>
          I hope it works well for everyone.
        </Paragraph>
        <Paragraph>
          I started the new website back in April last year because I wanted to try out
          the <a href="http://www.castleproject.org/monorail/">Castle Monorail</a> web
          development framework and it made sense to try it on something that could be useful.
          I was really impressed with monorail and after a short learning curve I was surprised
          how quickly I managed to do about 90% of the site. Then, as often happens in life, I
          got distracted and moved onto something else and forgot about it for a while.<br />
          The nearly complete site sat collecting dust since then, until last week
          when I decided it was about time to finish it off and put it into use so that I could
          more easily update the site. And now here it is. YAY!!
        </Paragraph>
        <Paragraph>
          Oh, and by the way, I figured it was a good chance to experiment with, and learn
          more about css and website formatting in general. I'm not a designer, but I tried
          my best, so hopefully it doesn't look too obnoxious.
        </Paragraph>
      </CardItem>

      <CardItem title="Follow The Signs (new song)" date="02-Jul-2009" author="Nate">
        <Paragraph>
          I was inspired to write a new song the other day. We've been discussing mountain top
          experiences, and journeying in church the last few weeks, and then last Friday night
          the universe conspired to give me the motivation to write about it.
        </Paragraph>
        <Paragraph>
          We went to see Hannah Montana The Movie on Friday. Apparently you're supposed to be
          a teenaged girl to go and see that movie, so I got some interesting reactions from people
          when I told them that's what I was going to see.<br />
          Anyway, I really enjoyed the movie. It is disney, so there's the typical feel good
          messages coming through, and I expected that. What I really liked though was the music.
        </Paragraph>
        <Paragraph>
          My only real previous experience of Miley Cyrus' music was her song 7 things, which isn't
          a bad song, but it's not the type of music I listen to a lot.<br />
          There were some songs of that style in the movie, but what I liked were the other songs
          in the movie. The songs performed by Miley as Miley (and not Hannah) I found to be a bit
          more mainstream pop, verging on country/pop which is becoming more popular (like Taylor Swift).
        </Paragraph>
        <Paragraph>
          There was also some distinctly country music in the movie performed by Rascal Flatts. Both
          the songs they performed I have had for a number of years, but they did acoustic versions
          of them which gave me a new appreciation of the songs. Especially Bless the Broken Road.
        </Paragraph>
        <Paragraph>
          I just love the way the song feels.<br />
          I think it's probably mostly to do with the harmonies they produce, although it's probably
          a combination of factors, but I wanted to try and see if I could take that feeling and put
          it into a song of my own. Given what we'd been discussing in church recently, and the
          added factor that there is talk (and song) of mountain climbing and journeying in
          the movie, that's the theme I went with, and 24 hours later I had a new song.
          Follow The Signs.
        </Paragraph>
        <Paragraph>
          I've made a recording of the song that you can listen to or download from the 
          <a href="/music/songs.rails">songs / downloads</a> page along with the sheet music.<br />
          I think it'll sound really cool with a few extra voices, but recording it was fun, and
          it gives a reasonable idea of how it could sound.
        </Paragraph>
        <Paragraph>
          <Audio srcList={[audioFollowTheSigns]} />
        </Paragraph>
      </CardItem>

      <CardItem title="I'll Go (new song)" date="26-Apr-2009" author="Nate">
        <Paragraph>
          I've taken inspiration from Lucas' sermons about actively taking control of the direction
          of your life rather than just letting the world pass you by, and also drawing a little
          from our trip to Healesville maze for Merryn's birthday.
        </Paragraph>
        <Paragraph>
          The result?
        </Paragraph>
        <Paragraph>
          A new song called I'll Go.
        </Paragraph>
        <Paragraph>
          A recording of the song along with the sheet music can be downloaded from the 
          <a href="/music/songs.rails">songs / downloads</a> page.<br />
        </Paragraph>
        <Paragraph>
          <Audio srcList={[audioIllGo]} />
        </Paragraph>
      </CardItem>

      <CardItem title="Your Kingdom (new song)" date="15-Apr-2008" author="Nate">
        <Paragraph>
          My first song written on an electric guitar. It's a little more upbeat than I usually 
          go but it's good fun to sing (at least it is for me).<br />
        </Paragraph>
        <Paragraph>
          <Audio srcList={[audioYourKingdom]} />
        </Paragraph>
        <Paragraph>
          Grab the mp3 and pdf sheet music from the 
          <a href="/music/songs.rails">songs / downloads</a> page.<br />
          <br />
          This is my first real go at recording an entire song by myself. It's a combination
          of many different takes of electric, bass, and acoustic guitar with vocals and a
          programmed drum track.
        </Paragraph>
      </CardItem>

      <CardItem title="NCYC is over" date="11-Jan-2009" author="Nate">
        <Paragraph>
          I had a pretty good week. Didn't get to too many bible studies because of the amount of
          time the worship band had to be in rehearsals, but that's ok. Playing up on stage was an
          awesome experience. The crowd seemed to appreciate our music, but getting a chance to see
          all the cool tech equipment up close is probably what I found to be the coolest thing.
        </Paragraph>
        <Paragraph>
          I made it to see most of the band in nightlife, partly because I spent lots of time running
          around organising bass amps for the different bands to use. I was pretty impressed with
          Simeon, SCAT, and Jess and T.E.D.
        </Paragraph>
      </CardItem>

      <CardItem title="NCYC live recording" date="14-Jun-2009" author="Nate">
        <Paragraph>
          On the 28th of June we're putting on a live concert to record the new NCYC'09 album.
          We've been practicing every Saturday and it's sounding pretty good.
        </Paragraph>
        <Paragraph>
          I decided this is a good excuse to go and buy myself a new bass guitar. I really need a
          backup guitar for NCYC, plus I've been thinking about getting a 5 string for a while so
          now's my chance.
        </Paragraph>
      </CardItem>

      <CardItem title="NCYC Worship band" date="22-May-2009" author="Nate">
        <Paragraph>
          On top of have two of my songs chosen to be part of the NCYC'09 songbook, I've also just
          found out that I've been selected from the audition process to be part of the main stage
          worship band where I'll be playing bass. It's going to be awesome!
        </Paragraph>
      </CardItem>

      <CardItem title="Two songs chosen" date="14-May-2008" author="Nate">
        <Paragraph>
          Got some very exciting news yesterday. Two of the my songs have been select by the NCYC
          music team to be part of the NCYC'09 songbook. The two songs are <b>Living For Heaven</b>
          and <b>Step Out In Faith</b>.
        </Paragraph>
      </CardItem>

      <CardItem title="Getting ready for NCYC '09 submission" date="05-Feb-2008" author="Nate">
        <Paragraph>
          Well it's been a few months now since the recording session in November and in that time
          I've been working my way through mixing the songs. I'm really loving learning more and more
          about how to make the mix sound better. It makes me want to go back and remix some of the
          older songs, but I'll concentrate on the new one's first.
        </Paragraph>
        <Paragraph>
          My main motivation for working on this at the moment is that I'm going to submit some
          of my songs for NCYC '09 (http://ncyc.org.au/music) consideration. I haven't decided how
          many I'll submit for yet, but at the moment I have five in my short list that I'm happy with.
          These are Step Out In Faith, Called, Inside Of Me, In Honour Of You and Living For Heaven.
          These are the one's i've spent the most time working on over the last few weeks and now
          that they're done I thought it was time to put them up on the website.
        </Paragraph>
        <Paragraph>
          In the last few days I've made the following changes to the downloads page.<br />
          <ul>
            <li>Added a recording of Step Out In Faith and updated the sheet music</li>
            <li>Added a recording of In Honour Of You and updated the sheet music</li>
            <li>Added a recording of Living For Heaven and updated the sheet music</li>
            <li>Added a recording of Creation</li>
            <li>Updated the recording of Called and updated the sheet music</li>
            <li>Updated the recording of Inside Of Me and updated the sheet music</li>
            <li>Added lyrics for each of the songs</li>
          </ul>
        </Paragraph>
      </CardItem>

      <CardItem title="Another Recording Session" date="16-Nov-2007" author="Nate">
        <Paragraph>
          Last Saturday we had another recording session at the church. It was a fantastic day and we
          managed to get 10 songs recorded which is a great effort. I'll be uploading them here as
          I get time to mix them.
        </Paragraph>
      </CardItem>

      <CardItem title="Remix of Shine Our Light" date="24-Sep-2007" author="Nate">
        <Paragraph>
          I recently came across some new DAW software called <a href="http://reaper.fm/" target="_self">REAPER</a>
          so I decided to try it out by remixing Shine Our Light. What can I say, I'm extremely impressed.
          I think this mix came out a lot better than my previous one and that was after only playing
          with reaper for a few days.
        </Paragraph>
        <Paragraph>
          I've replaced the old mix with the new one in the downloads section if you want to check it out.
        </Paragraph>
        <Paragraph>
          In other news, we're planning another recording session soon. Was aiming for October 20, but
          there's a wedding in the church that day, so now we're booked in for the 10th of November.
          We've got the whole day so I'm hoping we'll be able to get through most of the songs that
          don't have recordings in the download section.
        </Paragraph>
      </CardItem>

      <CardItem title="2 new songs and an update to the website" date="24-Aug-2007" author="Nate">
        <Paragraph>
          It's been a fair while since I've updated the website, and I've had a few people ask for the
          link to it lately, so I thought it was a good time for an overhaul before I started handing
          out the address. For a while now I've been thinking about moving everything over to be part
          of our church's website, so i decided to take the plunge, and here we are (well actually,
          here I am. You're not here, you're there, somewhere, wherever that is, although in all
          likelyhood we're both on earth, so in a sense, here we are).
        </Paragraph>
        <Paragraph>
          One advantage of moving the site here is that I have a proper news section to use, with an
          <a href="http://www.doncastereastuc.org.au/admin/webservices/newsrss.aspx?sid=10&amp;catid=11" target="_self">RSS link</a>,
          which means you can easily get notified whenever I add something new to the site.
        </Paragraph>
        <Paragraph>
          I am continuing to write songs as inspiration hits, and time allows.&nbsp;I have a few on
          the go at the moment, but during the last few months I "finished"
          <strong>Not Alone</strong> and <strong>Living For Heaven</strong> so I thought I'd add
          the sheet music to the
          <a href="http://www.doncastereastuc.org.au/music/songs/songs.html" target="_self">download</a>
          section. I would point out though, that we haven't done them at church with the band yet, and
          when we do there's every chance that I could decide to change something, so they could get
          modified at a later date. I think they're close though.
        </Paragraph>
        <Paragraph>
          For those of you who are like me, and want to hear how a song goes rather than trying to figure
          it out from the sheet music, I'm sorry it's been ages since we did any recording. I've tried
          setting up a laptop to record the service a few times, but it's pot luck as to if the quality
          turns out any good. I got lucky with Called one night so I've got that mp3 in the
          <a href="http://www.doncastereastuc.org.au/music/songs/songs.html" target="_self">download</a>
          section, but most of the time it's pretty ordinary. I'm thinking about trying to organise to do
          some more recording in October before my brother heads off overseas for work, but it hasn't been
          organised yet so it might not happen. We'll see though.
        </Paragraph>
      </CardItem>

      <CardItem title="Faith" date="07-Mar-2007" author="Nate">
        <Paragraph>
          This month's theme at church is Faith, and after hearing two different talks about it on
          Sunday I got inspired.
        </Paragraph>
        <Paragraph>
          <b>Step Out In Faith</b> has been added to the downloads.
        </Paragraph>
      </CardItem>

      <CardItem title="I finished writing another song today, and made some changes to another" date="30-Jan-2007" author="Nate">
        <Paragraph>
          I finished another song today. <b>This Troubled Life</b>. It's a slower one than my others
          so it'll be interesting to see how it goes with the band.
        </Paragraph>
        <Paragraph>
          Also, last night we played <b>Inside Of Me</b> for Sam's farewell service and it was pointed
          out to me that there were some typo's in the powerpoint slides. One of the typos had.
        </Paragraph>
        <Paragraph>
          <i>His advice will help me through, Help me find the patch<br /></i>
          instead of<br />
          <i>His advice will help me through, Help me find the path</i>
        </Paragraph>
        <Paragraph>
          I liked patch, so I've changed it in the sheet music as well.
        </Paragraph>
      </CardItem>

      <CardItem title="2 new songs and an mp3" date="07-Jan-2007" author="Nate">
        <Paragraph>
          It's taken a lot longer than expected to mix the songs we recorded back in July but I finally
          managed to spend some time on it and I've done <b>Inside Of Me</b> and added a download link
          for it.
        </Paragraph>
        <Paragraph>
          I've also added the sheet music for two new songs named <b>Creation</b> and <b>Called</b>.
        </Paragraph>
      </CardItem>

      <CardItem title="Another recording session" date="12-Jul-2006" author="Nate">
        <Paragraph>
          We had another recording session yesterday to record some more new songs. I'm tired now, but
          it's worth it. The recording process is so much fun.
        </Paragraph>
        <Paragraph>
          The songs we recorded were <b>Inside Of Me</b>, <b>Do What We Can</b>, and <b>A Better Way</b>.
          Not sure if I'll get time to mix them in the near future since I'm getting married next month.
          YAY!<br />
        </Paragraph>
      </CardItem>

      <CardItem title="Website Started" date="08-Jul-2006" author="Nate">
        <Paragraph>
          I'm adding the sheet music for most of the songs I've written so far.
        </Paragraph>
        <Paragraph>
          Of the mp3's I have I'm only adding <b>Through Your Eyes</b>, <b>Our Guide and Our Flame</b>,
          <b>Know The Truth</b>, <b>All You Want Me To Be</b>, and <b>Shine Our Light</b>.
        </Paragraph>
        <Paragraph>
          I have mp3s for <b>As We Gather</b>, <b>In Honour Of You</b>, and <b>Filled With Your Love</b>
          but I want to remix them before releasing them to the wild. Who's knows when I'll get time to
          do that though. If someone is interested in them before they're redone they can always email
          me and ask me for them.
        </Paragraph>
        <Paragraph>
          Sheet music is up for:
          <BlockQuote dir="ltr">
            <Paragraph>
              <strong>
                Through Your Eyes<br />
                Our Guide and Our Flame<br />
                Know The Truth<br />
                As We Gather<br />
                All You Want Me To Be<br />
                In Honour Of You<br />
                Filled With Your Love<br />
                Shine Our Light<br />
                Inside Of Me<br />
                Do What We Can<br />
                A Better Way
              </strong>
            </Paragraph>
          </BlockQuote>
        </Paragraph>
        <Paragraph>
          Enjoy!!
        </Paragraph>
      </CardItem>

    </Layout>
  )
};

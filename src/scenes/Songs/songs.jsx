import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Nav, TextBlock, Paragraph, BlockQuote, Indent } from '../../ui';

import pdfRain from '../../Downloads/Music/Rain.pdf?url';
import audioRainLive from '../../Downloads/Music/Rain_(live).mp3?url';

import pdfTheGreatIAMIsHere from '../../Downloads/Music/The Great I AM Is Here.pdf?url';
import audioTheGreatIAmIsHere from '../../Downloads/Music/The Great I AM Is Here (Acoustic).mp3?url';

import pdfWeHaveASaviour from '../../Downloads/Music/We Have A Saviour.pdf?url';
import audioWeHaveASaviour from '../../Downloads/Music/17 - Deep Creek - We Have A Saviour.mp3?url';
import audioWeHaveASaviourLive from '../../Downloads/Music/We Have A Saviour_(live).mp3?url';

import pdfAmazingInB from '../../Downloads/Music/Amazing.pdf?url';
import pdfAmazingInA from '../../Downloads/Music/Amazing (in A).pdf?url';
import audioAmazing from '../../Downloads/Music/16 - Deep Creek - Amazing.mp3?url';
import audioAmazingLive from '../../Downloads/Music/Amazing_(live).mp3?url';

import pdfFollowTheSigns from '../../Downloads/Music/Follow The Signs.pdf?url';
import audioFollowTheSigns from '../../Downloads/Music/15 - Deep Creek - Follow The Signs.mp3?url';

import pdfIllGo from '../../Downloads/Music/I\'ll Go.pdf?url';
import audioIllGo from '../../Downloads/Music/14 - Deep Creek - I\'ll Go.mp3?url';

import pdfYourKingdom from '../../Downloads/Music/Your Kingdom.pdf?url';
import audioYourKingdom from '../../Downloads/Music/13 - Deep Creek - Your Kingdom.mp3?url';

import pdfLivingForHeaven from '../../Downloads/Music/Living For Heaven.pdf?url';
import audioLivingForHeaven from '../../Downloads/Music/11 - Deep Creek - Living For Heaven.mp3?url';

import pdfNotAlone from '../../Downloads/Music/Not Alone.pdf?url';
import audioNotAlone from '../../Downloads/Music/Not Alone_(live).mp3?url';

import pdfStepOutInFaith from '../../Downloads/Music/Step Out In Faith.pdf?url';
import audioStepOutInFaith from '../../Downloads/Music/05 - Deep Creek - Step Out In Faith.mp3?url';

import pdfThisTroubledLife from '../../Downloads/Music/This Troubled Life.pdf?url';

import pdfCalled from '../../Downloads/Music/Called.pdf?url';
import audioCalled from '../../Downloads/Music/06 - Deep Creek - Called.mp3?url';
import audioCalledLive from '../../Downloads/Music/Called_(live).mp3?url';
import audioCalledLiveHeavier from '../../Downloads/Music/Called_(live heavier).mp3?url';

import pdfCreation from '../../Downloads/Music/Creation.pdf?url';
import audioCreation from '../../Downloads/Music/03 - Deep Creek - Creation.mp3?url';
import audioCreationAcoustic from '../../Downloads/Music/Creation_(acoustic).mp3?url';

import pdfABetterWay from '../../Downloads/Music/A Better Way.pdf?url';
import audioABetterWay from '../../Downloads/Music/01 - Deep Creek - A Better Way.mp3?url';
import audioABetterWayLive from '../../Downloads/Music/A Better Way_(live).mp3?url';

import pdfDoWhatWeCan from '../../Downloads/Music/Do What We Can.pdf?url';

import pdfInsideOfMe from '../../Downloads/Music/Inside Of Me.pdf?url';
import audioInsideOfMe from '../../Downloads/Music/04 - Deep Creek - Inside Of Me.mp3?url';

import pdfShineOurLight from '../../Downloads/Music/Shine Our Light.pdf?url';
import audioShineOurLight from '../../Downloads/Music/09 - Deep Creek - Shine Our Light.mp3?url';

import pdfFilledWithYourLove from '../../Downloads/Music/Filled With Your Love.pdf?url';

import pdfInHonourOfYou from '../../Downloads/Music/In Honour Of You.pdf?url';
import audioInHonourOfYou from '../../Downloads/Music/12 - Deep Creek - In Honour Of You.mp3?url';

import pdfAllYouWantMeToBe from '../../Downloads/Music/All You Want Me To Be.pdf?url';
import audioAllYouWantMeToBe from '../../Downloads/Music/All You Want Me To Be.mp3?url';

import pdfAsWeGather from '../../Downloads/Music/As We Gather.pdf?url';
import audioAsWeGather from '../../Downloads/Music/As We Gather.mp3?url';

import pdfKnowTheTruth from '../../Downloads/Music/Know The Truth.pdf?url';
import audioKnowTheTruth from '../../Downloads/Music/08 - Deep Creek - Know The Truth.mp3?url';

import pdfOurGuideAndOurFlame from '../../Downloads/Music/Our Guide And Our Flame.pdf?url';
import audioOurGuideAndOurFlame from '../../Downloads/Music/10 - Deep Creek - Our Guide And Our Flame.mp3?url';

import pdfThroughYourEyes from '../../Downloads/Music/Through Your Eyes.pdf?url';
import audioThroughYourEyes from '../../Downloads/Music/02 - Deep Creek - Through Your Eyes.mp3?url';

// import pdf from 'url:../../';
// import pdf from 'url:../../';


export const songs = [
/*

  {
    title: "",
    author: "Nathan Creek",
    date: "",
    description: (
      <TextBlock>
        <Paragraph>
        </Paragraph>
      </TextBlock>
    ),
    videos: [
      {
        description: "",
        youtube: "",
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfRain,
      },
      {
        title: 'Recording',
        url: audioRainLive,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: ``,
      },
      {
        name: 'Chorus',
        content: ``,
      },
      {
        name: 'Verse 2',
        content: ``,
      },
      {
        name: 'Bridge',
        content: ``,
      },
    ],
  },

*/

  {
    title: "Rain",
    author: "Nathan Creek",
    date: "March 2015",
    description: (
      <TextBlock>
        <Paragraph>
        Rain was mostly written at the quiet day that was one of the lent events in 2015.
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
      </TextBlock>
    ),
    videos: [
      {
        description: "Recording by MUC band during 2020 lockdown",
        youtube: "R11C-0soZnY",
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfRain,
      },
      {
        title: 'Recording (live) by MUC band, 2015',
        url: audioRainLive,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `There’s a river flowing deep within our lives
Flowing with our own concerns
We might float along and never touch the shore
but we’re called to something more
Wash away the castles we make
Giving life giving love`,
      },
      {
        name: 'Chorus',
        content: `After the rain falls down
I might swim or I might drown
It washes away the pain
and in the end I stand on solid ground
So bring on the rain, bring on the rain
Bring on the rain, bring on the rain`,
      },
      {
        name: 'Verse 2',
        content: `Water purifies us, seeps into our pores
satisfies our hungry souls
Filling cracks beneath the faces that we show
Giving life so we can grow.
Wash away the castles we make
Giving life giving love`,
      },
    ],
  },

  {
    title:"The Great I AM Is Here",
    author: "Lenten Reflection Oasis participants",
    date: "March 2014",
    description: (
      <TextBlock>
        <Paragraph>
          As part of the Lenten Reflection Oasis held on the 22nd of March I ran a music and
          song writing space where people could come and explore their creative side. The aim of the
          activities on the day was to give us time to step out of the business of life for a few
          hours and give us a chance to reflect and explore.
        </Paragraph>
        <Paragraph>
          ‘The Great I AM Is Here’ emerged out of a compilation of smaller sections of lyrics
          (typically 2 or 4 lines) contributed by many different people. The names in the sheet music
          are those people who indicated they would like their name included.
        </Paragraph>
        <Paragraph>
          A brief comment about the inspiration behind the lyrics:
        </Paragraph>
        <Indent>
          <Paragraph>
            Some time ago I came across <a href="https://www.youtube.com/watch?v=TiH9dbAsAp0">this video</a>.
            It is a song that was created after Scott Adams (the creator of dilbert) asked the readers of his blog
            to each submit 2 lines of lyrics which are gibberish, but sound like they might almost make sense.
            I was taken with this idea. Not the gibberish part, but the idea of creating a song from random lyrics
            supplied by many different people. So I thought I'd try it out, and it worked quite well in the end.
          </Paragraph>
          <Paragraph>
            Here are the guidelines I supplied:
            <Indent>
              1. Write no more than two lines.<br />
              2. Your lines should be grammatically correct.<br />
              3. It should sound like it might have deep meaning to someone else.<br />
              4. Avoid clunky sounding words. Velvet is good. Cholesterol is bad.<br />
              5. Specify whether your lines are a hook or just part of the regular lyrics.<br />
              6. Draw inspiration from the things you have heard and seen today.<br />
              Could be clever, could be obscure.
            </Indent>
          </Paragraph>
          <Paragraph>
            Inspiration was taken from
            the story telling time at the start of the day, as well as from the other thought provoking
            and reflective activities on the day.
            The words ‘I am here’ were repeated at the start of the day to help people immerse themselves
            fully in the day.
          </Paragraph>
          <Paragraph>
            There was also a story was about Abram (Abraham) and Sari (Sarah) and their journeys.
            As they travelled, they built alters to God in recognition that no matter where they went,
            God was there, ‘I AM is here’. The story time also spoke of how there are times when we step
            out into the unknown, or into the desert, and at times like this we can rely on God to be there
            to guide us.
          </Paragraph>
          <Paragraph>
            In the lyrics, the two similar phrases ‘I am here’ and ‘I AM is here’ came together to create
            a song which talks about God being present, but also that we are also present with God.
          </Paragraph>
        </Indent>
        <Paragraph>
          I have made this simple recording with just the vocal and an acoustic guitar. This is how it was
          shared with the group at the end of the day.
        </Paragraph>
      </TextBlock>
    ),
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfTheGreatIAMIsHere,
      },
      {
        title: 'Recording',
        url: audioTheGreatIAmIsHere,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Wandering through the desert is hard
Trying to find your way with just the stars in the sky
Dusty, dry I wait upon you
Yearning for the light to shine through`,
      },
      {
        name: 'Chorus',
        content: `The great I AM is here.
Everywhere, in everything
I AM here. Let us sing
The great I AM is here.
Everywhere, in everything
I AM here. Let us sing`,
      },
      {
        name: 'Verse 2',
        content: `I AM in the desert of old
In the city, each small place, then now and always
All this love and pain that we see
Does it make sense? Tell us how we should be?`,
      },
      {
        name: 'Verse 3',
        content: `Teach me, lead me, show me the way
Guide me through life’s desert. Never lead me astray.
Oh what a beautiful sight
The brilliant stars you placed for us, in the night`,
      },
      {
        name: 'Verse 4',
        content: `Walk along the labyrinth of life
The sorrow and the pain, often lead us to strife
But then I gaze into the depth of the night
Your healing power lifts us into the light`,
      },
    ],
  },

  {
    title: "We Have A Saviour",
    author: "Nathan Creek",
    date: "May 2011",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'LlfE9Ybzr8o',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfWeHaveASaviour,
      },
      {
        title: 'First recording by Nate, 2011',
        url: audioWeHaveASaviour,
      },
      {
        title: 'Recording (live)',
        url: audioWeHaveASaviourLive,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `We come before the father, broken and afraid.
Searching for the holy truth.
Time and again, we will call out your name.
What’s the point of this game that we all lose.
We could never enter in
while we have unforgiven sin`,
      },
      {
        name: 'Chorus',
        content: `You came to earth for us. A human sacrifice.
You died, our sins are now forgiven.
They laid your body in a grave.
You rose and left an empty cave.
Now we are saved. We have a saviour.
We have a saviour.`,
      },
      {
        name: 'Verse 2',
        content: `Engaging in the freedom, we are unrestrained,
searching for a way to serve.
See those in need, when they call out your name
Give the love and the justice they deserve.
Through your grace you set us free
to show the world what true love means.`,
      },
    ],
  },

  {
    title: "Amazing",
    author: "Nathan Creek",
    date: "July 2010",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'LFz_25diKLI',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music (in B)',
        url: pdfAmazingInB,
      },
      {
        title: 'Sheet Music (in A)',
        url: pdfAmazingInA,
      },
      {
        title: 'Recording by Nate, 2010',
        url: audioAmazing,
      },
      {
        title: 'Recording (live)',
        url: audioAmazingLive,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Here we are, gathered here for you.
We give our lives to you
the one who set’s us free.
Here we are, gathered in your name.
So thankful that you came
and showed us how to be.

Imagine the joy on their faces
if we spread your love to all places.`,
      },
      {
        name: 'Chorus',
        content: `And we will praise your name and sing
and offer up ourselves to him.
To know our God, our Lord and King.

And we will praise your name and show
the love of Jesus wherever we go,
and we will do something amazing.`,
      },
      {
        name: 'Verse 2',
        content: `We will find, a lesson to be learned
Is love not in return
But offered from the heart.
And each day, our story can display
We’re living Jesus’ way
And then the magic starts

Imagine the joy on their faces
if we spread your love to all places.`,
      },
      {
        name: 'Bridge',
        content: `So amazing, we offer up ourselves.
So amazing, our Lord and King.
So amazing. The love of Jesus grows
so that we can do something amazing.`,
      },
    ],
  },

  {
    title: "Follow The Signs",
    author: "Nathan Creek",
    date: "June 2009",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfFollowTheSigns,
      },
      {
        title: 'Recording',
        url: audioFollowTheSigns,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `When we come into this life
we start along a journey,
Slowly gaining experience
to help us on the way.

As a child there is lots to see.
All the love and pain and mystery.
Could I find an answer to explain?`,
      },
      {
        name: 'Chorus',
        content: `Whereever I turn my head and open my eyes,
I see the wonder and the beauty of this world that you inspired.

I know you’re walking with me. I know you’re in my heart.
You’re always with me guiding me. 
If I just follow the signs.`,
      },
      {
        name: 'Verse 2',
        content: `Something new round every turn
with all the different choices.
Learning lessons from what I’ve done
and things that I have found.

If I’m travelling on a bumpy road,
or I’m carrying a heavy load,
if I lift my head and look around,`,
      },
      {
        name: 'Verse 3',
        content: `As I'm walking through this life
I will travel over
hills and valleys and cross the plains,
the wide and narrow ways.

Every now and then I will ascend
to a mountain top experience.
It’s easy to see why I’d want to stay,
but if I travel on, then on my way`,
      },
    ],
  },

  {
    title: "I'll Go",
    author: "Nathan Creek",
    date: "April 2009",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'yU3cMmp-JnQ',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfIllGo,
      },
      {
        title: 'First recording by Nate, 2009',
        url: audioIllGo,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Standing, searching for a reason.
Why it is that life can be unfair?
Can we choose our destination?
Do we live by accident or care?

If you wander through a maze with no directions
you might find the end, or finish at the start again.`,
      },
      {
        name: 'Chorus',
        content: `I'll go. Lead me a direction and I'll go.
I'll see. Give me all the strength that I will need.
I'll show. A willingness to learn, and I'll grow
as you teach me all the things I need to know.`,
      },
      {
        name: 'Verse 2',
        content: `Planning, dreaming of a future,
knowing there's a mix of light and shade.
Facing different situations
are we just as likely to complain?

I want to do my best to follow Jesus
and not drift along, and give in to the tide of fate.`,
      },
    ],
  },

  {
    title: "Your Kingdom",
    author: "Nathan Creek",
    date: "June 2008",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'vtbm2UV0AdU',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfYourKingdom,
      },
      {
        title: 'First recording by Nate, 2008',
        url: audioYourKingdom,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Father God I really wanna say I
love the way You listen when I pray.
Take my sin and wash it all away and
set me free.

Help me see your will and how it's done to
know deep down, You're the only one.
trust in him so I am not alone he
lives in me`,
      },
      {
        name: 'Chorus',
        content: `Father take my hand and I will come.
Father give me strength to see your will be done.
If You can turn the water into wine.
Give your people light to shine.
We will see the glory of Your kingdom.`,
      },
      {
        name: 'Verse 2',
        content: `You can feed a billion in a day bring
dead to life, heal the sick and lame.
Let me feel the power of your name and
live with you.
Take the bits and pieces in my life so
You can turn the darkness into light.
Transform me and make it that I might be
born anew.`,
      },
      {
        name: 'Bridge',
        content: `If there's a better world for us to find,
where deaf can hear and You give sight to the blind.
If You can turn the water into wine,
then Your people will be fine.
Living in the glory of Your kingdom.`,
      },
    ],
  },

  {
    title: "Living For Heaven",
    author: "Nathan Creek",
    date: "2007",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 't-P8-6JigpA',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfLivingForHeaven,
      },
      {
        title: 'Recording by Deep Creek band, 2007',
        url: audioLivingForHeaven,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `We've been living, for ourselves.
Trying to help ourselves along.
Rarely thinking, about the reasons
why this might be wrong.
There's a reason that we pray.
There's a reason that we open up for God to show the way.`,
      },
      {
        name: 'Chorus',
        content: `Spirit God, send your presence.
Show the way and we will follow where you lead.
We might be dying, to go to heaven,
but we're living, to bring it here instead.`,
      },
      {
        name: 'Verse 2',
        content: `We're not perfect, we do wrong
and it makes us feel ashamed.
We feel guilty, but we don't need to.
That's why Jesus came.
Jesus came to set us free.
Jesus came so we could live our lives and be all we can be.`,
      },
    ],
  },

  {
    title: "Not Alone",
    author: "Nathan Creek",
    date: "2007",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfNotAlone,
      },
      {
        title: 'Recording',
        url: audioNotAlone,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `There's a voice inside my head.
I'm not childish, I'm not crazy, I'm just a Christian.
And it tells me what to do.
It's not trying to take my life away, but
give new life to me and you, because`,
      },
      {
        name: 'Chorus',
        content: `God is working through his kingdom
So the glory of his power can be shown.
God will help us make decisions.
When we try to find our way we're not alone.
We've got the voice inside, we're not alone.`,
      },
      {
        name: 'Verse 2',
        content: `There are things that we should do.
All the things that we can see, that need to be cured.
How do we know where to start?
You just open up yourself to God, and let his love into your heart.`,
      },
      {
        name: 'Bridge',
        content: `So listen to that voice and let it's work begin.
To see what it can do the joy that it will bring.`,
      },
    ],
  },

  {
    title: "Step Out In Faith",
    author: "Nathan Creek",
    date: "2007",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'F0dCjwNuXP0',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfStepOutInFaith,
      },
      {
        title: 'Recording by Deep Creek band, 2007',
        url: audioStepOutInFaith,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Hear them all, telling us all there's no
reason to hope, that our God is real.
Where's the proof, why do you base your whole
life on that man, from so long ago?

Hear them all, telling us that it's each
man for himself. You're number one.
What does that breed? Greed and mistrust
and pain for everyone.`,
      },
      {
        name: 'Pre Chorus',
        content: `We don't have the answers
but we know there's a better way.`,
      },
      {
        name: 'Chorus',
        content: `It's all about patience, all about kindness.
all about knowing what to do when you're called.
It's time to be ready, time to be faithful.
time to be the one who takes that step out in faith.`,
      },
      {
        name: 'Verse 2',
        content: `Hear the Lord, telling us all there's a
reason to hope, a reason to feel
loved in this world. We are a part of the
family of God, so don't feel alone.

Talk to God, Listen and learn of his
plan for the world. Then you will see
he has the power. All we can do
is call upon his name.`,
      },
    ],
  },

  {
    title: "This Troubled Life",
    author: "Nathan Creek",
    date: "2006",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfThisTroubledLife,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `There's a boy in the street, with no shoes on his feet.
Rests his head on his knees. He so poor. Begging help me please.
He knows no other way. With no home, here he'll stay.
Just a will to survive. Hoping he'll make it through the night.`,
      },
      {
        name: 'Pre Chorus',
        content: `So many people crying out in need.
So many hurting. God we plead`,
      },
      {
        name: 'Chorus',
        content: `Save this troubled life. Take it as it is.
You can see the burdens it carries,
see all the heartache and tears.

Save this troubled life. May it know your love.
And I pray that someday love will find a way
to save this troubled life.`,
      },
      {
        name: 'Verse 2',
        content: `In among all the crowd. People rushing around.
Life's so busy each day. There's no time. Time to stop and pray.
All the things you can own. But you find you're alone.
What's the meaning? you cry. Searching for something deep inside.`,
      },
      {
        name: 'Bridge',
        content: `We know that life isn't easy.
We know that life isn't fair.
But we know that there is a future.
God help us to find our way there.`,
      },
      {
        name: 'Verse 3',
        content: `Here I am I am yours. Be my guide I implore.
As I pray on my knees, calling out Father help me please.
I know you will be there. Take me into your care.
Send your spirit to be by my side. Living here with me.`,
      },
    ],
  },

  {
    title: "Called",
    author: "Nathan Creek",
    date: "2006",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'WmYFWLgP694',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfCalled,
      },
      {
        title: 'Recording by Deep Creek band, 2006',
        url: audioCalled,
      },
      {
        title: 'Recording (live)',
        url: audioCalledLive,
      },
      {
        title: 'Recording (live heavier)',
        url: audioCalledLiveHeavier,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `There are many things we strive for,
many things we try to make our lives complete.
Searching for a true connection;
Try to save ourselves from failure and defeat.

In the everyday, there's no easy way.
Try to walk our own path and find the answer there.
But the answer is found, when we share love around.
So for Jesus sake may the actions we take, show that we care.`,
      },
      {
        name: 'Chorus',
        content: `It's not enough just to stand on the side lines.
Not enough to be a part of the crowd.
That's not the way our lives should be.

We are called to be a part of the action.
We are called to be a part of it now.
Called on to share some love.
Called on to share God's love. (This line in last chorus only)`,
      },
      {
        name: 'Verse 2',
        content: `Giving hope to those who need it;
who have fallen through the cracks and can't be seen.
We can help the poor and needy,
if we open up our hearts and plant the seed.

It's a difficult thing, pain and suffering.
It's not easy to find the answer to despair.
But the answer is found, when we share love around.
So for Jesus sake may the actions we take, show that we care.`,
      },
    ],
  },

  {
    title: "Creation",
    author: "Nathan Creek",
    date: "2006",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'oGDS2BVjUg4',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfCreation,
      },
      {
        title: 'Recording by Deep Creek band, 2006',
        url: audioCreation,
      },
      {
        title: 'Recording (acoustic)',
        url: audioCreationAcoustic,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `It's a mystery, it's something that we seek
as we learn about ourselves.
Where did we come from? What is our origin?
What's the answer? Who can tell?`,
      },
      {
        name: 'Pre Chorus',
        content: `We believe in a creator we call God.
He's the one that gave us everything we've got.`,
      },
      {
        name: 'Chorus',
        content: `You can find him if you look at all you see.
Take a moment to believe.
You can find him he's in every single thing.
We can know we live in his creation.`,
      },
      {
        name: 'Verse 2',
        content: `Find the blessings in the actions that we take.
Know they're greater than they seem.
It's a system where each creature has it's place.
Who would give this life to me?`,
      },
      {
        name: 'Bridge',
        content: `To see the wind in the trees.
To wander on a beach, feel the ocean breeze.
These are signs that we have.
Simply see them and know that`,
      },
    ],
  },

  {
    title: "A Better Way",
    author: "Nathan Creek",
    date: "2006",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: '9iyvyKgzmAs',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfABetterWay,
      },
      {
        title: 'Recording by Deep Creek band, 2006',
        url: audioABetterWay,
      },
      {
        title: 'Recording (live)',
        url: audioABetterWayLive,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Learning what's important. How our faith's defined.
How to tell the truth from all the choice we find.
Learning to interpret all we see and hear.
Finding common ground even though we disagree.
Giving us the power to understand
we should not be fighting our fellow man`,
      },
      {
        name: 'Chorus',
        content: `Through our living spread the message wide.
In our example show that God is in our lives.
With our expressions of tolerance and grace
we will show the world there's a better way.`,
      },
      {
        name: 'Verse 2',
        content: `How to love our neighbour? Find the things they need.
It's not always easy, it's not always clear.
Love is not just giving. It's an attitude.
Tolerance, compassion, respect and gratitude.
Making sure we're patient and we're kind.
Making sure we're keeping an open mind.`,
      },
      {
        name: 'Bridge',
        content: `It's a way of justice, it's a way of peace
and if we keep on trying, it will never cease`,
      },
    ],
  },

  {
    title: "Do What We Can",
    author: "Nathan Creek",
    date: "2006",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfDoWhatWeCan,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `So lucky living in this world.
So many chances to be good.
To choose our course of action,
whether right or wrong.
We still know we're living as you made us.`,
      },
      {
        name: 'Chorus',
        content: `In our hearts we believe, in a God who can give everything that we need.
By our faith we can see, that our lives are meant to be.
With the gift of each day, we will find time to listen and find time to pray,
and we'll dance, and we'll sing, and we'll do what we can to worship him.`,
      },
      {
        name: 'Verse 2',
        content: `So lucky living in this world.
To be an individual,
not measured by a standard,
special and unique.
Knowing that God loves us as he made us.`,
      },
    ],
  },

  {
    title: "Inside Of Me",
    author: "Nathan Creek",
    date: "2006",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfInsideOfMe,
      },
      {
        title: 'Recording',
        url: audioInsideOfMe,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Living as a child of God. Living in his way.
An expression of his love in all I do and say.
Given freedom, given choice. Guided by his will.
Learning to discern what's right. Potential to fulfil.`,
      },
      {
        name: 'Pre Chorus',
        content: `I will give my life to you and know that I will be`,
      },
      {
        name: 'Chorus',
        content: `Living with God inside of me.
He gives me strength and helps me see
what I can be, what I can do with my life now that he's set me free.
As a disciple of the Lord I can see Jesus' love outpoured.
Leading by example, Living with God inside of me.`,
      },
      {
        name: 'Verse 2',
        content: `Giving him my everything. Offering the lot.
Facing all the challenges that come no matter what.
His advice will help me through, help me find the patch.
Giving me the chance to make the best with what I have.`,
      },
      {
        name: 'Verse 3',
        content: `Taking all I learn from him. Taking his design.
Using it to shape my life and join it to the vine.
Part of more than what we see. What does it require?
Just ask him into my life and he'll set me on fire.`,
      },
    ],
  },

  {
    title: "Shine Our Light",
    author: "Nathan Creek",
    date: "2006",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfShineOurLight,
      },
      {
        title: 'Recording',
        url: audioShineOurLight,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `When we wake up in the morning, and begin a brand new day.
It's a gift that we've been given, yet we still complain.
Stress and turmoil can be blinding. They can cloud the things we see.
Seeing nothing but the hardship, it's not for you and me.`,
      },
      {
        name: 'Chorus',
        content: `So we shine our light like the sun in the sky.
Shine it bright till there's no more night.
Living in your radiance, it can make a difference.
You are there to ease our minds.
Understanding that you, know us through and through and through.
There's no reason to be shy
as we shine our light, shine our light.`,
      },
      {
        name: 'Verse 2',
        content: `Tell us how you want to use us. Tell us where we are to go.
Use the talents that you gave us, and help new one's to grow.
Spread the good news of your kingdom. Show that love is in your plan.
See it when injustice happens, and fix it if we can.`,
      },
      {
        name: 'Bridge',
        content: `If we shine out brilliantly, shine it out for all to see.
We can show the world, there's a better way,
than a world that's dull and grey.`,
      },
    ],
  },

  {
    title: "Filled With Your Love",
    author: "Nathan Creek",
    date: "2006",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfFilledWithYourLove,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `This world's a jungle, this world's a maze.
So many options that can all seem the same.
No choice between them. Which way to go?
How do we follow you?
Is there a way we can know?`,
      },
      {
        name: 'Chorus',
        content: `As we walk along, and follow your light.
So bright it even lights the darkest night.
Discovering new, what couldn't be seen.
The space in between is filled with your love.`,
      },
      {
        name: 'Verse 2',
        content: `Glorious Father. Mighty and strong.
Walking beside us as we journey along.
You hold the lantern, lighting our course.
You call us to follow you.
giving our lives to your cause.`,
      },
      {
        name: 'Bridge',
        content: `We know you're the way,
to see light of day.
In all that we do help us listen and pray.`,
      },
    ],
  },

  {
    title: "In Honour Of You",
    author: "Nathan Creek",
    date: "2006",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'a_pxFh5iK64',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfInHonourOfYou,
      },
      {
        title: 'Recording by Deep Creek band, 2006',
        url: audioInHonourOfYou,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `Cleanse me and wash clean my eyes.
Help me see your beauty. Help me see your light.
I know that you are with me,
know that you are near,
know that you can take away my fear.

Heal me and warm up my heart.
Help me feel your presence when my life gets hard.
To share my troubles with you,
let my burdens go.
You will keep me moving when I'm slow.`,
      },
      {
        name: 'Chorus',
        content: `Lord I love you and want to make you glad.
Through my faith, I believe that you have
made me who I am.
When the things you ask of me
I don't know how to do.
Give me strength to live my life
in honour of you.`,
      },
      {
        name: 'Verse 2',
        content: `Bless me with gifts of your love.
Help me use them wisely. Help me to become
a servant in your kingdom
living in your grace.
You are there to help me know my place.

Send me to go and proclaim.
Help me be your witness speaking in your name.
To show the world I love you,
you're showing me the way.
You are with me each and every day.`,
      },
    ],
  },

  {
    title: "All You Want Me To Be",
    author: "Nathan Creek",
    date: "2005",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfAllYouWantMeToBe,
      },
      {
        title: 'Recording',
        url: audioAllYouWantMeToBe,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `I jump out of bed in the morning,
grab some breakfast and go about my day.
There's a song in my heart, but I'm only at the start,
Hoping that it's go'n to stay that way.

Yesterday I got into some trouble.
I got into a heated argument.
It was clear I was right, but I know I shouldn't fight.
Will I make the same mistake today?`,
      },
      {
        name: 'Chorus',
        content: `Oh lord, keep me your child,
and lead me through each day.
Teach me to see when I'm needed,
and to listen when I pray.
Oh lord, I don't deserve it,
but your grace gives me riches for free.
So I'll call on your name.
Help me be all you want me to be.`,
      },
      {
        name: 'Verse 2',
        content: `I jump in the car in the garage.
Off to work there's so much to be done.
I'm cruising down the road, up until the traffic slowed.
An accident, someone ran off the road.

I drove right on by and was thinking,
That I'm going to be late now, thanks a lot.
What's important to me? What if I had hit that tree?
Work can wait for me, I'm still alive.`,
      },
      {
        name: 'Verse 3',
        content: `Sometimes I take things for granted,
like the way good things happen everyday.
Like the offer of a gift, from a friend to give a lift,
when I'm feeling dull and kind of grey.

A gift that I often take for granted,
is that God is watching over me always.
If I'm down in the dumps, I can turn to him at once.
He will hear and listen as I pray.`,
      },
    ],
  },

  {
    title: "As We Gather",
    author: "Nathan Creek",
    date: "2005",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfAsWeGather,
      },
      {
        title: 'Recording',
        url: audioAsWeGather,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `As we gather in your presence oh Lord.
A community of life in your name.
In our gathering here, may your spirit be near.
As we gather in your presence oh Lord.`,
      },
      {
        name: 'Chorus',
        content: `We are gathered here with you.
Teach us, and heal us this day.
Fill our hearts with peace and love,
as we come near to you.`,
      },
      {
        name: 'Verse 2',
        content: `As we pray in your presence oh Lord.
Asking you how we can live in your name.
Speak your will to our ear. Take our doubt and our fear.
As we pray in your presence oh Lord.`,
      },
      {
        name: 'Verse 3',
        content: `As we worship in your presence oh Lord.
Showing you that we can live in your name.
May our actions reflect, that it's you we respect.
As we worship in your presence oh Lord.`,
      },
      {
        name: 'Verse 4',
        content: `As we praise you in your presence oh Lord.
Thanking you that we can live in your name.
You are wonderful and, we've been saved through your plan.
As we praise you in your presence oh Lord.`,
      },
    ],
  },

  {
    title: "Know The Truth",
    author: "Nathan Creek",
    date: "2005",
    videos: [
      {
        description: 'Recording by MUC band during 2020 lockdown',
        youtube: 'LHjpo8y53dI',
      },
    ],
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfKnowTheTruth,
      },
      {
        title: 'Recording',
        url: audioKnowTheTruth,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `There are many questions we can say,
to try to know you more, and try to know your ways.
How do we know the truth? How do we know,
what we believe is real? Not something that we made.

The signs of your existence can be easily ignored.
But there is so much more than what we see.`,
      },
      {
        name: 'Chorus',
        content: `Have faith in God above.
Even when he can't be seen.
Even when he can't be heard.
Just take a look around.
See what God has made for you,
and you'll see the proof.
Have faith in God and you will know the truth.`,
      },
      {
        name: 'Verse 2',
        content: `There are people hurting in this world,
just trying to get by, trying to make it work.
They do not know the truth and cannot see,
what we believe is real. Not something that we made.

The signs of your existence can be easily ignored.
But there is so much more that they can't see.`,
      },
      {
        name: 'Verse 3',
        content: `There are many questions we can say,
to try to know you more, and try to know your ways.
We'll come to know the truth and then we'll see,
what we believe is real. Not something that we made.

The signs of your existence will be seen and not ignored.
And in your name we'll live our lives for you.`,
      },
    ],
  },

  {
    title: "Our Guide and Our Flame",
    author: "Nathan Creek",
    date: "2005",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfOurGuideAndOurFlame,
      },
      {
        title: 'Recording',
        url: audioOurGuideAndOurFlame,
      },
    ],
    lyrics: [
      {
        name: 'Chorus',
        content: `You hold the world in your hands.
You can look at all the pieces,
and see how they fit your plan.
And we want to be a part of it.
All we have to do is use your spirit.
Send it down. Be our guide and be our flame.`,
      },
      {
        name: 'Verse 1',
        content: `Help us to be your people, so we can try to change the world.
Not by telling people what to do, by being part of it ourselves.
The world is what we make it. It's our choice in all we do,
but along the way, we'll think and pray, and be guided there by you.`,
      },
      {
        name: 'Verse 2',
        content: `How could we live without you, like so many people do?
With no spirit giving us a hand, and giving us a different view?
Nothing there but darkness. Even though there's lots to see.
and the meaning there, would not compare, we'd be living randomly.`,
      },
      {
        name: 'Bridge',
        content: `Without you we're driving blind.
With no purpose and no meaning, no direction in our lives.
We're all travelling on a journey, that we know will end some day.
But it's not the end where we need your help,
it's the steps along the way.`,
      },
    ],
  },

  {
    title: "Through Your Eyes",
    author: "Nathan Creek",
    date: "2005",
    downloads: [
      {
        title: 'Sheet Music',
        url: pdfThroughYourEyes,
      },
      {
        title: 'Recording',
        url: audioThroughYourEyes,
      },
    ],
    lyrics: [
      {
        name: 'Verse 1',
        content: `People don't know who you are
or understand your love.
Why is the world the way it is?
People are angry, people are jealous
People have things go wrong in their lives
Why don't they all turn to you?`,
      },
      {
        name: 'Chorus 1',
        content: `Help them when they're down, or they're in trouble.
Help them with the pain, and ease the struggle.
Give them all a sense of hope and meaning in their lives.
Show them that there's more to life than living.
Show them that there's more reward in giving.
Help them to see heaven through your eyes.`,
      },
      {
        name: 'Verse 2',
        content: `How can we hope to know you
when you know everything
That is why all that we must learn
is Care and compassion, love and forgiveness,
how to make your will done here on earth.
Then we can all turn to you.`,
      },
      {
        name: 'Chorus 2',
        content: `Help us when we're down, or we're in trouble.
Help us with the pain, and ease the struggle.
Give us all a sense of hope and meaning in our lives.
Show us that there's more to life than living.
Show us that there's more reward in giving.
Help us to see heaven through your eyes.`,
      },
    ],
  },

]
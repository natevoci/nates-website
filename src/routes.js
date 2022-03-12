import React, { lazy } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import MusicIcon from '@mui/icons-material/LibraryMusic';
import SongsIcon from '@mui/icons-material/Lyrics';
import DevIcon from '@mui/icons-material/Code';

const Home = lazy(() => import('./scenes/Home'));
const Music = lazy(() => import('./scenes/Music'));
const Songs = lazy(() => import('./scenes/Songs'));
const Dev = lazy(() => import('./scenes/Dev'));

export const ROUTES = {
  HOME: {
    url: '/home',
    Icon: HomeIcon,
    title: 'Home',
    Component: Home,
  },
  MUSIC: {
    url: '/music',
    Icon: MusicIcon,
    title: 'Music',
    Component: Music,
  },
  MUSIC_SONGS: {
    url: '/music/songs',
    Icon: SongsIcon,
    title: 'Songs',
    Component: Songs,
  },
  // MUSIC_PLAYER: {
  //   url: '/ClientApps/music-player/index.html',
  //   title: 'Player',
  //   Component: ,
  // },
  DEV: {
    url: '/dev',
    Icon: DevIcon,
    title: 'Dev',
    Component: Dev,
  },
};

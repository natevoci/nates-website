import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import MusicIcon from '@mui/icons-material/LibraryMusic';
import SongsIcon from '@mui/icons-material/Lyrics';
import DevIcon from '@mui/icons-material/Code';

const Home = lazy(() => import('./scenes/Home'));
const Music = lazy(() => import('./scenes/Music'));
const Songs = lazy(() => import('./scenes/Songs'));
const Dev = lazy(() => import('./scenes/Dev'));

export const ROUTES = {
  ROOT: {
    url:'/',
    element: <Navigate to="/home" />,
  },
  HOME: {
    url: '/home',
    handleAnchor: true,
    Icon: HomeIcon,
    title: 'Home',
    element: <Home />,
  },
  MUSIC: {
    url: '/music',
    Icon: MusicIcon,
    title: 'Music',
    element: <Music />,
  },
  MUSIC_SONGS: {
    url: '/music/songs',
    Icon: SongsIcon,
    title: 'Songs',
    element: <Songs />,
  },
  // MUSIC_PLAYER: {
  //   url: '/ClientApps/music-player/index.html',
  //   title: 'Player',
  //   element: ,
  // },
  DEV: {
    url: '/dev',
    Icon: DevIcon,
    title: 'Dev',
    element: <Dev />,
  },
};

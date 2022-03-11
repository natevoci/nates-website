import React, { lazy } from 'react';

const Home = lazy(() => import('./scenes/Home'));
const Music = lazy(() => import('./scenes/Music'));
const Songs = lazy(() => import('./scenes/Songs'));
const Dev = lazy(() => import('./scenes/Dev'));

export const ROUTES = {
  HOME: {
    url: '/home',
    title: 'Home',
    Component: Home,
  },
  MUSIC: {
    url: '/music',
    title: 'Music',
    Component: Music,
  },
  MUSIC_SONGS: {
    url: '/music/songs',
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
    title: 'Dev',
    Component: Dev,
  },
};

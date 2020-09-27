import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get("window");

export const CIRCLE_SIZE = 64;
export const DURATION = 1000;
export const TEXT_DURATION = DURATION * 0.8;

export const colors = [
  {
    initialBgColor: '#FFF',
    bgColor: '#555',
    nextBgColor: '#555',
  },
  {
    initialBgColor: '#FFF',
    bgColor: '#555',
    nextBgColor: 'yellowgreen',
  },
  {
    initialBgColor: '#555',
    bgColor: 'yellowgreen',
    nextBgColor: 'midnightblue',
  },
  {
    initialBgColor: 'yellowgreen',
    bgColor: 'midnightblue',
    nextBgColor: 'turquoise',
  },
  {
    initialBgColor: 'midnightblue',
    bgColor: 'turquoise',
    nextBgColor: 'goldenrod',
  },
  {
    initialBgColor: 'turquoise',
    bgColor: 'goldenrod',
    nextBgColor: '#E354',
  },
  {
    initialBgColor: 'goldenrod',
    bgColor: '#E354',
    nextBgColor: '#003577',
  },
];
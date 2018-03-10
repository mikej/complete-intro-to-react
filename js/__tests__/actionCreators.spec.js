// @flow

import { setSearchTerm, addAPIData } from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      rating: '0.8',
      title: 'Stranger Things',
      year: '2016–',
      description:
        'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
      poster: 'st.jpg',
      imdbID: 'tt4574334',
      trailer: '9Egf5U8xLo8'
    })
  ).toMatchSnapshot();
});

import React from 'react';
import PhotoWheel from '../../../public/bundle.js';
import { shallow } from 'enzyme';

describe('Photowheel component', () => {
  it('photos length is equal to 5', () => {
    const wrapper = shallow(<PhotoWheel />);
    const photos = wrapper.state().photos;
    expect(photos.length).toEqual(5);
  })
});
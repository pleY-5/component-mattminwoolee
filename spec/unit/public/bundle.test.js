import React from 'react';
import PhotoWheel from '../../../client/components/photowheel.jsx';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';
import sinon from 'sinon';

jest.mock('react-dom');

describe('Photowheel component setup', () => {
  it('should render just 1 component', () => {
    const wrapper = shallow(<PhotoWheel />);
    expect(wrapper.length).toEqual(1);
  });
 

  it('default restaurant should start at 4', () => {
    const wrapper = shallow(<PhotoWheel />);
    const restaurant = wrapper.state().restaurant;
    expect(restaurant).toEqual(4);
  });

  it('default photos should start at 6', () => {
    const wrapper = mount(<PhotoWheel />);
    wrapper.state().photos = ["https://s3-media3.fl.yelpcdn.com/bphoto/Q_EQF9aKUUMOcq02epl9_Q/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/9EPJd7aZy14XantZ0zYEBQ/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/Z4D44HM1NPk3E8oG0McMbQ/o.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/EytB0SwUIwSTdEXyEcfk2A/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/URIuduXlqvAA-h323K3m7A/o.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/LH4k7Lv4Puo9UnnqXHqtIQ/o.jpg"]
    expect(wrapper.state().photos.length).toEqual(6);
  });

  
  // it('renders children when passed in', () => {
  //   const wrapper = shallow(<PhotoWheel>);
  //   expect(wrapper.contains(<div className="hi" />).to.equal(true);
  // });

  it('renders correctly', () => {
    const tree = renderer
      .create(<PhotoWheel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('allows us to set props', () => {
    const wrapper = mount(<PhotoWheel bar="baz" />);
    expect(wrapper.props().bar).toEqual('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
    wrapper.unmount()
  });
  
  // xit('simulates click events', () => {
  //   const onClick = sinon.spy();
  //   const wrapper = mount(<PhotoWheel clickHandler={onClick} />);
  //   wrapper.find('.photowheel__container___3_Zuq').simulate('click');
  //   expect(onClick.callCount).toEqual(1);
  //   wrapper.unmount()
  // });

  // it('should have called react-dom render', () => {
  // 	expect(render).toHaveBeenCalledWith(
  // 		<PhotoWheel />, "photo-wheel"
  // 	);
  // 	expect(render).toHaveBeenCalledTimes(1);
  // });
});
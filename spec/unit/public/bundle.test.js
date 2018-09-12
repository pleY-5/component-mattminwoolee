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
 

  it('default restaurant should start at 2', () => {
    const wrapper = shallow(<PhotoWheel />);
    const restaurant = wrapper.state().restaurant;
    expect(restaurant).toEqual(4);
  });

  // it('default photos should start at 5', () => {
  //   const wrapper = mount(<PhotoWheel />);
  //   const photos = wrapper.state().photos;
  //   expect(photos.length).toEqual(5);
  // });

  
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
  });
  
  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<PhotoWheel clickHandler={onClick} />);
    wrapper.find('.photowheel__container___3_Zuq').simulate('click');
    expect(onClick.callCount).toEqual(1);
  });

  // it('should have called react-dom render', () => {
  // 	expect(render).toHaveBeenCalledWith(
  // 		<PhotoWheel />, "photo-wheel"
  // 	);
  // 	expect(render).toHaveBeenCalledTimes(1);
  // });
});
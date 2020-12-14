import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';


test('should render Header component', ()=>{
    // const renderer = new ReactShallowRenderer();

    // renderer.render(<Header />);
    // // we actually get access to the render output through renderer.
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // // when run for the first time, no snap shot so it creates one
    // // it will be used to compare next time.

    // console.log(renderer.getRenderOutput());

    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe("Expensify");
    expect(toJSON(wrapper)).toMatchSnapshot();
})
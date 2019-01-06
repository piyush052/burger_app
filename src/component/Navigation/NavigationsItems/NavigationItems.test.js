import React from 'react'
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import NaviagtionItems from './NaviagtionItems'
import NaviagtionItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()});

describe('<NavigationItems/>',()=>{
    it('should render 3 nav items when it is not authenticated ',()=>{
        const wrapper = shallow(<NaviagtionItems/>);
        expect(wrapper.find(NaviagtionItem)).toHaveLength(1);


    });
});
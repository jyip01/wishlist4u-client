import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Index Rendering', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter><Header/></BrowserRouter>,div)
    
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><Header/></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
import React from 'react';
import ReactDOM from 'react-dom';
import WishList from './WishList';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><WishList/></BrowserRouter>,div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <WishList/>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot()
})

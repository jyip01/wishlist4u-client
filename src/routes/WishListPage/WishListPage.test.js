import React from 'react';
import ReactDOM from 'react-dom';
import WishListPage from './WishListPage';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

it.skip('renders without crashing',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><WishListPage/></BrowserRouter>,div)
    ReactDOM.unmountComponentAtNode(div)
})

it.skip('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <WishListPage/>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot()
})

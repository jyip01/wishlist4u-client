import React, { Component } from "react";
import WishListContext from "../../contexts/WishListContext";
import ListApiService from "../../services/list-api-service";
import { Section, Button } from "../../components/Utils/Utils";
import ListWishList from "../../components/ListWishList/ListWishList";
import ListForm from "../../components/ListForm/ListForm";
import TokenService from '../../services/token-service';
import './WishListPage.css';
import { Link } from 'react-router-dom';


export default class WishListPage extends Component {
  state = {
    add: false,
  };

  static contextType = WishListContext;

  componentDidMount() {
    this.context.clearError();
    if(TokenService.hasAuthToken()){
      const id = TokenService.readJwtToken().user_id

      ListApiService.getLists(id)
      .then(this.context.setListWishList)
      .catch(this.context.setError);
    }else{
      this.props.history.push('/')
    }
    
  }

  landingPageLogin = () => {
    if (!TokenService.hasAuthToken()) 
      return (
        <div className='WishListPage__Landing'>
          <h2 className='WishListPage__Landing-header'>Welcome to WishList4U</h2>
          <p>Need help keeping track of all your wants and needs AS WELL as your friends and family? Look no further, WishList4U will help you keep track of all that!</p>
          <p>We've added some lists to get you started and give you an idea of how to use it, before adding your own list or making new wishes, please Login or Create an Account.</p>
          <p> If you're just here to demo the app please use the credentials below:</p>
          <ul className='WishListPage__Landing-demo-credentials'>
            <li>User Name: Test_User</li>
            <li>Password: P@ssword1</li>
          </ul>
        </div>
      );
    else
      return (<> </>);
  }

  addListButtonHandler = () => {
    !this.state.add
      ? this.setState({ add: true })
      : this.setState({ add: false });
  };

  addedList = () => {
    this.setState({add: false})
  }

  refreshLists = () => {
    ListApiService.getLists()
      .then(this.context.setListWishList)
      .catch(this.context.setError)
  }
  

  renderLists = () => {
    const { listWishList = [] } = this.context;
    return listWishList.map((list) => (
      TokenService.hasAuthToken() &&
      <ListWishList onDelete={this.refreshLists} key={list.id} list={list} />
    ));
  }

  renderAddButton = () => {
    if (TokenService.hasAuthToken())
       return (
        <Button className='Button__AddList' onClick={() => this.addListButtonHandler()}>
          + Add New List
        </Button>
      );
    else 
      return (
        <p className='AddPlaceHolder'>Please <Link className='signinLink' to='/login'>login</Link> or <Link className='signinLink' to='/register'>create an account</Link> to add a new list</p>
      );
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <this.landingPageLogin/>
        <Section list className="WishListPage">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderLists()
          )}
        </Section>
        <Section className='WishListPage__ButtonAndFormContainer'>
        <this.renderAddButton/>
        {this.state.add ? (
          <ListForm addedList={this.addedList} addList={this.addListsButtonHandler} />
        ) : null}
        </Section>
      </>
    );
  }
};

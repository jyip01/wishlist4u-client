import React, { Component } from "react";
import WishListContext from "../../contexts/WishListContext";
import ListApiService from "../../services/list-api-service";
import { Button, Input, Required } from "../Utils/Utils";
import './ListForm.css';
import TokenService from "../../services/token-service";

export default class ListForm extends Component {
  static contextType = WishListContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const { list_title, list_description } = e.target;
    const id = TokenService.readJwtToken().user_id
    ListApiService.postList(list_title.value, list_description.value, id)
      .then(this.context.addList)
      .then(() => {
        list_description.value = "";
        list_title.value = "";
      })
      .then(this.props.addedList)
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="ListForm" onSubmit={this.handleSubmit}>
        <div className="List_Title">
          <label htmlFor="ListForm__list_title">
            List Title: <Required />
          </label>
          <Input
            name="list_title"
            type="text"
            required
            id="ListForm__list_title"
          ></Input>
        </div>
        <div className="List_Description">
          <label htmlFor="ListForm__list_description">
            Description: 
          </label>
          <Input
            name="list_description"
            type="text"
            id="ListForm__list_description"
          ></Input>
        </div>
        <Button className='Button__CreateList' type="submit">Create New List</Button>
      </form>
    );
  }
}

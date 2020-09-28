import React, {Component} from 'react';
import ListContext from '../../contexts/ListContext';
import {Button} from '../../components/Utils/Utils';
import EditWishForm from '../../components/WishForm/EditWishForm';
import ListApiService from '../../services/list-api-service';
import './Wish.css';


export default class Wish extends Component {

    state = {
        edit: false,
    };

    static contextType = ListContext

    editWishButtonHandler = () => {
        this.setState({edit: false})
    }

    deleteWishButtonHandler = (wishId) => {
        ListApiService.deleteWish(wishId)
        .then(this.props.onDelete(wishId))
    }

    

    renderWish () {

        return (
            <li className='WishList__wish card'>
            {(this.state.edit) 
              ? <EditWishForm id={this.props.id} title={this.props.title} url={this.props.url} edit={this.editWishButtonHandler}/> 
              : <>  
                    <p className='WishList__wish_title title'>
                        {this.props.title}
                    </p>
                    <p className='WishList__wish_url'>
                        <a href={this.props.url} target="_blank" rel="noopener noreferrer">Link to Wish</a> 
                    </p> 
                </>
            }
            <Button className='Button__EditWish' onClick={e => {
                this.state.edit 
                ? this.setState({edit: false})
                : this.setState({edit: true})}}> 
                Edit Wish
            </Button>
            <Button className='Button__DeleteWish' onClick={e => this.deleteWishButtonHandler(this.props.id)}>
               - Delete Wish
            </Button>
            </li>
        );
    }

    render() {
       return this.renderWish();
    }
}

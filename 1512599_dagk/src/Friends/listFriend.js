import React, {Component} from 'react';
import './listFriend.css';
import Search from './search';

import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import firebase from 'firebase';
class ListFriends extends Component {

    render(){
        return(
            <div className='list-friend-container'>
                <div className='title-frame'>
                    Danh sach ban be
                </div>
                <div className='search-frame'>
                    <Search/>
                </div>
                <div className='list-friend-frame'>
                   
                </div>
            </div>
        );
    }
}


export default ListFriends

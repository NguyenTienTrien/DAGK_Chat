import React, { Component } from "react";
import firebase from "firebase";
import { Form,Label,Input,FormGroup } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login2 from "../Components/userCurent"
import ListFriends from "../Reducer/listFriend"
import Search from "../Reducer/search"
import  { Redirect } from 'react-router-dom'
import '../Users/loadUser.css'
class Chat extends Component {
    render(){
        return(
            <div>
                 <h2>Chat</h2>
                        
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail"></Label>
                                <Input  placeholder="Nhập chat" />
                            </FormGroup>
                            <div className="rows">
                                <div className="image-upload col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                      <label for="file-input">
                                      
                                          <i className="fa fa-upload" />

                                      </label>

                                      <input id="file-input" type="file" />

                                </div>
                                <div className="bentrai col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                    <button type="submit" form="form1" value="Submit">Send</button>
                                </div>
                            </div>    
                        </Form>
            </div>
        )
    }
}
export default Chat;
import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import '../App.css'
import './userCurent.css'
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom'
import  { Redirect } from 'react-router-dom'
// import GoogleButton from 'react-google-button' // optional

export const Login2 = ({ firebase, auth }) => (
  <div>
     <nav class="navbar navbar-default" role="navigation">
       <div class="container-fluid">
         <div class="navbar-header">
           <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
           </button>
           <a class="navbar-brand" href="#"></a>
         </div>
    
         <div class="collapse navbar-collapse navbar-ex1-collapse">
           <ul class="nav navbar-nav">
           </ul>
           <ul class="nav navbar-nav navbar-right">
             
             <li class="dropdown">
               
               <div>
     
                  {
                    <div className="user">
                                      
                                    <div>{auth.email}</div>
                                      <div>{auth.displayName}</div>
                                    </div>
                  }
                  
                  </div>
                
             </li>
           </ul>
         </div>
       </div>
     </nav>

        

  </div>
)



Login2.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
   
}



export default compose(
  firebaseConnect(), // withFirebase can also be used
  connect(({ firebase: { auth } }) => ({ auth }))
)(Login2)
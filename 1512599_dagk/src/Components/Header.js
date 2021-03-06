import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import '../App.css'
import { GoogleLogout } from 'react-google-login';
// import GoogleButton from 'react-google-button' // optional

export const Header = ({ firebase, auth }) => (
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
               <Link to="/">

                <button color="primary"
                      onClick={() => firebase.auth().signOut().then(function () {
                      })}
                    >Logout</button>
                </Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>

   
    <div>
     
      {
        !isLoaded(auth)
        ? <span>Loading...</span>
        : isEmpty(auth)
          ? <span>Not Authed</span>
          : <div>
                          Login information:
                        <div>{auth.email}</div>
                          <div>{auth.displayName}</div>
                        </div>
      }
      
    <br></br>
    <button color="primary"
    onClick={() => firebase.auth().signOut().then(function () {
    })}
    >Logout</button>

      </div>
  </div>
)



// Header.propTypes = {
//   firebase: PropTypes.shape({
//     Header: PropTypes.func.isRequired
//   }),
//   auth: PropTypes.object
// }

// export default compose(
//   firebaseConnect(), // withFirebase can also be used
//   connect(({ firebase: { auth } }) => ({ auth }))
// )(Header)
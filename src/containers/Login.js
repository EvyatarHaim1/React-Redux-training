import React from 'react'
import { connect } from 'react-redux'; 
import LoginForm from '../components/LoginForm';

function Login() {
    return (
      <LoginForm />
    )
}

const mapStateToProps = state => {
    return {
     
    }
 }
 
 const mapDispatchToProps = dispatch => {
   return{
   
     
   }
 }
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Login);
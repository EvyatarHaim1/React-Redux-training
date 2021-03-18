import React from 'react'
import { connect } from 'react-redux'; 

function Users() {
    return (
        <div>
            users
        </div>
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
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Users);
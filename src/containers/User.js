import React from 'react'
import { connect } from 'react-redux'; 

function User() {
    return (
        <div>
            user
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
 
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(User);
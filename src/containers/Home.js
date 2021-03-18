import React from 'react';
import { connect } from 'react-redux'; 

function Home() {
    return (
        <div>
            home
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
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { connect } from 'react-redux'; 

function App(props) {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.siteName}</a>
      </div>
    </nav>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </div>
</nav>
    </div>
  );
}

const mapStateToProps = state => {
   return {
    siteName: state.siteName
   }
}

const mapDispatchToProps = dispatch => {
  return{
  changeSideName(newSiteName){
    dispatch({
      type: "CHANGE_SITE_NAME",
      payload: newSiteName,
    })
  }
}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

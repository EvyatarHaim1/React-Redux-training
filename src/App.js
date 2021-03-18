import { connect } from 'react-redux'; 
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Users from './containers/Users';
import User from './containers/User';


function App(props) {

  setTimeout(() => {
     props.changeSideName('Hola Mi vida')
  }, 2000)


  return (
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="#">{props.siteName}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/users">users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/user/1">user number 1</NavLink></li>
          </ul>
      </div>
    </nav>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/users/:pageNumber?" component={Users} />
        <Route path="/user/:userID" component={User} />
      </div>
    </Router>
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

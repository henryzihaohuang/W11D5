import React from 'react'
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  } 

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const currentUser = this.props.currentUser;

    return(
     currentUser ? 
      <div>
        <h2>Welcome, {currentUser.username}</h2>
        <button onClick={this.handleLogout}>Log Out</button>
      </div> :
      <div>
        <h4>Hey yall! Please sign up or login to access great benches!</h4>
        <Link to="/signup" > Sign up </Link>
        <br/>
        <Link to="/login" > Login </Link>
      </div>
    )
  }
}

export default Greeting
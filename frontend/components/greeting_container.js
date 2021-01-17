import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../actions/session_action'

const mapStateToProps = state => {
  return (
    {currentUser: state.entities.users[state.session.id]}
  )
}

const mapDispatchToProps = dispatch => {
  return (
    { logout: () => dispatch(logout()) }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)

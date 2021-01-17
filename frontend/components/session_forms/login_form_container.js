import { connect } from 'react-redux'
import SessionForm from './session_form'
import { login } from '../../actions/session_action'

const mStP = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Login',
    loggedIn: Boolean(state.session.id)
  })
}

const mDtP = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user))
  };
}

export default connect(mStP, mDtP)(SessionForm)
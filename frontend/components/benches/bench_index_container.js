import {connect} from 'react-redux'
import BenchIndex from './bench_index'
import { fetchBenches } from '../../actions/bench_actions'

// {
//   session: {
//     id: null,
//   },
//   errors: {
//     session: []
//   },
//   entities: {
//     benches: {},
//     users: {}
//   }
// }

const msp = (state, ownProps) => {
  return({
    benches: Object.values(state.entities.benches)
  })
}

const mdp = dispatch => {
  return({
    fetchBenches: () => dispatch(fetchBenches())
  })
}

export default connect(msp, mdp)(BenchIndex)
import React from 'react'
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const benches = this.props.benches.map(bench => {
      return <BenchIndexItem bench={bench} key={bench.id}/>
    })

    return (
			<ul className="bench-index">
				<h3 id="bench-index-header">Look at all these benches</h3>
				{benches}
			</ul>
		); 
  }
}

export default BenchIndex
import React from 'react';

class BenchIndexitem extends React.Component {

  render() {
    const bench = this.props.bench

    return(
      <div className="bench-index-item">
        <h4>Description: {bench.description}</h4>
        <p>Latitude: {bench.lat}</p>
        <p>Longitude: {bench.lng}</p>
      </div>
    )
  }
}

export default BenchIndexitem
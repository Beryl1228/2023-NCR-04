const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    // Sort flights by departure date in ascending order
    const sortedFlights = this.props.flights.slice().sort((a, b) => a.departs - b.departs);
    return (
      <DefaultLayout>
        <div>
          <ul>
            {
              this.props.flights.map((flight) => (
                <li key={flight._id}>
                  <div>
                    <h3 style={{ color: 'blue' }}>flight number : {flight.flightNo}</h3>
                    <h3>From: {flight.airport}</h3>
                    <h3> Airline: {flight.airline}</h3>
                    <h3>Depart Time: {flight.departs.toLocaleString()}</h3>
                  </div>
                  <a href={`/flights/${flight._id}`}>Details</a>
                </li>
              ))
            }
          <br/>
          </ul>
          <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px 0' ,fontSize: "25px"}}>
          <a href="/flights/new/" >Create More Flights</a>
        </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

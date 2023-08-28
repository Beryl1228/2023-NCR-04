const React = require('react');
const DefaultLayout = require('../Default');

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    return (
      <DefaultLayout>
        <div>
          <article>
            <ul>
              <li key={flight._id}>
                <div>
                  <h3 style={{ color: 'blue' }}>flight number : {flight.flightNo}</h3>
                  <h3>To: {flight.airport}</h3>
                  <h3>Arrival Time: {flight.arrival}</h3>
                </div>
              </li>
            </ul>
            <br />
            <div style={{ textAlign: 'justify' }}> {/* Right-align buttons */}
              {/* <a href={`/flights/${flight._id}/Edit`}><button>Edit</button></a> */}
              <form action={`/flights/${flight._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
              </form>
              <a href="/flights/"><button>Back to Main</button></a>
            </div>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;

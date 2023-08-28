const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          {
            this.props.flights.map((flights) => (
              <article>
                {/* <a href={`/flights/${flights._id}`}> */}
                  <h2>
                  <span style={{ color: 'blue' }}>{flights.airline}</span> 's flight number is 
                  <span style={{ color: 'red' }}> {flights.flightNo}</span>  
                  <span style={{ color: 'green' }}> departs at {flights.departs.toLocaleString()}</span>
                  </h2>
                {/* </a> */}
              </article>
            ))
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index;
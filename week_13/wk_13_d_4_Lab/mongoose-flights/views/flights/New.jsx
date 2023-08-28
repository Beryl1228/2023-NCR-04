const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <form action="/flights" method="POST">
          <fieldset>
            <legend>Create a New Flight</legend>

            <label htmlFor="airline">Airline:</label>
            <select name="airline" id="airline" required>
              <option value="American">American</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
            <br />

            <label htmlFor="flightNo">Flight Number:</label>
            <input type="number" name="flightNo" id="flightNo" required min="10" max="9999" />
            <br />

            <label htmlFor="departs">Departs:</label>
            <input type="datetime-local" name="departs" id="departs" required />
            <br />
          </fieldset>

          <input type="submit" value="ADD FLIGHT" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;
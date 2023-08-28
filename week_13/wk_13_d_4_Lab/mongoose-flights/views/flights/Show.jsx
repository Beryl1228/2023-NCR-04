// const React = require('react');
// const DefaultLayout = require('../Default');

// class Show extends React.Component {
//   render() {
//     const flight = this.props.flight
//     return (
//       <DefaultLayout>
//         <div>
//           <article>
//             <h2>
//               { flight.name } costs {`$${flight.cost}`} and is { flight.calories } Calories!
//             </h2>
//             <a href={`/flights/${flight._id}/Edit`}><button>Edit</button></a>
//             <form action={`/flights/${flight._id}?_method=DELETE`} method="POST">
//               <input type="submit" value="Delete" />
//             </form>
//             <a href="/flights/"><button>Back to Main</button></a>
//           </article>
//         </div>
//       </DefaultLayout>
//     )
//   }
// }

// module.exports = Show;
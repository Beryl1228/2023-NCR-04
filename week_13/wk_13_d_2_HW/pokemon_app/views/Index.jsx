const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style={myStyle}>
                  <h1>See All The Pokemon!</h1>
                  {/* <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/pokemon/${i}`}>
                                      {pokemon.name}
                                  </a>{' '}
                                  is {pokemon.color} <br></br>
                                  {pokemon.readyToEat
                                      ? `It is ready to eat`
                                      : `It is not ready to eat`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul> */}
                  {/* <nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav> */}
              </div>
      );
  }
}
module.exports = Index;
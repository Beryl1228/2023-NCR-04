const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style={myStyle}>
                  <h1>See All The Pokemon!</h1>
                  { <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                            <li key={pokemon.id}>{capitalizeFirstLetter(pokemon.name)}</li>
                          );
                      })}
                  </ul> }
                  {/* <nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav> */}
              </div>
      );
  }
}
module.exports = Index;
const React = require('react');

const pokemonStyle = {
    color: '#ffcc00',
    backgroundColor: '#007acc',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '12px',
    padding: '12px',
    border: '2px solid #ffcc00',
    textDecoration: 'none',
    cursor: 'pointer'
};

const linkStyle = {
    color: '#ffffff',       // Orange color for link text
    textDecoration: 'none', // Remove underline
    cursor: 'pointer'      // Change cursor to a hand icon for links
};




const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style={pokemonStyle}>
                  <h1>See All The Pokemon!</h1>
                  { <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                            <li><a href={`/pokemon/${i}`}
                                 style={linkStyle}>
                                {capitalizeFirstLetter(pokemon.name)}
                              </a>
                            </li>
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
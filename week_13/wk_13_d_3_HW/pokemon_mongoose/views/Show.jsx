const React = require('react');

const pokemonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff3333',
    width: '500px',
    height: '500px',
    border: '2px solid #3333cc',
    borderRadius: '50%',
    margin: '0 auto',
};

const imgContainerStyle = {
    width: '80%',  // Adjust the width as needed
    height: 'auto', 
};

const imgStyle = {
    width: '100%',  // Adjust the width as needed
    height: 'auto', 
    minWidth: '200px',// Auto adjust the height to maintain aspect ratio
};

const mystyle = {
    fontSize: '18px',
    color: '#3333cc',
    fontWeight: 'bold',
    textAlign: 'center',
};



class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    
    const backToIndexLink = `/pokemons`;

    console.log("Image URL:", pokemon.img); 
      return (
              <div style={mystyle}>
                  <h1>Gotta Catch 'Em All</h1>
                  <h2 style={{ color: '#ffcc00' }}>{pokemon.name}</h2>
                <div style={{ ...pokemonStyle }}>
                    <div style={{ ...imgContainerStyle }}>
                        <img
                            src={pokemon.img}
                            alt={pokemon.name}
                            style={{ ...imgStyle }}
                        />
                    </div>
                </div>
                <a href={backToIndexLink}>back</a>
              </div>
      );
  }
}
module.exports = Show;

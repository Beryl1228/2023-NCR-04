const React = require('react');

const pokemonStyle = {
    color: '#ffcc00',             
    backgroundColor: '#ff3333',   
    fontSize: '18px',             
    fontWeight: 'bold',           
    borderRadius: '20px',         
    padding: '12px',              
    border: '2px solid #3333cc'   
};


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

class Show extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style={myStyle}>
                  <h1>Gotta Catch 'Em All</h1>
                    { <div>
                      {pokemon.map((pokemon, i) => {
                          return (
                            <><h2 key={pokemon.id}>{capitalizeFirstLetter(pokemon.name)}</h2><img src={`pokemon.img`} alt="pokemon picture"
                                  style={{ width: '50px', height: '50px', marginRight: '10px' }} /></>
                          );
                      })}
                  </div> }
                  {/* <nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav> */}
              </div>
      );
  }
}
module.exports = Show;
import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Article from "./Components/Article";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
      <Nav />
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;

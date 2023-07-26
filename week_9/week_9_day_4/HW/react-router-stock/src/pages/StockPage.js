import{
    Link
} from 'react-router-dom';
import stocks from "../data";



const StockPage = (props) => {
    return (
        <div  className="stockpage">
            {stocks.map((stocks)=>{
              return (
            <li key={stocks.symbol}> 
            <Link to={`/stocks/${stocks.symbol}`}>{stocks.name}</Link>
            </li>
              )
            }
            )}
        </div>
    );
};

export default StockPage;
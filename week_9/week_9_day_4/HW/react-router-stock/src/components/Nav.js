import { Link } from "react-router-dom";

import "../App.css"

export default function Nav (props){
  return (
    <div>
           <div className="nav">
           <Link to="/">
                <div>iStocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
        </div>
    </div>
  );
};


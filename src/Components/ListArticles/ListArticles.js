import React, {useState, useEffect} from 'react';
import Cart from '../Cart/Cart';
import axios from 'axios';

function ListArticles() {

  const [articles, setArticles] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  //0 - no filter
  //1 - asc
  //2 -dsc
  const toggleFilterPrice = () => {
    if(filterPrice === 0) {
      setFilterPrice(1);
    } else if (filterPrice === 1) {
      setFilterPrice(2);
    } else {
      setFilterPrice(1);
    }
  }

  useEffect(() => {
    if(filterPrice === 1) {
      axios.get('http://localhost:8000/articles/filter?price=asc')
      .then((result) => {
        setArticles(result.data);
      })
    } else if(filterPrice === 2) {
      axios.get('http://localhost:8000/articles/filter?price=desc')
      .then((result) => {
        setArticles(result.data);
      })
    }
  }, [filterPrice])

  useEffect(() => {
    axios.get('http://localhost:8000/articles')
    .then((result) => {
      console.log(result.data);
      setArticles(result.data);
    })
  }, [])

  return(
    <div className="row mt-5">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <p className="lead">Articles</p>
          </div>
          <table className="table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th onClick={toggleFilterPrice}>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" width="50%">{article.name}</th>
                    <td width="20%">{article.price} $</td>
                    <td width="10%">{article.quantity}</td>
                    <td width="20%">
                     <button className="btn btn-primary btn-sm float-right">Add to cart</button>
                    </td>
                  </tr>
                )
              })} 
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <div className="pagination">
            <li className="page-item">
              <a className="page-link" previous href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <Cart /> 
  </div>
  )
}

export default ListArticles;

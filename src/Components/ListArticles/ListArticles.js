import React, {useState, useEffect} from 'react';
import Cart from '../Cart/Cart';
import axios from 'axios';
import { connect } from 'react-redux';
import _ from 'underscore';

//ACTIONS
import {addArticle} from '../../Actions/cartAction';

function ListArticles(props) {

  const [articles, setArticles] = useState([]);
  const [filterName, setFilterName] = useState([false]);
  const [filterPrice, setFilterPrice] = useState([false]);
  const [filterQuantity, setFilterQuantity] = useState([false]);

  useEffect(() => {
    axios.get('http://localhost:8000/articles')
    .then((result) => {
      setArticles(result.data);
    })
  }, [])

  const filterArticle = (tag, [setFunc, param]) => {
    if(param) {
      setArticles(_.sortBy(articles, tag).reverse());
    } else {
      setArticles(_.sortBy(articles, tag)); 
    }
    setFunc(!param); 
  }

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
                <th onClick={() => filterArticle('name', [setFilterName, filterName])}>Name</th>
                <th onClick={() => filterArticle('price', [setFilterPrice, filterPrice])}>Price</th>
                <th onClick={() => filterArticle('quantity', [setFilterQuantity, filterQuantity])}>Quantity</th>
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
                     <button onClick={() => props.dispatch(addArticle({name: article.name, price: article.price}))} className="btn btn-primary btn-sm float-right">Add to cart</button>
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

export default connect()(ListArticles);

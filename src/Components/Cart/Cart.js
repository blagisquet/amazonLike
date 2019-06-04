import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { removeArticle } from '../../Actions/cartAction';
import countTotalPrice from '../../Utils/countTotalPrice';
import {Link} from 'react-router-dom';

function Cart(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <p className="lead">Cart</p>
          <table className="table-striped">
            <tbody>
                {props.articles.map((article, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row" width="50%">{article.name}</th>
                        <td width="20%">{article.price} $</td>
                        <td width="20%">
                          <button size="sm" onClick={() => {props.dispatch(removeArticle(index))}} className="btn btn-warning sm float-right">Remove</button>
                        </td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <h3>Total price : <span className="float-right">{countTotalPrice(props.articles)} $</span></h3>
          {props.articles.length === 0 ? null : <Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>}
        </div>        
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  articles: store
})

export default connect(mapStateToProps)(Cart);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

// Actions
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct(product) {
    const { addToCart } = this.props;

    /* Disparar uma action ao redux */
    addToCart(product);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(product => (
          /* Map no react precisa sempre de uma key */
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[product.id] || 0}
              </div>
              <span> ADICIONAR AO CARRINHO </span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

/* Converte action do Redux em propriedades do nosso componente */
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

/* Conectando o Home com o estado do Redux  */
export default connect(mapStateToProps, mapDispatchToProps)(Home);

import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between; /* Alinhar a logo com a logo do carrinho com espaçamento */
  align-items: center; /* Se um item for maior que o outro, alinhar igualmente */
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center; /* Alinhando o texto com o carrinho */
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7; /* Opacidade mudará ao passar em cima */
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block; /* Ele termina quando a linha acaba, logo, coloca pra baixo os outros elementos */
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

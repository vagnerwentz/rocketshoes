import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid; /* Estilo linha-coluna */
  grid-template-columns: repeat(3, 1fr); /* 3 colunas com o mesmo tamanho */
  grid-gap: 20px; /* Distanciamento de 20px entre os produtos */
  list-style: none;

  li {
    display: flex;
    flex-direction: column; /* Uma informação abaixo da outra */
    background: #fff;
    border-radius: 4px;
    padding: 20px; /* Cria o espaçamento entre a borda ao produto */

    img {
      align-self: center;
      max-width: 250px;
    }

    /* O >, irá mexer dentro do li */
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    /* Neste caso o >, irá mexer apenas o span dentro do li senão, irá mexer com o span dentro do botão */
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      /* Neste caso, o margin-top irá fazer o papel de que caso o texto
      seja muito grande, ele irá alinhar os botões, senão tivesse, o botão
      com menos linhas iria ficar mais a cima */
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

import React from 'react';
import style from 'styled-components';

const Block = style.div`
  width: 250px;
  box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.75);
  margin: 15px 0;
  margin-left: 25px;
  border-radius: 10px;
  > img { width: 100%; };
`;
const BlockContent = style.div`
  padding: 15px;
  span {
    font-weight: 600;
  }
`;
const Name = style.h3`
  text-align: center;
  margin: 0;
`;
const Data = style.p`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Product = (props) => {
  const { data } = props;
  
  return (
    <Block>
      <img src="https://static.thenounproject.com/png/1174579-200.png" alt="product"/>
      <BlockContent>
        <Name>{data.name}</Name>
        <Data>
          Brand: <span>{data.brand}</span>
        </Data>
        <Data>  
          Weight: <span>{data.weight}г</span>
        </Data>
        <Data>
          Price: <span>{data.price}грн</span>
        </Data>
      </BlockContent>
    </Block>
  )
}

export default Product;
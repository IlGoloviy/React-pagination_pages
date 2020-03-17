import React, { createRef } from 'react';
import style from 'styled-components';

const Form = style.div`
  margin: 15px 25px;
  > input, > button {
    padding: 5px 15px;
    font-size: 18px;
    border-radius: 10px;
    :focus { outline: none; }
  }
`;
const BtnAddFilter = style.button`
  background: rgb(73, 252, 142);
  margin-left: 10px;
`;
const BtnCancelFilter = style(BtnAddFilter)`
  background: rgb(252, 73, 73);
`;

class Filter extends React.Component {
  constructor(props) {
    super();
    this.brand = createRef();
  }

  render() {
    const { filterProducts } = this.props;

    return(
      <Form>
        <input ref={this.brand} type="text" placeholder="введіть назву бренду"/>
        <BtnAddFilter 
          onClick={() => filterProducts(this.brand.current.value, true)}
        >застосувати фільтр</BtnAddFilter>
        <BtnCancelFilter 
          onClick={() => {
            this.brand.current.value = '';
            filterProducts(null, false);
          }}
        >скинути</BtnCancelFilter>
      </Form>
    )
  }
}

export default Filter;
import React from 'react';
import axios from 'axios';
import style from 'styled-components';

import Product from './components/Product';
import Filter from './components/Filter';
import Pagination from './components/Pagination';

const Container = style.div`
  display: flex;
  flex-wrap: wrap;
`;

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      allProducts: [],
      currentPage: null,
      filtered: false,
      filteredProducts: [],
      filteredCurrentPage: null
    }
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/1hhuzy')
      .then(res => this.setState({
        allProducts: res.data,
        currentPage: (res.data.length > 4) ? 1 : null,
      }))
  }

  filterProducts = (value, applied) => {
    const filteredProducts = (applied) 
      ? this.state.allProducts.filter(product => {
        return product.brand.toLowerCase() === value.toLowerCase()
      }) 
      : [];
    const filteredPages = Math.ceil(filteredProducts.length / 4);

    this.setState({
      filtered: applied,
      filteredProducts,
      currentPage: 
        (applied && filteredPages < this.state.currentPage && filteredPages > 0) 
        ? filteredPages 
        : this.state.currentPage
    });
  }

  setNumberPage = (value) => {
    this.setState({
      currentPage: value
    })
  }

  render() {
    let products, totalProducts;
    const offset = (this.state.currentPage - 1) * 4;

    if (this.state.filtered) {
      totalProducts = this.state.filteredProducts.length;
      products = this.state.filteredProducts.slice(offset, offset + 4);
    } else {
      totalProducts = this.state.allProducts.length;
      products = this.state.allProducts.slice(offset, offset + 4);
    }

    return (
      <>
      <Filter filterProducts={this.filterProducts} />
      <Container>
        {products.map(product => {
          return <Product data={product} key={product.artnumber} />
        })}
      </Container>
      <Pagination 
        current={this.state.currentPage} 
        total={totalProducts} 
        setNumberPage={this.setNumberPage}
      />
      </>
    );
  }
}

export default App;

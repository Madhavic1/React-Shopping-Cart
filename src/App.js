//feature 1
import React from 'react';
import './App.css';
import data from "./data.json"
import { Products } from './components/Products';
import Filter from './components/Filter';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  filterProducts = (event) => {
    console.log(event.target.value);
    console.log(this.state.products);
    //filter the products array depending on the selected value
    if (event.target.value === "") {
      this.setState({ product: data.products, size: event.target.value });
    } else {
      console.log("Else block of Filter product function");
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
        // products: data.test
      });
    }
  };

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/"> React Shoppping Cart</a>
        </header>
        <main>
          <div className="content">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProduct={this.filterProducts}
              sortProduct={this.sortProducts}
            />
            <Products products={this.state.products} />
          </div>
          <div className="sidebar">Sidebar</div>
        </main>
        <footer>All Rights are reserved</footer>
      </div>
    );
  }
}

export default App;

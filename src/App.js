//feature 1
import React from 'react';
import './App.css';
import data from "./data.json"
import { Products } from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems : [],
      size: "",
      sort: "",
    };
  }
  addToCart = (product) => {
    console.log("Add to Cart button clicked on Product "+product._id);

    const cartItems = this.state.cartItems.slice();
    let alreadyExist = false;
    cartItems.forEach( (item) => {
      if(item._id === product._id){
        item.count++
        alreadyExist = true
      }
    });
    if(!alreadyExist){
      cartItems.push({...product,count:1});
    }
    this.setState({
      cartItems : cartItems
    })
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

  removeFromCart = (item) => {
    console.log("Removing "+item._id+"from the Cart");
    const cartItems = this.state.cartItems;
    this.setState({cartItems:cartItems.filter((x) => x._id !== item._id)});
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/"> React Shoppping Cart</a>
        </header>
        <main>
        <div className="content" >
          <div className="main">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProduct={this.filterProducts}
              sortProduct={this.sortProducts}
            />
            <Products products={this.state.products} addToCart={this.addToCart} />
         
          </div>
          <div className="sidebar">
            <Cart count={this.state.cartItems.length} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
          </div>
          </div>
        </main>
        <footer>All Rights are reserved</footer>
      </div>
    );
  }
}

export default App;

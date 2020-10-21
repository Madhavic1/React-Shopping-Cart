//feature 1
import React from 'react';
import './App.css';
import data from "./data.json"
import { Products } from './components/Products';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size : "",
      sort: ""
    };
  
  }
  
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shoppping Cart</a>
      </header>
      <main>
        <div className="content">
        <Products products={this.state.products}/>
        </div>
        <div className="sidebar">Sidebar</div>
      </main>
      <footer>All Rights are reserved</footer>
    </div>
  );
}}

export default App;

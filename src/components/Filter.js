import React, { Component } from 'react'

export default class Filter extends Component {
   

    sortChangeHandler = (e) => {
        this.setState({sortValue: e.target.value});
    }
    
  render() {
      console.log(" ---- props -----")
      console.log(this.props)
    return (
      <div className="filter">
        <div className="">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortProduct}> 
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="">
          <select  value={this.props.size} onChange={this.props.filterProduct}>
          <option>All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

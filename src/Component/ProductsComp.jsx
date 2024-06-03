import React, { Component } from "react";

class ProductsComp extends Component {
  state = {
    Productdata: [],
  };

  componentDidMount() {
    console.log("asdffghhjk");
    this.handlefetch();
  }

  async handlefetch() {
    let response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    this.setState({ Productdata: data });
  }
  render() {
    return (
      <div>
        <div className="row">
        <h1>vicky shop</h1>
        {this.state.Productdata.map((da) => (
    <div className="col-4">
          <div class="card" style={{ width: "18rem" }}>
            <img src={da.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{da.title}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}
export default ProductsComp;

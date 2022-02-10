import React, { Component } from "react";
import PageLoader from "./PageLoader";
import Product from "./Product";
import PropTypes from 'prop-types'

class Home extends Component {

    static defaultProps = {
        APIurl: "https://fakestoreapi.com/products"
    };

    static propTypes = {
        APIurl: PropTypes.string
    };

  constructor(props) {
    super(props);

    this.state = {
        product: [],
         loading: false,
    };
  }

  async componentDidMount() {
    this.setState({loading: true});
    let data = await fetch(this.props.APIurl)
    .then((res) => res.json());
    this.setState({product: data, loading: false})
  }

  render() {
    return (
      <div className="container my-3 mt-5">
        <h1 className="text-center">{this.props.title}</h1>
        {this.state.loading && <PageLoader />}
        <div className="row my-3">
            {this.state.product && this.state.product.map((element) => {
                return <div className="col-md-3 my-3" key={element.id}>
                <Product title={element.title} description={element.description} imgUrl={element.image} category={element.category} price={element.price} />
              </div>
            })}
        </div>
      </div>
    );
  }
}

export default Home;

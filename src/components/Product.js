import React, { Component } from 'react'

class Product extends Component {

    render() {
        let { title, description, imgUrl, category, price } = this.props;
        return (
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6>Price: Rs.{price}</h6>
                    <p><small className="text-muted">{category}</small></p>
                    <button type="button" className="btn btn-dark">Buy Now</button>
                </div>
            </div>
        )
    }
}

export default Product
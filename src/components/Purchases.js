import * as utils from './../utilities';
import React from 'react';
import './forms.css';

class Purchases extends React.Component {

    state = {
        productId: "",
        currency: "",
        price: 0,
        quantity: 0,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick = (e) => {
        // Call utilities based on submit button id to triage request to braze
        e.preventDefault();
        utils.logPurchase(this.state.productId, this.state.currency,this.state.price, this.state.quantity);

    }

    render() {
        return (
            <div className="Input-Group">
                <form className="form-group" onSubmit={this.handleClick}>

                    <div className="form-line">
                        <label htmlFor="product_id" className="Label">Product ID</label>
                        <input className="InputElement" required id="product_id" type="text" name="productId" onChange={this.handleChange} value={this.state.productId} />
                    </div>
                    <div className="form-line">
                        <label htmlFor="properties" className="Label">[Optional] Currency</label>
                        <input className="InputElement" id="currency" type="text" name="currency" onChange={this.handleChange} value={this.state.currency} />
                    </div>


                    <div className="form-line">
                        <label htmlFor="price" className="Label">Price</label>
                        <input className="InputElement" required id="price" type="number" name="price" onChange={this.handleChange} value={this.state.price} />
                    </div>
                    <div className="form-line">
                        <label htmlFor="quantity" className="Label">Quantity</label>
                        <input  className="InputElement" required id="quantity" type="number" name="quantity" onChange={this.handleChange} value={this.state.quantity} />
                    </div>
                    <div className="form-line">
                        <button type="submit" className="btn btn-primary" id="log_purchase_button">Submit</button>
                    </div>
                </form>
            </div>

           
        );
    }
}

export default Purchases;
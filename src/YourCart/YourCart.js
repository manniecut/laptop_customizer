import React, { Component } from 'react';
import CartItems from '../CartItems/CartItems';
import Total from '../Total/Total';
import '../App.css';


export default class YourCart extends Component {
    render() {
        return (
            <section className="main__summary">
                <CartItems
                    selected={this.props.selected}
                />
                <Total
                    selected={this.props.selected}
                />
            </section>
        )
    }
}
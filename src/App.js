import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FoodItem from './components/foodItem';
import foodjson from './foodjson';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pastadishes: foodjson,
            orders: {}
        }
        this.subToOrder = this.subToOrder.bind(this);
        this.addToOrder = this.addToOrder.bind(this);

    }
    subToOrder(key) {
        const orders = {
            ...this.state.orders
        };
        if(orders[key]>0){
            orders[key] = orders[key] -1
            this.setState({ orders })
        }


    }

    addToOrder(key) {
        const orders = {
            ...this.state.orders
        };

        orders[key] = orders[key] + 1 || 1
        this.setState({ orders })
    };

    handleChange(event,key) {
        const orders = {
            ...this.state.orders
        };
        orders[key] = event.target.value > 0
            ? event.target.value
            : 0;
        this.setState({orders})
    }
    render() {


        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Header tagline="Programmer' favorite restaurant"/>
                </div>
                <ul className="food-list list-unstyled">
                    {
                        Object.keys(this.state.pastadishes).map(key =>
                            <FoodItem index={key} key={key} details={this.state.pastadishes[key]} addToOrder={this.addToOrder} subToOrder={this.subToOrder}  orders={this.state.orders[key]} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default App;

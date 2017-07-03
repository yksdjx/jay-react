import React from "react";

class FoodItem extends React.Component {
    render() {
        const {details, index, ...others} = this.props;

        return (
            <li className="pasta-dish">
                <div className="row">
                    <div className="col-md-3">
                        <img src={details.image} alt={details.name}/>
                    </div>
                    <div className="col-md-9">
                        <h3>{details.name}</h3>
                        <p>
                            {details.desc}
                        </p>
                        <button onClick={() => this.props.addToOrder(index)} className="btn btn-primary">+</button>
                        <span className="btn btn-secondary">{this.props.orders || 0}</span>
                        <button onClick={() => this.props.subToOrder(index)} className="btn btn-danger">-</button>
                    </div>
                </div>
            </li>
        )
    }
}
export default FoodItem;

import React, {Component} from 'react';
import EditDrinkForm from './EditDrinkForm'

class ShowDrink extends Component{
	constructor(){
		super()
		this.state ={
			drink: {}
		}
	}
	componentDidMount(){
		this.setState({ drink: this.props.drink })
	}		

	render(){
    const img = this.state.drink.image ? <image src={this.state.drink.image} /> : <p></p>

		return(
			<div className="show-drink">
				<h2 className="ttu">{this.state.drink.name}</h2>
        <p><em>by {this.state.drink.brand}</em></p>
        {img}
        <p><strong>Price:</strong> ${this.state.drink.price}</p>
        <p><strong>Type:</strong> {this.state.drink.type}</p>
        <p><strong>Subtype:</strong> {this.state.drink.subtype}</p>
        <p><strong>Description:</strong> {this.state.drink.desc}</p>

				<EditDrinkForm drink={this.props.drink} />
			</div>
		)
	}
}

export default ShowDrink
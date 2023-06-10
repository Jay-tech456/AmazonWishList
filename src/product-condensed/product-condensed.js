import React, {Component } from 'react'; 
import './product-condensed.css'
import DataService from '../services/data-service'

let ds = new DataService(); 
export default class ProductCondensed extends Component{ 

     constructor(props){
            
            super(props);
               this.removeProduct = this.removeProduct.bind(this);
        } 
     
        
        removeProduct = () => { 
            ds.removeWishListItem(this.props.product)
        }
    
    render(){
       
        return (
            <div>
            <li className = "list-group-item">
                
                <div className = "row">
                <a className = "btn btn-outline-danger anchor">X</a>
                    
                    
                <p> {this.props.product.title} | <b>${this.props.product.price}</b></p>
                                                         
                </div>                                     
            </li>
                </div>
        );
    }
}
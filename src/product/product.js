import React, {Component } from 'react'; 
import './product.css'
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/nodification-service.js'
let ns = new NotificationService(); 
let ds = new DataService();
export default class Product extends Component{ 
    constructor(props){ 
        super(props)
        this.state = {onWishList: ds.itemOnWishList()}; 
        this.onButtonClicked = this.onButtonClicked.bind(this)
        this.onWishListChange = this.onWishListChange.bind(this)
    }
    
     
    componentDidMount() { 
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged); 
    }
    
    componentWillUnmount(){ 
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED); 
    }
    
    
    onButtonClicked = () =>{ 
        if(this.state.onWishList){ 
            ds.removeWishListItem(this.props.product)
        }
        ds.addWishListItem(this.props.product)
        
    }
    
    onWishListChange(newWishList) { 
        
    }
    render(){
        
        let btnClass 
        if(this.state.onWishList){ 
            btnClass = "btn btn-danger"; 
        } else { 
            btnClass = "btn btn-primary"
        }
        return (
        <div className ="card product"> 
            <img className = "card-img-top" src={this.props.product.imgUrl} alt = "img not available"></img>
        
            <div className ="card-block">
                    <h4 className ="card-title">{this.props.product.title}</h4> 
                    <p className = "card-text" > Price: $ {this.props.product.price} </p> 
                    <a href = "#" onClick = {() => this.onButtonClicked()} className = {btnClass} > {this.state.onWishList ? "Remove From Wishlist": "Add to Cart"}</a>
                </div> 
        </div> 
        );
    }
}
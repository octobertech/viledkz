import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import { Button, Row, Col, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

class Cart extends Component{

 
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
   
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p>Цена: ${item.price} | Количество: {item.quantity}</p> 
                                        <div className="add-remove">
                                            <Link to="/cart" onClick={()=>{this.handleAddQuantity(item.id)}} ><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> </Link>
                                            <Link to="/cart" onClick={()=>{this.handleSubtractQuantity(item.id)}}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> </Link>
                                            <Link to="/cart" onClick={()=>{this.handleRemove(item.id)}}>удалить</Link>
                                        </div>
                                        
                                    </div>
                        </li>
                         
                    )
                })
            ):

             (
                <p> Пока Вы ничего не добавили. Выберите товар в магазине...</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Ваши товары в корзине:</h5>
                    <ul className="collection">
                        {addedItems}                        
                    </ul>
                    <h5>Общая сумма: ${this.props.total}</h5>
                </div>      
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
 
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
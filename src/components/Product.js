import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron, Container, Row, Col } from 'reactstrap';

 class Product extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let productItem = this.props.items[this.props.match.params.id-1]
 
        return(
            <div>
            
            <Container className="product-item">
                <Row>
                <Col>
                <Card className="card-item">
                        <CardImg top width="300px" src={productItem.img} alt={productItem.title}/>
                        <CardBody>
                            <CardTitle><b>{productItem.title}</b></CardTitle>
                            <CardText>{productItem.desc}</CardText>
                            <CardSubtitle><b>Цена: ${productItem.price}</b></CardSubtitle>
                            <Button outline to="/" onClick={()=>{this.handleClick(productItem.id)}}><FontAwesomeIcon icon={faPlus} /> в корзину</Button>
                         </CardBody>
                 </Card>
                 </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
const mapStateToProps = (state, props)=>{
    return {
      items: state.items,
      
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
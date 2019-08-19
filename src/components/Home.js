import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron, Container, Row, Col } from 'reactstrap';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <Col key={item.id}>
                <Card className="card-item">
                        <CardImg top width="300px" src={item.img} alt={item.title}/>
                        <CardBody>
                            <CardTitle>
                                <Link to={`/p/${item.id}`} key={item.id}><b>{item.title}</b></Link>
                            </CardTitle>
                            <CardText>{item.desc}</CardText>
                            <CardSubtitle><b>Цена: ${item.price}</b></CardSubtitle>
                            <Button outline to="/" onClick={()=>{this.handleClick(item.id)}}><FontAwesomeIcon icon={faPlus} /> в корзину</Button>
                         </CardBody>
                 </Card>
                 </Col>

            )
        })

        return(
            <div>
            <Jumbotron className="darkjumb">
              <Container fluid>
                  <br></br>
                <h1 className="display-3 text-center">Viled.kz</h1>
                <p className="lead text-center">Премиум и люкс одежда, аксессуары и обувь. <br></br>Теперь онлайн...</p>
                <br></br>
                <br></br>
              </Container>
            </Jumbotron>
            <Container>
                <h3 className="text-center">Все товары</h3>
                <br></br>
                <Row>
                    {itemList}
                </Row>
            </Container>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class NavbarTop extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md" fixed="top">
            <NavbarBrand tag={Link} to="/">VILED.KZ</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto mr-auto" navbar>
               
                <NavItem>
                  <NavLink tag={Link} to="/men">Мужчинам</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/women">Женщинам</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/shoes">Обувь</NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Link to="/cart">({this.props.items.length}) Корзина <FontAwesomeIcon icon={faCartPlus} /></Link></NavLink>
                </NavItem>
                
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }


  const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
       
    }
}

export default connect(mapStateToProps)(NavbarTop)
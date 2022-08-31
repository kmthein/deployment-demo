import React, { Component } from 'react';
import { Nav, NavbarToggler, NavItem, Collapse, Navbar, NavbarBrand, Breadcrumb } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenNav: false
        }
    }

    toggleNav = () => {
        this.setState({isOpenNav: !this.state.isOpenNav})
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className='mr-auto' href='/'>Ristorante Con Fusion</NavbarBrand>
                        <Collapse isOpen={this.state.isOpenNav} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'><span className='fa fa-home fa-lg'></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'><span className='fa fa-info fa-lg'></span>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'><span className='fa fa-list fa-lg'></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'><span className='fa fa-address-card fa-lg'></span>Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className='h-100 p-5 rounded-3' style={{background: "#9575CD", color: "floralwhite"}}>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Header;
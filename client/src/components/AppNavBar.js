import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'
import PropTypes from 'prop-types';
import  {connect} from 'react-redux'
import LoginModal from './auth/LoginModal';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    } 

    render(){
        const {isAuthenticated, user} = this.props.auth

        const userLinks = (
            <Fragment>
                <NavItem>
                    <span
                    className='navbar-text mr-3'>
                        <strong>
                            {isAuthenticated ? `Welcole ${user.name}` : ''}
                        </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <LoginModal/>
                </NavItem>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
            </Fragment>
        )
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"> Feelings </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/> 
                        <Collapse isOpen={this.state.isOpen} navbar> </Collapse>
                            <Nav className="ml-auto" navbar> 
                                { isAuthenticated ? userLinks : guestLinks }
                            </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});
  
export default connect(mapStateToProps, null)(AppNavBar);
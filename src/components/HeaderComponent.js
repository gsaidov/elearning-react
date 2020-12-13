import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
  } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar className="navbar-color" sticky="top" expand="md">
                    <div className="container-fluid">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="Nucamp Logo" /></NavbarBrand>
                        <NavbarToggler className="toggler-color" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link link-color" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link link-color" to="/courses">
                                        <i className="fa fa-list" /> Courses
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Form className="form-inline ml-auto">
                                <div class="input-group">
                                    <Input
                                        className="form-control searchForm "
                                        type="text"
                                        name="search"
                                        id="courseSearch"
                                        placeholder="Search courses..."
                                    />
                                    <div class="input-group-append">
                                        <Button id="navSearchButton" className="searchButton" type="submit">Search</Button>
                                    </div>
                                </div>
                            </Form>

                            <span className="navbar-text ml-auto">
                                <Button className="link-color login-button" outline size="sm" onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar> 
        );
    }
}   


export default Header;
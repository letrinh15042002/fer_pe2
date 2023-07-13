import React, { Component } from 'react';


import { NavLink } from 'react-router-dom';

import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            // isModalOpen: false
        };
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    // toggleModal() {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }


    // handleLogin(event) {
    //     this.toggleModal();
    //     alert("Username: " + this.username.value + " Password: " + this.password.value
    //         + " Remember: " + this.remember.checked);
    //     event.preventDefault();

    // }


    render() {
        return (
            <div>
                <Navbar dark expand="md" className="header-navbar">
                    <div className="container">


                        <NavbarToggler onClick={this.toggleNav} className='bg-dark' />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="80" width="90" alt='Fitness and healthy' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink active className="nav-link header-navlink-item  " to='/home'>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link header-navlink-item " to='/aboutus'>ABOUT</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link header-navlink-item " to='/contactus'>CONTACT</NavLink>
                                </NavItem>






                            </Nav>
                            {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.handleLogin}>
                                        <FormGroup>
                                            <Label htmlFor="username">Username</Label>
                                            <Input type="text" id="username" name="username"
                                                innerRef={(input) => this.username = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="password">Password</Label>
                                            <Input type="password" id="password" name="password"
                                                innerRef={(input) => this.password = input} />
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="remember"
                                                    innerRef={(input) => this.remember = input} />
                                                Remember me
                                            </Label>
                                        </FormGroup>
                                        <Button type="submit" value="submit" color="primary">Login</Button>
                                    </Form>

                                </ModalBody>
                            </Modal>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav> */}
                            <Nav className="ml-auto mt-4" navbar>
                                <NavItem>
                                    <Form>
                                        <FormGroup style={{ display: 'flex', backgroundColor: 'white', border: '1px solid #333' }}>
                                            <Button type="submit" value="submit" style={{ backgroundColor: 'white', border: 'none' }}><i class="fa fa-search" style={{ color: 'black' }} aria-hidden="true"></i></Button>
                                            <Input type="email" style={{ backgroundColor: 'white', border: 'none' }} name="email" id="exampleEmail" placeholder="Search" />
                                        </FormGroup>
                                    </Form>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron-container">
                    <div className='jumbotron-image' style={{ backgroundImage: "url(/assets/images/Untitled-2.jpg)" }}>
                        <div className="jumbotron-content text-center">

                            <h1 className='jumbotron-title '>FITNESS AND HEALTHY</h1>
                            <h2 className='jumbotron-subtitle'>Here to help your to achieve your fitness goals.</h2>

                            <div>
                                <Button className='jumbotron-button'>
                                    Read more
                                </Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}


export default Header;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header/index';

function Layout (props) {
    return (
        <>
            <Header/>
            {
                props.sidebar ?
                <Container>
                    <Row>
                        <Col md={2} className="sidebar"> 
                            <ul>
                                <li><NavLink to={`/`}>Home</NavLink></li>
                                <li><NavLink to={`/category`}>Category</NavLink></li>
                                <li><NavLink to={`/products`}>Products</NavLink></li>
                                <li><NavLink to={`/orders`}>Orders</NavLink></li>
                                
                            </ul>
                        </Col>
                        <Col md={9} style={{marginLeft : 'auto'}}>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
                :
                props.children
            }

        </>
    )
}

export default Layout 

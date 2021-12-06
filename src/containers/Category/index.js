import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import { getAllCategory } from '../../actions'

function Category() {
    const category = useState(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(`Category.js`);
        dispatch(getAllCategory())
    }, [])

    const renderCategories = (categories) => {

        let myCategories = [];
        for(let category of categories){
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }

        return myCategories;
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h3>Category</h3>
                            <button>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Category
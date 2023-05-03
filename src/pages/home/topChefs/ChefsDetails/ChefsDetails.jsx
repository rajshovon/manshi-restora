import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


const ChefsDetails = ({ chef }) => {
    // console.log(chef);
    const { id, name, picture } = chef;

    return (
        <Col>
            <CardGroup className='my-5 mx-auto' style={{ width: '18rem', height: "400px", textAlign: "center" }}>
                <Card >
                    <Card.Img style={{ width: '18rem', height: "250px" }} variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='p-0'>
                        <Link to={`/chefs/${id}`}><Button style={{ borderRadius: " 0px 0px 8px 8px" }} variant="primary" className='w-100'>
                            view Recipes
                        </Button></Link>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </Col >
    );
};

export default ChefsDetails;
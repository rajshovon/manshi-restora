import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';

const SngleChefs = () => {
    const chefsDetails = useLoaderData();
    const { id, picture, name, yearsOfExperience, numOfRecipes, likes, views, recipes, } = chefsDetails;
    console.log(recipes[0].instructions);
    const recipys = recipes[0].ingredients;
    const instructions = recipes[0].instructions



    return (
        <>
            <div className='login-banner-section'>

            </div>
            <Container className="my-5">
                <Row>
                    <Col sm={4} >
                        <Image style={{ width: "350px", height: "350px" }} src={picture} thumbnail />
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="d-flex w-50 justify-content-around align-items-center py-4 mb-2 text-muted">
                                    <div className='py-2'>
                                        <div className='py-2'><span>Experience of Year </span>{yearsOfExperience}</div>
                                        <div><span>Recipes Items </span>{numOfRecipes}</div>
                                    </div>
                                    <div className='py-2'>
                                        <div className='py-2'>Likes {likes}</div>
                                        <div>Views {views}</div>
                                    </div>
                                </Card.Subtitle>
                                <div>
                                    <h3 className='text-center py-4'>{recipes[0].name}</h3>
                                </div>
                                <Card.Text className='d-flex'>
                                    <div className='w-50'>

                                        {
                                            recipys.map(recipy => <div>
                                                <p>{recipy}</p>
                                            </div>)
                                        }
                                    </div>
                                    <div className='w-50'>
                                        {
                                            instructions.map(instruction => <div>
                                                <p>{instruction}</p>
                                            </div>)
                                        }
                                    </div>
                                </Card.Text>
                                <div className='text-center'>
                                    <Link to={`/chefs`}> <Button variant="danger"><FaArrowLeft /> Go Back</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>

    );
};

export default SngleChefs;
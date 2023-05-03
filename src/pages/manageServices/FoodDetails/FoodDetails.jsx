
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';


const FoodDetails = ({ qpfooddetail }) => {
    // console.log(qpfooddetail);
    const { idMeal, strMeal, strMealThumb, rating, vew } = qpfooddetail;
    // console.log(rating);
    return (
        <Card className='text-center' style={{ width: '21rem', height: "220px", padding: "0px", margin: "10px", textAlign: "center" }}>
            <Card.Img style={{ width: '22rem', height: "170px", marginLeft: "-8px", marginTop: "-8px" }} variant="top" src={strMealThumb} />
            <Card.Body className="p-0 m-0 d-flex justify-content-between mx-3 align-items-center">
                <Card.Title className="py-0 my-0 px-3 text-start">{strMeal}
                    <Card.Text className="p-0 m-0">

                        <div className='d-flex gap-3'>

                            <Rating style={{ maxWidth: 100 }}
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar className='text-warning' />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            />
                            <h6 className='m-0'>{rating}</h6>
                        </div>


                    </Card.Text>
                </Card.Title>

                <div>
                    <h5>{vew}</h5>
                </div>
            </Card.Body>
        </Card>
    );
};

export default FoodDetails;
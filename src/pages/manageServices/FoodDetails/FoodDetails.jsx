import Card from 'react-bootstrap/Card';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from 'react-rating';


const FoodDetails = ({ qpfooddetail }) => {
    console.log(qpfooddetail);
    const { idMeal, strMeal, strMealThumb, rating } = qpfooddetail;
    return (
        <Card style={{ width: '21rem', height: "220px", padding: "0px", margin: "10px", textAlign: "center" }}>
            <Card.Img style={{ width: '22rem', height: "170px", marginLeft: "-8px", marginTop: "-8px" }} variant="top" src={strMealThumb} />
            <Card.Body className="p-0 m-0">
                <Card.Title className="py-0 my-0 px-3 text-start">{strMeal}</Card.Title>
                <Card.Text className="p-0 m-0">
                    <div className='d-flex align-items-center  flex-grow-1 gap-2'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar className='text-warning' />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />}
                        />

                    </div>
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default FoodDetails;
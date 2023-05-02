import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import FoodDetails from '../FoodDetails/FoodDetails.jsx';



const ServicesTable = () => {
    const [categories, setCategories] = useState([])
    const [qpfooddetails, setQpfooddetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/qpfood')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/qpfooddetails')
            .then(res => res.json())
            .then(data => setQpfooddetails(data))
            .catch(error => console.log(error))
    }, []);


    return (
        <div style={{ backgroundColor: "#f8f8f8" }}>
            <Container >
                <Row className="mt-5 pt-5 text-center">
                    <Col sm={4}>
                        <h1 className="mb-5">Quick Pick Food</h1>
                        <div className="my-2  text-center gap-3">
                            {
                                categories.map(categorie => <Link to={categorie.path} className="border d-block text-decoration-none gap-3 frture-food my-2" key={categorie.id}>
                                    <Image style={{ width: "32px", height: "32px" }} src={categorie.img} />
                                    <span className="px-2"> {categorie.name}</span>
                                </Link>)
                            }
                        </div>
                    </Col>
                    <Col sm={8}>
                        <Container>



                            <Row xs={1} md={2} className="g-4">
                                {
                                    qpfooddetails.map(qpfooddetail => <FoodDetails key={qpfooddetail.idMeal} qpfooddetail={qpfooddetail}></FoodDetails>)
                                }



                            </Row>



                        </Container>
                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default ServicesTable;
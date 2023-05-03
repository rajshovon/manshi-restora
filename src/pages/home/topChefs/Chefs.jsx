import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Chefs.css';
import ChefsDetails from './ChefsDetails/ChefsDetails.jsx';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>

            <div className=' chef-contsiner  mx-auto text-center mt-2 pt-3'>
                <h1>chef</h1>
                <small>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine (French pronunciation: ​[ʃɛf də kɥizin]), the director or head of a kitchen.</small>
            </div>
            <Container className='mx-auto text-center'>

                <Row>
                    {
                        chefs.map(chef => <ChefsDetails key={chef.id} chef={chef}></ChefsDetails>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Chefs;
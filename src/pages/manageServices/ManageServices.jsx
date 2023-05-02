import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ManageServices = () => {
    return (
        <div>
            <h1 className="text-center text-2xl fw-semibold">Easy Order Steps</h1>
            <span className="text-center mx-auto"><hr className="w-25  mx-auto text-center" /></span>

            <CardGroup className="mx-md-5 my-md-4 pt-md-3 mx-2 gap-3">
                <Card className="text-center border-0">
                    <Card.Body>
                        <Card.Title>Select Your Restaurant</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={'https://i.ibb.co/cTnyfcm/sr-1.png'} />


                </Card>
                <Card className="text-center border-0">
                    <Card.Img variant="top" src={'https://i.ibb.co/HN9D9QL/sd-2.png'} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>

                    </Card.Body>
                </Card>
                <Card className="text-center border-0">
                    <Card.Body>
                        <Card.Title>Select Your Restaurant</Card.Title>
                    </Card.Body>
                    <Card.Img variant="top" src={'https://i.ibb.co/nMS56hH/pco-3.png'} />
                </Card>
                <Card className="text-center border-0">
                    <Card.Img variant="top" src={'https://i.ibb.co/F0x3X7z/eym-4.png'} />
                    <Card.Body>
                        <Card.Title>Enjoy Your Meal</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ManageServices;
import {
    Row,
    Card
} from "react-bootstrap";

import { Card_Employee } from "../types/interfaces";

const CardEmployee = ( employee: Card_Employee )=>{

    return (
        <Card className="p-3">
            <Row className="align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                    <Card.Img src={employee.image} />
                </div>

                <div className={`
                    d-flex align-items-center 
                    col-lg-9 col-md-8 col-sm-7 col-6
                `}>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{employee.job_position}</Card.Title>
                        <Card.Subtitle>{employee.name}</Card.Subtitle>
                        <Card.Text>{employee.age}</Card.Text>
                    </Card.Body>

                    <Card.Title>{employee.salary}</Card.Title>
                </div>
            </Row>
        </Card>
    );
};

export default CardEmployee;